"use server";
import { formSchema } from "@/lib/validators";
import { Resend } from "resend";
import { EmailTemplate } from "@/email/email-template";
import moment from "moment";
import "moment/locale/tr";

export const localizedDate = (date) => {
  return moment(date).locale("tr").format("Do MMMM YYYY");
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdmissionForm(data) {
  const application = formSchema.parse(data);

  try {
    const { data, error } = await resend.emails.send({
      from: "AISA <gogusto@gogusto.net>",
      to: ["gogusto@gogusto.net"],
      subject: "Başvuru",
      text: "Yeni Öğrenci Başvurusu",
      react: EmailTemplate({
        fullname: application.fullname,
        phone: application.phone,
        email: application.email,
        date: localizedDate(application.date),
        nationality: application.nationality,
        location: application.location,
        comment: application.comment,
      }),
    });
    if (error) {
      return { success: false, error };
    }
    return { success: true };
  } catch (error) {
    return { sucess: false, error };
  }
}
