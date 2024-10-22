const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    const allowList = ['https://example.com/data', 'https://another-example.com/data'];
    if (!url) {
        return res.status(400).send('URL is required');
    }
    if (!allowList.includes(url)) {
        return res.status(400).send('Invalid URL');
    }
    request({ url, encoding: null }, (err, resp, buffer) => {
        if (err) {
            return res.status(500).send('Error fetching image');
        }
        res.set('Content-Type', resp.headers['content-type']);
        res.send(buffer);
    });
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
