import express from 'express';
import * as dotenv from 'dotenv';
import openai from 'openai'; // Change import statement

dotenv.config();

const router = express.Router();

const { OpenAIAPI } = openai; // Destructure OpenAIAPI from the default export

const openaiInstance = new OpenAIAPI({
  key: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E ROUTES' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openaiInstance.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;