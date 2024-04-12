
exports.submitMedicalInfo = async (req, res, next) => {
    try {
      // Process and save medical information to the database
      // ...
      res.json({ message: 'Medical information submitted successfully' });
    } catch (error) {
      next(error);
    }
  };
  