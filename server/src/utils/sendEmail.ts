import nodemailer from 'nodemailer';

export async function sendEmail(to: string, html: string) {
  // const testAccount = await nodemailer.createTestAccount();
  // console.log('testAccount', testAccount);

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'fsds7pubnk3pznj2@ethereal.email',
      pass: '4ZsAXqr3Df4zwbHVCC',
    },
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>',
    to,
    subject: 'Change password',
    html,
    // html: '<b>Hello world</b>'
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
