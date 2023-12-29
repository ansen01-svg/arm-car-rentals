import transporter from "./mail_transporterrter";

const sendEmail = async (email, emailType, token) => {
  try {
    const emailPurpose =
      emailType === "VERIFY-EMAIL"
        ? "Verify your email"
        : "Reset your password";

    const emailHtml = `<p>Click on the link below to verify your email. <a href="${
      process.env.DOMAIN
    }/${
      emailType === "VERIFY-EMAIL" ? "verify-email" : "reset-password"
    }?token=${token}">Click here.</a> </p>`;

    const mailOptions = {
      from: "rentalcars@gmail.com",
      to: email,
      subject: emailPurpose,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    throw new Error(error.message);
  }
};

sendEmail().catch(console.error);

export default sendEmail;
