"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/email/email-template";
import { localizedDate } from "@/lib/localizedDate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdmissionForm(application) {
  const formattedDate = new Date(application.date).toLocaleDateString("tr-TR");
  try {
    const { data, error } = await resend.emails.send({
      from: "AISA <no-reply@aisalanya.com>",
      to: ["info@aisalanya.com"],
      subject: "Başvuru",
      text: "Yeni Öğrenci Başvurusu",
      react: EmailTemplate({
        fullname: application.name,
        phone: application.phone,
        email: application.email,
        date: formattedDate,
        nationality: application.nationality,
        location: application.location,
        comment: application.comment,
      }),
    });
    if (error) {
      console.error("Resend error:", error); // Add logging
      return { success: false, error };
    }
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
