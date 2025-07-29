const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// GET route
app.get('/', (req, res) => {
    res.render('index', { qrCodeUrl: null });
});

// POST route for QR generation
app.post('/generate', async (req, res) => {
    const text = req.body.text;

    try {
        const qrCodeUrl = await QRCode.toDataURL(text);
        res.render('index', { qrCodeUrl });
    } catch (err) {
        console.error('QR Code generation error:', err);
        res.render('index', { qrCodeUrl: null });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
