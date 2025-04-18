var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: If the user exists and the password is correct, return a JWT token
    const { username, password } = req.body;
    try {
        const user = yield User.findOne({ where: { username } });
        if (!user) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        // Function to compare hashed password
        //const isMatch = password === user.password; // Temporary login logic
        const isMatch = yield bcrypt.compare(password, user.password);
        console.log("Attempting login for:", username);
        console.log("Password entered:", password);
        console.log("Stored hashed password in DB:", user.password);
        console.log("Password match result:", isMatch);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        // Create and return JWT
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1hr' });
        res.json({ token });
        return;
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during login :(' });
        return;
    }
});
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
