// Required for access to .env variables
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const videosRouter = require('./routes/videos');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("womp womp let's hope this works")
});

app.get('/id', (req, res) => {
    res.send("doo doo doo let's get a video")
});

app.use('/videos', videosRouter)

app.listen(PORT, () => {
    console.log(`applications are a GO on ${PORT}`)
})