 
import { EmailTemplate } from '../../_component/email-template'; 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

  const body = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [body.email],
      subject: 'Hello world',
      react: EmailTemplate({ body }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
