const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to handle PDF download
app.get('/download/brochure', (req, res) => {
    const file = path.join(__dirname, 'public/media/AQUAROCK.pdf');
    res.download(file); // Set header to force download
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
