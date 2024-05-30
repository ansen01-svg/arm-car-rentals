import axios from "axios";

const sendConfirmationEmail = async ({
  email,
  username,
  itineraryNumber,
  tripStartDate,
  pickupTime,
}) => {
  const apiKey = process.env.BREVO_API_KEY;

  const subject = `${username}, ready for your trip?`;

  const emailContent = `<html><body><p>Thank you for choosing ARM. Reservation number ${itineraryNumber} <br/><br />
    We look forward to seeing you at ARM, Beltola on ${tripStartDate}, ${pickupTime}. <br/><br/>
    Upon arrival please visit the counter with your driver's licence ready.<br />
    We will be here to help you get the perfect vehicle.<br /><br />
    Enjoy your ride!<br />
    The ARM team</p></body></html>`;

  const payload = {
    sender: { email: "no-reply@carko.in", name: "team@carko.in" },
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

export default sendConfirmationEmail;
