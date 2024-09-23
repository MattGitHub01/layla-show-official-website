import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

// Helmet CSP
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://www.google.com/recaptcha/", "https://www.gstatic.com/recaptcha/"],
            scriptSrcElem: ["'self'", "https://www.google.com/recaptcha/", "https://www.gstatic.com/recaptcha/"],
            connectSrc: [
                "'self'", 
                "https://layla-show-official-website-production.up.railway.app",
                "https://api.emailjs.com" // Allow EmailJS API
            ],
            imgSrc: ["'self'", "data:"],
            mediaSrc: ["'self'"],
            frameSrc: ["'self'", "https://www.google.com", "https://www.gstatic.com"], // Allow iframes for Google reCAPTCHA
        },
    })
);

dotenv.config();

const PORT = process.env.PORT || 8080; 

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handle OPTIONS preflight requests
app.options('*', cors());


// Configure CORS to work with server
app.use(cors({
    origin: "https://layla-show-official-website-production.up.railway.app", 
    methods: ['GET', 'POST', 'OPTIONS'], 
    allowedHeaders: ['Content-Type'], 
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

// Handle POST requests to verify Google reCAPTCHA
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
            return res.status(200).json({ message: "Success! ReCAPTCHA verified!" });
        } else {
            return res.status(400).json({ message: "Failed! ReCAPTCHA not verified!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
