import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phoneNumber = formData.get("phoneNumber") as string
    const applyFor = formData.get("applyFor") as string
    const yearsOfExperience = formData.get("yearsOfExperience") as string
    const currentCTC = formData.get("currentCTC") as string
    const expectedCTC = formData.get("expectedCTC") as string
    const currentCompany = formData.get("currentCompany") as string
    const noticePeriod = formData.get("noticePeriod") as string
    const additionalMessage = formData.get("additionalMessage") as string
    const resume = formData.get("resume") as File | null

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const textMessage = `
New Job Application:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Applied For: ${applyFor}
Experience: ${yearsOfExperience} years
Current CTC: ${currentCTC}
Expected CTC: ${expectedCTC}
Current Company: ${currentCompany}
Notice Period: ${noticePeriod}

Additional Message:
${additionalMessage}
`

    let attachments: any[] = []
    if (resume) {
      const bytes = await resume.arrayBuffer()
      const buffer = Buffer.from(bytes)
      attachments.push({
        filename: resume.name,
        content: buffer,
      })
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Job Application - ${applyFor}`,
      text: textMessage,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
