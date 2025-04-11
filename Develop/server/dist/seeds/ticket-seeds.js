import { Ticket } from '../models/ticket.js';
export const seedTickets = async () => {
    await Ticket.bulkCreate([
        { title: 'Design landing page', status: 'In Progress', description: 'Create wireframes and mockups for the landing page.', assignedUserId: 1 },
        { title: 'Set up project repository', status: 'Done', description: 'Create a new repository on GitHub and initialize it with a README file.', assignedUserId: 2 },
        { title: 'Implement authentication', status: 'To do', description: 'Set up user authentication using JWT tokens.', assignedUserId: 1 },
        { title: 'Test the API', status: 'To Do', description: 'Test the API using Insomnia.', assignedUserId: 1 },
        { title: 'Deploy to production', status: 'To Do', description: 'Deploy the application to Render.', assignedUserId: 2 },
    ]);
};
