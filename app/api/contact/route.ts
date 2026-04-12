import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  scientific: "Scientific Forensic Analysis",
  digital: "Digital & Cyber Forensics",
  corporate: "Corporate & Private Investigations",
  insurance: "Insurance Fraud Investigation",
  training: "Training & Capacity Building",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, organization, service, message } = body;

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    const serviceLabel = SERVICE_LABELS[service] || "General Inquiry";

    const { data, error } = await resend.emails.send({
      from: "Prime Forensics <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@primeforensics.in",
      replyTo: email,
      subject: `[New Inquiry] ${serviceLabel} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 12px; overflow: hidden;">
          <div style="background: #1A2538; padding: 32px; text-align: center;">
            <h1 style="color: #C5A059; font-size: 22px; margin: 0 0 8px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 0;">Prime Forensics & Investigative Services</p>
          </div>
          
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A2538;">${firstName} ${lastName || ""}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A2538;"><a href="mailto:${email}" style="color: #C5A059;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600;">Organization</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A2538;">${organization || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A2538; font-weight: 600;">${serviceLabel}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 20px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
              <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 600;">Message</p>
              <p style="color: #1A2538; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background: #1A2538; padding: 16px 32px; text-align: center;">
            <p style="color: rgba(255,255,255,0.4); font-size: 10px; text-transform: uppercase; letter-spacing: 2px; margin: 0;">
              Sent via primeforensics.in secure contact form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
