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
    res.json(error.message);
  }
});
//get /api/posts/:id

//delete /api/posts/:id

//put /api/posts/:id

module.exports = router;
