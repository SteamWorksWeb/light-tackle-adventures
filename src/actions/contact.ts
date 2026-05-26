"use server";

import { Resend } from "resend";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  formData: FormData,
  token: string
): Promise<{ success: boolean; message: string }> {
  // ── 1. Validate reCAPTCHA token (skipped if keys not yet configured) ────
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (secretKey) {
    if (!token) {
      throw new Error("reCAPTCHA token is missing. Please refresh and try again.");
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.warn(
        `[contact] reCAPTCHA failed — score: ${recaptchaData.score}, errors: ${recaptchaData["error-codes"]}`
      );
      throw new Error("Spam detected. If this is an error, please call us directly.");
    }
  }

  // ── 2. Extract and sanitize form fields ─────────────────────────────────
  const data: ContactFormData = {
    firstName: String(formData.get("firstName") ?? "").trim().slice(0, 50),
    lastName:  String(formData.get("lastName")  ?? "").trim().slice(0, 50),
    phone:     String(formData.get("phone")     ?? "").trim().slice(0, 20),
    email:     String(formData.get("email")     ?? "").trim().slice(0, 100),
    message:   String(formData.get("message")   ?? "").trim().slice(0, 1000),
  };

  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    throw new Error("Required fields are missing.");
  }

  // ── 3. Send email via Resend ─────────────────────────────────────────────
  const { error } = await resend.emails.send({
    from: "Light Tackle Adventures <noreply@lighttackleadventures.com>",
    to:   [process.env.CONTACT_EMAIL ?? "captjimlemke@gmail.com"],
    replyTo: data.email,
    subject: `New Charter Inquiry from ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FA4616; border-bottom: 2px solid #FA4616; padding-bottom: 8px;">
          New Charter Booking Request
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #111;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0; color: #111;">
              <a href="mailto:${data.email}" style="color: #FA4616;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 0; color: #111;">${data.phone || "Not provided"}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; color: #111; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Sent via Light Tackle Adventures contact form — lighttackleadventures.com
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    throw new Error("Failed to send message. Please try again or call us directly.");
  }

  console.log("[contact] ✅ Email sent for:", data.email);
  return { success: true, message: "Message sent successfully." };
}
