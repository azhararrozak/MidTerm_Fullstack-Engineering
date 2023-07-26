const express = require("express");

const router = express.Router();

const Videos = require("../models/Videos");

router.post("/videos", (req, res) => {
    const video = new Videos({
        title: req.body.title,
        description: req.body.description,
        videoUrl: req.body.videoUrl,
        thumbnailUrl: req.body.thumbnailUrl
    });

    try {
        const savedVideo = video.save();
        res.status(200).json(savedVideo);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});


router.get("/videosAll", async (req, res) => {
    try {
        const videos = await Videos.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get("/videos/:id", async (req, res) => {
    try {
        const video = await Videos.findById(req.params.id);
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.patch("/videos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body; 

        const video = await Videos.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video tidak ditemukan" });
        }

        Object.keys(updates).forEach((key) => {
            video[key] = updates[key];
        });

        const updatedVideo = await video.save();
        res.status(200).json(updatedVideo);

    } catch (error) {
        res.status(400).json({ message: error });
    }
});

router.delete("/videos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedVideo = await Videos.findByIdAndDelete(id);
        res.send(deletedVideo);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router;