import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from React app build/dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Parse JSON
app.use(express.json());

// Handle POST requests to verrify Google ReCAPTCHA
app.post('/api/verify-captcha', async (req, res) => {
    const { captcha } = req.body;
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
})

// Handle GET requests to / and serve the index.html dist/build file
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));