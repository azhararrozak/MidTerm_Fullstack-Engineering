const express = require("express");

const router = express.Router();

const Videos = require("../models/Videos");
const Comment = require("../models/Comment")

router.post("/videos", async (req, res) => {
    const video = new Videos({
        title: req.body.title,
        description: req.body.description,
        videoUrl: req.body.videoUrl,
        thumbnailUrl: req.body.thumbnailUrl
    });

    try {
        const savedVideo = await video.save();
        res.status(200).json(savedVideo);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

router.post('/videos/:id/comments', async (req, res) => {
    try {
        const video = await Videos.findById(req.params.id);

        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        const comment = new Comment({
            text: req.body.text,
            video: video._id,
        });

        const newComment = await comment.save();
        video.comments.push(newComment);
        await video.save();

        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
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
        const video = await Videos.findById(req.params.id).populate('comments');
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