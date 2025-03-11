const express = require('express');
const app = express();
const PORT = 3000;

// GET route for /test
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Your Full Name' });
});

// POST route for /test
app.post('/test', (req, res) => {
    res.json({ message: 'Express is working! Your Full Name (POST)' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
