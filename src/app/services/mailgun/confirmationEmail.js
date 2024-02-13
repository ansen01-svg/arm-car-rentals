import mailgunClient from "./config";

const sendConfirmationEmail = async ({
  email,
  username,
  itineraryNumber,
  tripStartDate,
  pickupTime,
}) => {
  const emailHtml = `<p>Thank you for choosing ARM. Reservation number ${itineraryNumber} <br/><br />
    We look forward to seeing you at ARM, Beltola on ${tripStartDate}, ${pickupTime}. <br/><br/>
    Upon arrival please visit the counter with your driver's licence ready.<br />
    We will be here to help you get the perfect vehicle.<br /><br />
    Enjoy your ride!<br />
    The ARM team</p>`;

  const emailData = {
    from: `arm@${process.env.MAILGUN_DOMAIN}`,
    to: email,
    subject: `${username}, ready for your trip?`,
    html: emailHtml,
  };

  try {
    const result = await mailgunClient.messages().send(emailData);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default sendConfirmationEmail;
