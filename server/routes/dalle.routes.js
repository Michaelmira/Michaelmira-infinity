import express from "express";
import * as dontenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dontenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

export default router;