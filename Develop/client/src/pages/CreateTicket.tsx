import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: 0,
    title: '',
    description: '',
    status: 'To Do',
    assignedUserId: 1,
    assignedUser: null
  });

  const [users, setUsers] = useState<UserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await retrieveUsers();
        setUsers(data);
      } catch (err) {
        console.error('Failed to retrieve user info', err);
      }
    };

    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    console.log('Submitting ticket:', newTicket);
    e.preventDefault();

    // Simple frontend validation
    if (!newTicket.title || !newTicket.description) {
      alert('Title and description are required!');
      return;
    }

    try {
      const created = await createTicket(newTicket);
      console.log('Ticket created:', created);
      navigate('/');
    } catch (err) {
      console.error('Failed to create ticket', err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewTicket(prev => ({
      ...prev,
      [name]: name === 'assignedUserId' ? parseInt(value) : value
    }));
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Create Ticket</h1>

        <label htmlFor='tTitle'>Ticket Title</label>
        <input
          id='tTitle'
          name='title'
          value={newTicket.title}
          onChange={handleChange}
          required
        />

        <label htmlFor='tStatus'>Ticket Status</label>
        <select
          id='tStatus'
          name='status'
          value={newTicket.status}
          onChange={handleChange}
        >
          <option value='To Do'>To Do</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>

        <label htmlFor='tDescription'>Description</label>
        <textarea
          id='tDescription'
          name='description'
          value={newTicket.description}
          onChange={handleChange}
          required
        />

        <label htmlFor='tUserId'>Assign to User</label>
        <select
          id='tUserId'
          name='assignedUserId'
          value={newTicket.assignedUserId}
          onChange={handleChange}
        >
          {users && users.length > 0 ? (
            users.filter((user) => user.id !== null)
            .map((user) => (
              <option key={user.id} value={user.id?.toString()}>
                {user.username}
              </option>
            ))
          ) : (
            <option disabled>Loading users...</option>
          )}
        </select>

        <button type='submit'>Submit Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;
