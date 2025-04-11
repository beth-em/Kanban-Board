import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response): Promise<void> => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
  
    if (!user) {
     res.status(401).json({ message: 'Invalid username or password' });
     return;
    }

    // Function to compare hashed password
    const isMatch = password === user.password; // Temporary login logic
    // const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
     res.status(401).json({ message: 'Invalid username or password' });
     return;
    }

    // Create and sign JWT
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: '1hr' }
    );

    res.json({ token });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during login :('});
    return;
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
