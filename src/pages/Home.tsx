import {
  Text,
  Button,
  Row,
  Spacer,
  Container,
  Link,
  Collapse,
} from "@nextui-org/react";
import DiscordIcon from "../components/DiscordIcon";
import EditIcon from "../components/EditIcon";
import Heading from "../components/Heading";
import Video from "../assets/video.mp4";
import FAQs from "../data/faqs.json";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0,
          height: "80vh",
          width: "100%",
          background:
            "linear-gradient(45deg, #4285f4 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, #4285f4 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <Text
            h1
            css={{
              textAlign: "center",
              fontSize: "$8xl",
              // textGradient: "270deg, $primary 0%, $primary 100%",
              background:
                "linear-gradient(90deg, rgba(219,68,55,1) 4%, rgba(244,180,0,1) 37%, rgba(15,157,88,1) 60%, rgba(66,133,244,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              "@mdMax": {
                fontSize: "$6xl",
              },
            }}
          >
            SDG Open Hack
          </Text>
          <Text
            h2
            css={{
              textAlign: "center",
              "@mdMax": {
                fontSize: "$3xl",
              },
            }}
          >
            Empowering change makers.
          </Text>
          <Text
            css={{
              textAlign: "center",
              "@mdMax": {
                fontSize: "$md",
              },
            }}
          >
            Join us on 25th February 2023 with over 300 students from across the
            nation for 36 hours of creation, innovation, & fun!
          </Text>
          <Spacer y={1} />
          <Row css={{ rowGap: "$8" }} wrap="wrap" justify="center">
            <Button
              icon={<EditIcon css={{ fill: "white" }} />}
              size="lg"
              color="primary"
              shadow
              css={{
                mr: "$6",
                "@xsMax": {
                  mr: 0,
                },
              }}
            >
              Register Now
            </Button>
            <Button
              icon={<DiscordIcon css={{ fill: "white" }} />}
              css={{ color: "white" }}
              size="lg"
              color="primary"
              bordered
              shadow
            >
              Join Discord
            </Button>
          </Row>
        </div>
      </div>

      <Container display="flex" justify="center">
        <Heading backgroundText="About Us" foregroundText="About Us" />
        <Row justify="space-between" wrap="wrap" css={{ rowGap: "$15" }}>
          <video controls>
            <source
              width="auto"
              height="auto"
              src={`${Video}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Text
            css={{
              width: "50%",
              "@mdMax": {
                width: "100%",
              },
            }}
          >
            <strong>Brief Overview </strong>
            <br />
            SDG Open Hack is a hackathon aimed at a new generation of impact
            entrepreneurs, willing to collectively act in order to identify,
            delineate and address outstanding challenges for the SDGs, through
            open innovation.
            <br />
            <br />
            <strong>Purpose </strong>
            <br />
            The main purpose of SDG Open Hack is to help participants improve
            their proposals for the{" "}
            <Link href="https://goo.gle/solutionchallenge" target="_blank">
              2023 Solution Challenge
            </Link>
            . We offer feedback and networking opportunities with seasoned
            developers, speakers, and mentors to help you get the most out of
            your experience. Plus, there are prizes to be won from our sponsors!
            <br />
            <br />
            <strong> Theme</strong>
            <br />
            SDG Open Hack centers around the{" "}
            <Link
              href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
              target="_blank"
            >
              United Nations' 17 Sustainable Development Goals (SDGs).{" "}
            </Link>{" "}
            During the event, you'll be challenged to create a project that
            helps solve one or more of these goals using Google technologies.
          </Text>
        </Row>
      </Container>
      <Spacer y={2} />
      <Container>
        <Heading foregroundText="Questions" backgroundText="FAQs" />
        <Collapse.Group>
          {FAQs.map((faq, ind) => (
            <Collapse title={faq.question} key={ind} expanded={ind === 0}>
              <Text>{faq.answer}</Text>
            </Collapse>
          ))}
        </Collapse.Group>
      </Container>
    </>
  );
};

export default Home;
