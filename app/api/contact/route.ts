import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // FormData parse karo (because file upload che)
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const projectDetails = formData.get("projectDetails") as string;
    const hireDeveloper = formData.get("hireDeveloper") as string;

    const resumeFile = formData.get("resume") as File | null;

    // Resume buffer banavvo
    let attachments: any[] = [];
    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      });
    }

    // Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
        <p><strong>Hire Developer:</strong> ${hireDeveloper || "Not Selected"}</p>
      `,
      attachments, // 👈 resume add thay che
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email with resume sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
