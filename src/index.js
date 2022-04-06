import express from "express";
import dotenv from "dotenv";
import { Deepgram } from '@deepgram/sdk';

dotenv.config();

const app = express();
const port = 8080;

const deepgram = new Deepgram(process.env.DG_KEY);

app.get("/getKey", async (req, res) => {
    console.log('JavaScript HTTP trigger function: Get Deepgram Key');
    const { key } = await deepgram.keys.create(process.env.DG_PROJECT_ID, 'realtime transcription key', ['usage:write'], { timeToLive: 10 });
    console.log(key);
    res.send(key);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
