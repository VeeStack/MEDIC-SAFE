
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user =  require('../models/user')
const authController = require('../controllers/authController');

// Signup route
router.post('/signup', async (req, res) =>{
    try{

        //Extract user input data
        const {username, email, password} = req.body;

        //Validate user input

    
        //Check of user with the same email already exists
        let existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'User with this email already exists'});
        }

        //Hash thepassword
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        const bcrypt = require('bcrypt');

// Hash password before storing in the database

        //Create a new user profile
        const newUser({
            FirstName,
            lastName,
            username,
            email,
            password: hashedPassword
        });

        //Save the user profile to the database
        await newUser.save();

        //Return success message
        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});


// Login route
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User =  require('../models/User');


router.post('/login', async (req, res) => {
try{

    //Extract user login credentials
    const {email, password} = req.body;

    //Find user by email
    const user = await User.findOne({email});
    if (!user) {
        return res.status(401).json({ message: 'Invalid email'});
    }

    //Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({message: 'Inavlid password'});
    }

    // Route for doctor login to access patient's medical data
app.post('/login', async (req, res) => {
    const { doctorId, patientId } = req.body;
  
    // Check if the doctor is associated with the patient
    const associated = await checkAssociation(doctorId, patientId);
  
    if (associated) {
      // Retrieve medical data of the patient
      const medicalData = await retrieveMedicalData(patientId);
      res.status(200).json({ success: true, medicalData });
    } else {
      res.status(401).json({ error: 'Unauthorized access' });
    }

    //Validate user input


    //Generate JWT token
    res.status(200).json({token});
} catch (error) ('Error logging in user:', error);
res.status(500).json({message: 'Internal server error'});
}

});



  });
  

module.exports = router;
