const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, "../data/videos.json");


const readFile = () => {
    return JSON.parse(fs.readFileSync('./data/videos.json'))
}

function saveVideo(videos) {
    fs.writeFileSync(
        filePath,
        JSON.stringify(videos)
    )
}

module.exports = {
    readFile,
    saveVideo
}