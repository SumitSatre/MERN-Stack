const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/images');

// Define Image model schema
const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model('Image', imageSchema);

// Multer configuration
const storage = multer.memoryStorage(); // Store the file in memory as a Buffer
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image provided" });
    }

    const image = new Image({
      data: req.file.buffer,
      contentType: req.file.mimetype
    });

    const savedImage = await image.save();

    const imageUrl = `http://localhost:${port}/images/${savedImage._id}`;
    res.json({ imageUrl });
  } catch (error) {
    next(error);
  }
});

app.get('/images/:imageId', async (req, res, next) => {
  try {
    const imageId = req.params.imageId;
    const image = await Image.findById(imageId);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.set('Content-Type', image.contentType);
    res.send(image.data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
