const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (request, response) => {
    const { name, email, message } = request.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "vilvamani145@gmail.com",
            pass: "tswgghdzhodxzpxr"
        }
    });

    let mailOptions = {
    from: "vilvamani145@gmail.com",
    to: "vilvamani145@gmail.com",
    replyTo: email,
    subject: `New message from ${name}`,
    text: message
};

    try {
        await transporter.sendMail(mailOptions);
        response.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        response.status(500).json({ message: "Error sending email" });
    }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});