const express = require('express');
const app = express();
const port = 3000;
const scraperRouter = require('./routes/scraper');
app.use('/scraper', scraperRouter);

app.get('/', (req, res) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});