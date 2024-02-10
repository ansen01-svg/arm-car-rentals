import transporter from "./mail_transporter";

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
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: emailPurpose,
      html: emailHtml,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default sendEmail;
