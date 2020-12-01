const express = require("express");
const Helper = require("../../data/db");

const router = express.Router();

//post /api/posts

router.post("/", async (req, res) => {
  const post = req.body;

  if (!post.title || !post.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post." });
  } else {
    try {
      await Helper.insert(post);
      res.status(201).json(post);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "There was an error while saving the post to the database",
          error: error.message,
        });
    }
  }
});

//get
router.get("/", async (req, res) => {
  try {
    const posts = await Helper.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      error: "The posts information could not be retrieved.",
      message: error.message,
    });
  }
});

//get /api/posts/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const selectedPost = await Helper.findById(id);
    if (selectedPost.length <= 0) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    } else {
      res.status(200).json(selectedPost);
    }
  } catch (error) {
    res.status(500).json({
      error: "The posts information could not be retrieved.",
      message: error.message,
    });
  }
});

//delete /api/posts/:id

//put /api/posts/:id

module.exports = router;
