import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import shortUrlRoutes from '../src/routes/shorturl.routes.js';
app.use('/api/urls', shortUrlRoutes);

export default app;