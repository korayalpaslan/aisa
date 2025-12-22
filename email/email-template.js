import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#344d3e",
};

const paragraphContent = {
  padding: "10px 40px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

// Change to default export
export default function EmailTemplate({
  fullname,
  phone,
  email,
  date,
  location,
  nationality,
  comment,
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>ÖĞRENCİ BAŞVURU FORMU</Text>
            <Text style={paragraph}>Veli Adı: {fullname}</Text>
            <Text style={paragraph}>Uyruk: {nationality}</Text>
            <Text style={paragraph}>Yaşadığı yer: {location}</Text>
            <Text style={paragraph}>E-posta: {email}</Text>
            <Text style={paragraph}>Telefon: {phone}</Text>
            <Text style={paragraph}>Öğrenci Doğum tarihi: {date}</Text>
            <Text style={paragraph}>Not: {comment}</Text>
            <Hr style={hr} />
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
