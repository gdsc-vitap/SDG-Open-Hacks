import { Row, Container, Link, Text } from "@nextui-org/react";
import Heading from "./Heading";
import Video from "../assets/video.mp4";

const About = () => {
  return (
    <div
      id="about"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100%",
        padding: "0 var(--nextui--navbarPadding)",
        margin: 0,
      }}
    >
      <Heading backgroundText="ABOUT US" foregroundText="About Us" />
      <Row justify="space-between" wrap="wrap" css={{ rowGap: "$15" }}>
        {/* <Container
          gap={0}
          css={{
            width: "45%",
            margin: 0,
            "@mdMax": {
              width: "100%",
              margin: "0 auto",
            },
          }}
        >
          <video controls src={`${Video}`} width="100%" height="auto"></video>
        </Container> */}
        <Text
          css={{
            width: "100%",
            "@mdMax": {
              width: "100%",
            },
          }}
        >
          <h4>Brief Overview </h4>
          SDG Open Hack is a hackathon aimed at a new generation of impact
          entrepreneurs, willing to collectively act in order to identify,
          delineate and address outstanding challenges for the SDGs, through
          open innovation.
          <br />
          <br />
          <h4>Purpose </h4>
          The main purpose of SDG Open Hack is to help participants improve
          their proposals for the{" "}
          <Link href="https://goo.gle/solutionchallenge" target="_blank">
            2023 Solution Challenge
          </Link>
          . We offer feedback and networking opportunities with seasoned
          developers, speakers, and mentors to help you get the most out of your
          experience. Plus, there are prizes to be won from our sponsors!
          <br />
          <br />
          <h4> Theme</h4>
          SDG Open Hack centers around the{" "}
          <Link
            href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
            target="_blank"
          >
            United Nations' 17 Sustainable Development Goals (SDGs).{" "}
          </Link>{" "}
          During the event, you'll be challenged to create a project that helps
          solve one or more of these goals using Google technologies.
        </Text>
      </Row>
    </div>
  );
};

export default About;
