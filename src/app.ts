import express from 'express';
import { setRoutes } from './routes/index';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
setRoutes(app);

export default app;