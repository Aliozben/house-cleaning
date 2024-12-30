import {createTransport} from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import env from "@/config/env";
import {render} from "@react-email/components";

const smtpOpts: SMTPTransport.Options = {
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: true,
  auth: {
    user: env.SMTP_EMAIL,
    pass: env.SMTP_SECRET,
  },
};

const transporter = createTransport(smtpOpts, {
  from: `Atlantis Cleaning LLC <${env.SMTP_EMAIL}>`,
});

type Email = {
  to: string;
  subject: string;
  html: React.JSX.Element;
};
export async function sendEmail(context: Email) {
  const {to, subject, html} = context;
  try {
    const info = await transporter.sendMail({
      to,
      subject,
      html: render(html),
    });
    console.log("Message sent: %s", info);
    return info;
  } catch (error) {
    console.log("error while sending email", error);
    return error;
  }
}
