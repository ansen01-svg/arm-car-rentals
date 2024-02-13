import transporter from "./mail_transporter";

const sendConfirmationEmail = async (
  email,
  username,
  itineraryNumber,
  tripStartDate,
  pickupTime
) => {
  try {
    const subject = `${username}, ready for your trip?`;

    const emailHtml = `<p>Thank you for choosing ARM. Reservation number ${itineraryNumber} <br/><br />
    We look forward to seeing you at ARM, Beltola on ${tripStartDate}, ${pickupTime}. <br/><br/>
    Upon arrival please visit the counter with your driver's licence ready.<br />
    We will be here to help you get the perfect vehicle.<br /><br />
    Enjoy your ride!<br />
    The ARM team</p>`;

    const mailOptions = {
      from: process.env.MAILGUN_DOMAIN,
      to: email,
      subject: subject,
      html: emailHtml,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default sendConfirmationEmail;
