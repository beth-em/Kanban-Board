import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({message: 'Access token is missing!'});
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in .env');
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;

    // Attach users info to the request
    req.user = decoded;
    next();
    return;   // Added next() and return; to avoid typescript warning
    // Function to move to the next middleware
    next();
  } catch (err) {
    return res.status(403).json({message: 'Your token is invalid or expired token!'});
  }
};
