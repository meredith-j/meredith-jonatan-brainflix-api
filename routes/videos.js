const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

const VIDEOS_API = process.env.VIDEOS_API;

const readFile = () => {
    return JSON.parse(fs.readFileSync('./data/videos.json'))
}


// GET videos
router.get('/', (req, res) => {
    const allVideos = readFile();
    res.status(200).json(allVideos)
})

// GET video by ID
router.get('/:id', (req, res) => {
    axios
    .get(`${VIDEOS_API}`)
    .then((apiResponse) => {
        res.status(200).json(apiResponse.data);
    })
    .catch((err) => console.log(err));
})

// POST news videos
router.post('/', (req, res) => {
    axios
    .post(`${VIDEOS_API}`)
    .then((apiResponse) => {
        res.status(200).json(apiResponse.data);
        })
    .catch((err) => console.log(err));
})

module.exports = router;