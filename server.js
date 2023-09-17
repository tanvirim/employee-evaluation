const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`surver running  at ${port}`);
});

app.get('/home', (req, res) => {
    console.log("Received a request at the root path.");
    res.send('Hello, w');
});
