import mailgunClient from "./config";

const sendVerificationEmail = async (email, emailType, token) => {
  const subject =
    emailType === "VERIFY-EMAIL" ? "Verify your email" : "Reset your password";

  const emailText = `<p>Click on the link below to verify your email. <a href="${
    process.env.DOMAIN
  }/${
    emailType === "VERIFY-EMAIL" ? "verify-email" : "reset-password"
  }?token=${token}">Click here.</a> </p>`;

  const emailData = {
    from: `arm@${process.env.MAILGUN_DOMAIN}`,
    to: email,
    subject: subject,
    text: emailText,
  };

  try {
    const result = await mailgunClient.messages().send(emailData);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendVerificationEmail;
