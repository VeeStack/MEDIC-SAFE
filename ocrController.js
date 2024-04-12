
exports.uploadAndExtractText = async (req, res, next) => {
    try {
      const { imagePath } = req.body;
      // Upload image and extract text using OCR
      // ...
      res.json({ text });
    } catch (error) {
      next(error);
    }
  };
  