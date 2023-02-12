import { Container, Row, Text } from "@nextui-org/react";
import { FaTwitter, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import GDSCLogo from "../assets/gdsc_logo.svg";
import OSCLogo from "../assets/osclogo.png";
import CSILogo from "../assets/csilogo.png";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "10vh",
        rowGap: "2rem",
        margin: "2rem",
      }}
    >
      <Row
        wrap="wrap"
        align="center"
        css={{
          rowGap: "$xl",
        }}
      >
        <Container
          css={{
            width: "40%",
            "@xsMax": {
              width: "100%",
            },
          }}
        >
          <Text h3 css={{ textAlign: "center" }}>
            Organisers
          </Text>
          <Row
            wrap="wrap"
            justify="center"
            css={{
              alignItems: "stretch",
              columnGap: "2rem",
              rowGap: "1rem",
              mt: "$xl",
            }}
          >
            <img
              src={`${GDSCLogo}`}
              alt="GDSC logo"
              onClick={(_) => {
                window.open(
                  "https://gdsc.community.dev/vellore-institute-of-technology-ap-campus/",
                  "_blank"
                );
              }}
              style={{
                width: "200px",
                cursor: "pointer",
                margin: 0,
              }}
            />
            <img
              src={`${OSCLogo}`}
              alt="OSC logo"
              onClick={(_) => {
                window.open("https://oscvitap.org/", "_blank");
              }}
              style={{
                width: "120px",
                cursor: "pointer",
                margin: 0,
              }}
            />

            <img
              src={`${CSILogo}`}
              alt="CSI logo"
              onClick={(_) => {
                window.open("https://csivitap.co.in/", "_blank");
              }}
              style={{
                width: "80px",
                cursor: "pointer",
                margin: 0,
              }}
            />
          </Row>
        </Container>
        <Container
          css={{
            margin: "0 0 0 auto",
            width: "40%",
            "@xsMax": {
              width: "100%",
            },
          }}
        >
          <Text h3 css={{ textAlign: "center" }}>
            Socials
          </Text>
          <Row
            justify="center"
            wrap="wrap"
            css={{
              columnGap: "1rem",
              p: "$xl",
            }}
          >
            <FaTwitter
              size={24}
              style={{ cursor: "pointer" }}
              onClick={(_) =>
                window.open("https://twitter.com/gdscvitap", "_blank")
              }
            />
            <FaLinkedin
              size={24}
              style={{ cursor: "pointer" }}
              onClick={(_) =>
                window.open(
                  "https://www.linkedin.com/company/gdscvitap?originalSubdomain=in",
                  "_blank"
                )
              }
            />
            <FaInstagram
              size={24}
              style={{ cursor: "pointer" }}
              onClick={(_) =>
                window.open("https://www.instagram.com/gdscvitap/", "_blank")
              }
            />
            <FaDiscord
              size={24}
              style={{ cursor: "pointer" }}
              onClick={(_) =>
                window.open("https://discord.gg/J5u8EGqS6y", "_blank")
              }
            />
          </Row>
        </Container>
      </Row>
      <Text
        css={{
          textAlign: "center",
        }}
      >
        &copy; {new Date().getFullYear()} GDSC VIT AP. All rights reserved.
      </Text>
    </div>
  );
};

export default Footer;
