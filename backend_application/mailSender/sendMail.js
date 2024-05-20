const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "ebubejohnenyi@gmail.com",
        pass: "heaw evzk rgeb yrbp",
    },
});

const sendMail = async (userMail, token, verifyTokenLink) => {
    if (userMail) {
        try {
            const mailOptions = {
                from: {
                    name: "Behojo Health Solutions LLP",
                    address: 'ebubejohnenyi@gmail.com',
                }, // sender address
                to: userMail, // list of receivers
                subject: "New Message From Behojo Health Solution", // Subject line
                text: `Hello there`, // plain text body
                html: `Welcome User <br/>This is your token to login -> ${token} <- kindly copy to this link ${verifyTokenLink}.`, // html body
            };
            
            await transporter.sendMail(mailOptions);
            console.log("Email Sent Successfully");
        } catch (error) {
            console.log("Error sending email:", error);
        }
    } else {
        console.log('Error: No recipient email provided');
    }
};

module.exports = sendMail;
