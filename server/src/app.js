const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000 || process.env.port;
app.use(cors());

app.get('/notifications', (req, res) => {
    res.json([{info: "hello world!"}]);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

