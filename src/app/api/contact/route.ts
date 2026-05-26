import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, date, message } = body;

    // Basic server-side guard
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Light Tackle Adventures <noreply@lighttackleadventures.com>",
      to: [process.env.CONTACT_EMAIL ?? "captjimlemke@gmail.com"],
      replyTo: email,
      subject: `New Charter Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FA4616; border-bottom: 2px solid #FA4616; padding-bottom: 8px;">
            New Charter Booking Request
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #111;">
                <a href="mailto:${email}" style="color: #FA4616;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #111;">${phone || "Not provided"}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Requested Date:</td>
              <td style="padding: 8px 0; color: #111;">${date || "Flexible"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #111; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent via Light Tackle Adventures contact form — lighttackleadventures.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact/route] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
