import * as nodemailer from 'nodemailer';
import * as AWS from 'aws-sdk';
import { Email } from './types';
import { getHelloUserTemplate } from './templates/get-hello-user.template';

AWS.config.loadFromPath('./secret/aws-credential.json');

const transporter = nodemailer.createTransport({
  SES: new AWS.SES(),
});

const email: Email = {
  from: 'identified@email.com',
  to: 'identified@email.com',
  subject: 'Welcome',
  html: getHelloUserTemplate({ username: 'username' }),
};

transporter.sendMail(email, (err, info) => {
  try {
    console.log(info.envelope);
    console.log(info.messageId);
  } catch (e) {
    console.log('e: ', e);
    console.log('err: ', err);
  }
});
