import Mailgun from "mailgun-js";

const mailgunClient = Mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default mailgunClient;
