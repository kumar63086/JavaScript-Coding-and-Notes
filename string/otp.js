function Otp() {
    const otp = Math.floor(Math.random() * 900000+10000); // Generates a 6-digit OTP
    return otp;
}

console.log(Otp()); // Call the function to log the generated OTP
