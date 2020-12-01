const express = require("express");
const Helper = require("../../data/db");

const router = express.Router();

//post /api/posts

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
