// Create web server

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Read comments from file
function readComments() {
  try {
    const data = fs.readFileSync('comments.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Write comments to file
function writeComments(comments) {
  try {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
  } catch (err) {
    console.error(err);
  }
}