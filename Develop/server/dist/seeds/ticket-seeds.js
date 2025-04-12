var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Ticket } from '../models/ticket.js';
export const seedTickets = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Ticket.bulkCreate([
        { title: 'Design landing page', status: 'In Progress', description: 'Create wireframes and mockups for the landing page.', assignedUserId: 1 },
        { title: 'Set up project repository', status: 'Done', description: 'Create a new repository on GitHub and initialize it with a README file.', assignedUserId: 2 },
        { title: 'Implement authentication', status: 'To do', description: 'Set up user authentication using JWT tokens.', assignedUserId: 1 },
        { title: 'Test the API', status: 'To Do', description: 'Test the API using Insomnia.', assignedUserId: 1 },
        { title: 'Deploy to production', status: 'To Do', description: 'Deploy the application to Render.', assignedUserId: 2 },
    ]);
});
