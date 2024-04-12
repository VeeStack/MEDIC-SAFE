
const express = require('express');
const router = express.Router();
const { submitMedicalInfo } = require('../controllers/medicalController');

// Route to submit medical information
router.post('/submit-medical-info', submitMedicalInfo);

module.exports = router;
