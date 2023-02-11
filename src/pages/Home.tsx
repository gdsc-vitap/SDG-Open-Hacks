import {
  Text,
  Button,
  Row,
  Spacer,
  Container,
  Collapse,
} from "@nextui-org/react";
import DiscordIcon from "../components/DiscordIcon";
import EditIcon from "../components/EditIcon";
import Heading from "../components/Heading";
import About from "../components/About";
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: "100%",
          padding: "0 var(--nextui--navbarPadding)",
          margin: 0,
        }}
      >
        <About />
      </div>

      <Spacer y={2} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          width: "100%",
          padding: "0 var(--nextui--navbarPadding)",
          margin: 0,
        }}
      >
        <Heading foregroundText="Questions" backgroundText="FAQs" />
        <Collapse.Group>
          {FAQs.map((faq, ind) => (
            <Collapse title={faq.question} key={ind} expanded={ind === 0}>
              <Text>{faq.answer}</Text>
            </Collapse>
          ))}
        </Collapse.Group>
      </div>
    </>
  );
};

export default Home;
