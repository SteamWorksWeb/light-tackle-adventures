"use server";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export async function submitContactForm(
  formData: FormData,
  token: string
): Promise<{ success: boolean; message: string }> {
  // ── 1. Validate reCAPTCHA token ──────────────────────────────────────────
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("[contact] RECAPTCHA_SECRET_KEY is not set.");
    throw new Error("Server configuration error. Please try again later.");
  }

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

  // ── 2. Extract and sanitize form fields ─────────────────────────────────
  const data: ContactFormData = {
    firstName: String(formData.get("firstName") ?? "").trim().slice(0, 50),
    lastName:  String(formData.get("lastName")  ?? "").trim().slice(0, 50),
    phone:     String(formData.get("phone")     ?? "").trim().slice(0, 20),
    email:     String(formData.get("email")     ?? "").trim().slice(0, 100),
    message:   String(formData.get("message")   ?? "").trim().slice(0, 1000),
  };

  // Basic server-side presence check
  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    throw new Error("Required fields are missing.");
  }

  // ── 3. Send email ────────────────────────────────────────────────────────
  // TODO: Integrate email provider (Resend / SendGrid / SMTP) here.
  // Example with Resend:
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'contact@lighttackleadventures.com',
  //     to:   'jlemke2@tampabay.rr.com',
  //     subject: `New contact from ${data.firstName} ${data.lastName}`,
  //     text: `Phone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
  //   });

  // Verified submission logged to server terminal until email is wired up
  console.log("[contact] ✅ reCAPTCHA passed — sanitized submission:", data);

  return { success: true, message: "Message sent safely." };
}
