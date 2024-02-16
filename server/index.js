import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://fictional-happiness-7vvpvpp797qvhwqp-5173.app.github.dev', // Update with your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable set cookie
};


app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));