
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    try{

        //Create a transporter with SMTP settings
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'medicsafesure@gmail.com',
                pass: 'Capstone@123'
            }
        });

        //Define email options

        const mailOptions = {
            from: 'medicsafesure@gmail.com',
            to,
            subject: 'Email Verification Code' ,
            text: 'Your verification code is: ('../utilities/generateVerificationCode.js'). Enter this code to verify your identity. Please ignore if you did not try to acesss your medicsafe profile',
        };

        //Send email

        await trasnporter.sendEmail(mailOptions);

        console.log('Verification code sent succesfully');
    } catch(error) {
        console.error('Error sending verification code:', error);
        throw new Error('Failed to send verification code');
    }
    }; 

    module.exports = sendEmail;