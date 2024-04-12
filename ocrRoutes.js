
const express = require('express');
const router = express.Router();
const { uploadAndExtractText } = require('../controllers/ocrController');

// Route to upload image and extract text
router.post('/upload-and-extract-text', uploadAndExtractText);

module.exports = router;
