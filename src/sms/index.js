import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendVerificationSms = async (phoneNumber, verification_code) => {
  const message = `Your verification code is ${verification_code}`;

  try {
    const response = await client.messages.create({
      body: message,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

export default sendVerificationSms;
