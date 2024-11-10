import * as React from "react";
import {
  Body, 
  Container,
  Head,
  Hr,
  Html, 
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({ body }) => (
  <Html>
    <Head />
    <Preview>
    It's On Its Way.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {body.fullName},</Text>
        <Text style={paragraph}>
           
          You order's is on its way. Use the link above to track its progress.
          We´ve also charged your payment method for the cost of your order <br /> and
          will be removing any authorization holds. For payment details, <br /> please
          visit your Orders page on Nike.com or in the Nike app.
        </Text> 
        <Text style={paragraph}>
          Best,
          <br />
          The Koala team
        </Text>
        <Hr style={hr} />
        <Section style={paddingY}>
          <Row style={footer.policy}>
            <Column>
              <Text style={footer.text}>Web Version</Text>
            </Column>
            <Column>
              <Text style={footer.text}>Privacy Policy</Text>
            </Column>
          </Row>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Please contact us if you have any questions. (If you reply to this
              email, we won't be able to see it.)
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              © 2024 Elssei, Inc. All Rights Reserved.
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              Elssei, INC. One Bowerman Drive, Beaverton, Oregon 97005, USA.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

 
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

 

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

 

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}; 

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } ,
};