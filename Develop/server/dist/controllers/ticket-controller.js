import { Ticket } from '../models/ticket.js';
import { User } from '../models/user.js';
// GET /tickets
export const getAllTickets = async (req, res) => {
    console.log('Authenticated user:', req.user); // Added log to show decoded token
    try {
        const tickets = await Ticket.findAll({
            include: [
                {
                    model: User,
                    as: 'assignedUser', // This should match the alias defined in the association
                    attributes: ['username'], // Include only the username attribute
                },
            ],
        });
        res.json(tickets);
    }
    catch (error) {
        console.error('Ticket retrieval failed:', error); // Added error log
        res.status(500).json({ message: error.message });
    }
};
// GET /tickets/:id
export const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'assignedUser', // This should match the alias defined in the association
                    attributes: ['username'], // Include only the username attribute
                },
            ],
        });
        if (ticket) {
            res.json(ticket);
        }
        else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// POST /tickets
export const createTicket = async (req, res) => {
    console.log('Create Ticket Request:', req.body); // Add console log to indicate ticket request was created.
    const { title, status, description, assignedUserId } = req.body;
    try {
        const newTicket = await Ticket.create({ title, status, description, assignedUserId });
        res.status(201).json(newTicket);
    }
    catch (error) {
        console.log('Ticket creation error:', error); // Add console log if theres an error with ticket creation
        res.status(400).json({ message: error.message });
    }
};
// PUT /tickets/:id
export const updateTicket = async (req, res) => {
    const { id } = req.params;
    const { name, status, description, assignedUserId } = req.body;
    try {
        const ticket = await Ticket.findByPk(id);
        if (ticket) {
            ticket.title = name;
            ticket.status = status;
            ticket.description = description;
            ticket.assignedUserId = assignedUserId;
            await ticket.save();
            res.json(ticket);
        }
        else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// DELETE /tickets/:id
export const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findByPk(id);
        if (ticket) {
            await ticket.destroy();
            res.json({ message: 'Ticket deleted' });
        }
        else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
