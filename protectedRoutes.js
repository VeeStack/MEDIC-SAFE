
// routes/protectedRoutes.js

const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const { uploadFile } = require('../middleware/fileUploadMiddleware');
const protectedController = require('../controllers/protectedController');

// Example of a protected route requiring authentication and authorization
router.post('/upload-file', authenticateToken, authorizeRole(['admin']), uploadFile, protectedController.uploadFile);

module.exports = router;
