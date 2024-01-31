const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// página 404 personalisada
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found resource');
});

// página 500 personalisada
app.use((err, req, res, next) => {
    console.log(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - server internal error');
});

app.listen(port, () => {
    console.log(`Express started on http://172.29.123.153:${port}; ` + `press CTRL-C to terminate.`);
});