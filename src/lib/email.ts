import {createTransport} from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import env from "@/config/env";
import {render} from "@react-email/components";

const smtpOpts: SMTPTransport.Options = {
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: env.EMAIL_ADDRESS,
    pass: env.EMAIL_SECRET,
  },
};

const transporter = createTransport(smtpOpts, {
  from: `Atlantis Cleaning LLC <${env.EMAIL_ADDRESS}>`,
});
type Email = {
  to: string;
  subject: string;
  html: React.JSX.Element;
};
export async function sendMail(context: Email) {
  const {to, subject, html} = context;

  const info = await transporter.sendMail({
    to,
    subject,
    html: render(html),
  });
  console.log("Message sent: %s", info);
  return info;
}
