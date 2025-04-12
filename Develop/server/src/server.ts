import path from 'path';
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// Middleware to parse JSON
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// API routes
app.use(routes);

// Catch all handler to serve React's index.html for any other requests
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Synch models and start server
sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
