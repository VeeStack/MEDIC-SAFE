
const generateVerificationCode = () => {
    //Generate a random 6-igit verification code
    
    return Math.floor(100000 + Math.random () * 900000). toString();
};

Module.exports = generateVerificationCode;