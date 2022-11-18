// Required for access to .env variables
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const videosRouter = require('./routes/videos');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.statuc('public'));

app.get('/', (req, res) => {
    res.send("womp womp let's hope this works")
});

app.use('/videos', videosRouter)

app.listen(PORT, () => {
    console.log(`applications are a GO on ${PORT}`)
})