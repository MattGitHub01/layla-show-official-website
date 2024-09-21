import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080; // CHANGE PORT FOR RAILWAY DEMO

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigin = process.env.FRONTEND_URL;


app.use(cors({
    origin: allowedOrigin, // Change for production / deployment 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

// Handle POST requests to verify Google ReCAPTCHA
app.post('/api/verify-captcha', async (req, res) => {
    const { captcha } = req.body;
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
            params: {
                secret: SECRET_KEY,
                response: captcha,
            },
        });

        const { success } = response.data;

        if (success) {
            return res.status(200).json({ message: "Success!  ReCAPTCHA verified!" });
        } else {
            return res.status(400).json({ message: "Failed! ReCAPTCHA not verified!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Serve the index.html file for any other GET requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));