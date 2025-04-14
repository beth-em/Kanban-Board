var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Added seed routes folder due to login error when deploying
import { Router } from 'express';
import { sequelize } from '../models/index.js';
import { seedUsers } from '../seeds/user-seeds.js';
import { seedTickets } from '../seeds/ticket-seeds.js';
// Creates new router instance
const router = Router();
// Set up a temporary GET route at /api/seed
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.sync({ force: true });
        yield seedUsers();
        yield seedTickets();
        res.status(200).json({ message: 'Seeding complete! ✅' });
    }
    catch (err) {
        console.error('Seeding error:', err);
        res.status(500).json({ message: 'Seeding failed.' });
    }
}));
// Export router to be used in the main routes index
export { router as seedRouter };
