const express = require('express');
const router = express.Router();
const { readFile, saveVideo } = require ("../models/videosModels");
const { v4: uuidv4 } = require('uuid');



// GET videos
router.route('/')
    .get((req, res) => {
        const getVideos = readFile()
        res.status(200).json(getVideos.map((video) => {
            return {
                id: video.id,
                title: video.title,
                channel: video.channel,
                image: video.image
            }
        }))
    })
   .post((req, res) => {
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        channel: "Your channel",
        image: req.body.image,
        description: req.body.description,
        views: 0,
        likes: 0,
        duration: 0,
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [],
    }

    const videos = readFile();
    videos.push(newVideo);
    saveVideo(videos);

    res.status(201).json({message: "Yeehaw - all systems go, cowboy!"})

   })

// GET video by ID
router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        const videos = readFile();
        const video = videos.find((video) => {
            return video.id === id;
        })

        if (!video) {
            return res.status(404).json({
                error: "Video does not exist"
            })
        }

        res.status(200).json(video);
    })

module.exports = router;