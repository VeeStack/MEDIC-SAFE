
const multer = require('multer');

// To define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// To create multer instance
const upload = multer({ storage: storage });

// Middleware for file upload
exports.uploadFile = upload.single('file'); 

// 'file' should match the field name in the form
