"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdmissionForm(application) {
  try {
    const formattedDate = new Date(application.date).toLocaleDateString(
      "tr-TR"
    );

    const { data, error } = await resend.emails.send({
      from: "AISA <no-reply@aisalanya.com>",
      to: ["info@aisalanya.com"],
      subject: "Başvuru - Yeni Öğrenci",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: Arial, sans-serif; background-color: #dbddde; padding: 20px;">
            <div style="max-width: 600px; margin: 30px auto; background-color: #fff; border-radius: 5px; padding: 40px;">
              <h2 style="color: #344d3e; font-size: 18px; margin-bottom: 20px;">ÖĞRENCİ BAŞVURU FORMU</h2>
              <hr style="border: none; border-top: 1px solid #e8eaed; margin: 20px 0;">
              
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>Veli Adı:</strong> ${application.name}
              </p>
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>Uyruk:</strong> ${application.nationality}
              </p>
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>Yaşadığı yer:</strong> ${application.location}
              </p>
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>E-posta:</strong> ${application.email}
              </p>
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>Telefon:</strong> ${application.phone}
              </p>
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>Öğrenci Doğum tarihi:</strong> ${formattedDate}
              </p>
              <p style="font-size: 14px; line-height: 22px; color: #3c4043;">
                <strong>Not:</strong> ${application.comment || "Yok"}
              </p>
              
              <hr style="border: none; border-top: 1px solid #e8eaed; margin: 20px 0;">
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: { message: error.message } };
    }

    console.log("Email sent successfully!");
    return { success: true };
  } catch (error) {
    console.error("Server error:", error);
    return { success: false, error: { message: error.message } };
  }
}
