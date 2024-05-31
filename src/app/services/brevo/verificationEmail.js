import axios from "axios";

const sendVerificationEmail = async (email, emailType, token) => {
  const apiKey = process.env.BREVO_API_KEY;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const subject =
    emailType === "VERIFY-EMAIL" ? "Verify your email" : "Reset your password";

  const emailContent = `<html><body><p>Click on the link to ${subject}. <a href="${domain}/${
    emailType === "VERIFY-EMAIL" ? "verify_email" : "reset_password"
  }?token=${token}">Click here.</a></p></body></html>`;

  const payload = {
    sender: { email: "team@carko.in", name: "Carko" },
    to: [{ email }],
    subject,
    htmlContent: emailContent,
  };

  try {
    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      payload,
      {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendVerificationEmail;
