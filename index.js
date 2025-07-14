import express from 'express';
import dotenv from 'dotenv';

import router from './router/index.js';
import { logger } from './middlewares/logger.js';
import { connectToDB } from './DB/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/api', router);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection failed:', err.message);
    process.exit(1);
  });
