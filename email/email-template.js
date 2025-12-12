import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Img,
} from "@react-email/components";

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  padding: "30px 30px 15px 30px",
};

const logoImg = {
  margin: "0 auto",
};

const headerBlue = {
  marginTop: "-1px",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
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

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const link = {
  ...paragraph,
  color: "#004dcf",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const footer = {
  maxWidth: "100%",
};
const footerIcon = { display: "block", margin: "40px 0 0 0" };

const footerLinksWrapper = {
  margin: "8px 0 0 0",
  textAlign: "center",
  fontSize: "12px",
  color: "#004dcf",
};

const footerCopyright = {
  margin: "25px 0",
  textAlign: "center",
  fontSize: "12px",
  color: "rgb(102,102,102)",
};

export const EmailTemplate = ({
  fullname,
  phone,
  email,
  date,
  location,
  nationality,
  comment,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      {/* <Preview>Merhaba {fullname}</Preview> */}
      <Container style={container}>
        {/* <Section style={logo}>
          <Img
            src={`https://www.gogusto.net/_next/image?url=%2Fimages%2Flogo-new2.png&w=256&q=75`}
            width="155"
            height="54"
            alt="Go Gusto"
            style={logoImg}
          />
        </Section> */}

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}> ÖĞRENCİ BAŞVURU FORMU</Text>
          {/* <Text style={paragraph}>Merhaba {fullname}</Text>
          <Text style={paragraph}>
            Talebiniz için teşekkür ederiz. 24 saat içinde seyahat
            danışmanlarımız sizinle iletişime geçecektir.
          </Text> */}
          <Text style={paragraph}>Veli Adı: {fullname}</Text>
          <Text style={paragraph}>Uyruk {nationality}</Text>
          <Text style={paragraph}>Yaşadığı yeR: {location}</Text>
          <Text style={paragraph}>E-posta: {email}</Text>
          <Text style={paragraph}>Telefon: {phone}</Text>
          <Text style={paragraph}>Öğrenci Doğum tarihi: {date}</Text>
          <Text style={paragraph}>Not: {comment}</Text>
          <Hr style={hr} />
        </Section>

        {/* <Section style={paragraphContent}>
          <Text style={paragraph}>Teşekkürler</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>Go Gusto </Text>
        </Section> */}

        {/* <Section>
          <Row>
            <Column align="center" style={footerIcon}>
              <Img
                src={`https://www.gogusto.net/_next/image?url=%2Fimages%2Fparrot.png&w=96&q=75`}
                width="50"
                height="50"
                alt="AISA"
              />
            </Column>
          </Row>
        </Section> */}
        {/* <Text style={footerLinksWrapper}>
          <Link
            href="https://www.instagram.com/gogusto_tur"
            target="_blank"
            style={link}
          >
            Instagram
          </Link>{" "}
          •{" "}
          <Link
            href="https://www.linkedin.com/company/go-gusto-tur/"
            target="_blank"
            style={link}
          >
            Linkedin
          </Link>
        </Text> */}
        {/* <Text style={footerCopyright}>
          Tüm hakları saklıdır © 2025 Go Gusto
        </Text> */}
      </Container>
    </Body>
  </Html>
);
