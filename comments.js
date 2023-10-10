// Create web server

const express = require("express");
const app = express();

// Connect to the database
const db = require("./db");
db.connect(app);

// Start the web server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Path: db/comment.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
