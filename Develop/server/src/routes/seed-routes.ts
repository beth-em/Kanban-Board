// Added seed routes folder due to login error when deploying
import { Router } from 'express';
import { sequelize } from '../models/index.js';
import { seedUsers } from '../seeds/user-seeds.js';
import { seedTickets } from '../seeds/ticket-seeds.js';

// Creates new router instance
const router = Router();

// Set up a temporary GET route at /api/seed
router.get('/', async (_req, res) => {
  try {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedTickets();
    res.status(200).json({ message: 'Seeding complete! ✅' });
  } catch (err) {
    console.error('Seeding error:', err);
    res.status(500).json({ message: 'Seeding failed.' });
  }
});

// Export router to be used in the main routes index
export { router as seedRouter };
