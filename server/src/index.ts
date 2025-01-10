import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { runAIWorkFlow } from "./workflow/langflow";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/run-flow", async (req: Request, res: Response) => {
    const { input_value: inputValue, inputType = 'chat', outputType = 'chat', stream = false } = req.body;
    console.log('Received:', req.body);

    try {
        const response = await runAIWorkFlow(inputValue, inputType, outputType, stream);
        res.status(200).json({ response });
    } catch (error) {
        console.error('Main Error', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});