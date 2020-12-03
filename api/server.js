const express = require("express");
const cors = require("cors");
const server = express();

const postsRouter = require("../api/posts/posts-router");
const commentsRouter = require("../api/comments/comments-router");
server.use(express.json());

server.use("/api/posts", postsRouter);
server.use("/api/posts/:id/comments", commentsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Posts with comments...</h1>`);
});

module.exports = server;
