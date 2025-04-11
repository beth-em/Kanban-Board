import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    // Get token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        console.log('No token found in request!');
        return res.status(401).json({ message: 'Access token is missing!' });
    }
    try {
        const secret = process.env.JWT_SECRET_KEY;
        if (!secret) {
            throw new Error('JWT_SECRET_KEY is not defined in .env');
        }
        const decoded = jwt.verify(token, secret);
        console.log('Decoded user:', decoded);
        // Attach users info to the request
        req.user = decoded;
        next();
        // Function to move to the next middleware
    }
    catch (err) {
        console.log('Token verification failed!:', err);
        return res.status(403).json({ message: 'Your token is invalid or expired token!' });
    }
    // Fallback to avoid typescript error
    return;
};
