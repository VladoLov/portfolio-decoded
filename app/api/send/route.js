import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const { email, subject, message } = await request.json();

    // Sending the email via Resend
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL, // From email (must be verified in Resend)
      to: email, // Send to the email received from the form
      subject: subject, // Subject from the form
      text: message, // Plain text message from the form
      html: `<p>${message}</p>`, // Optional HTML version of the message
    });

    // Check if the email was sent successfully
    if (data.id) {
      return NextResponse.json({
        status: 200,
        message: "Email sent successfully",
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Failed to send email",
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
