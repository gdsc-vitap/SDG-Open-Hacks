import { Text, Spacer, Row, Button, styled } from "@nextui-org/react";
import HackathonImage from "../assets/hackathon.png";
import DiscordIcon from "../components/DiscordIcon";
import EditIcon from "../components/EditIcon";

const MyStyledDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
  position: "relative",
  backgroundImage: `linear-gradient(45deg, #4285f4 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, #4285f4 100%)`,
  height: "90vh",
  width: "100%",

  "&::before": {
    content: "",
    backgroundImage: `url(${HackathonImage}), linear-gradient(45deg, #4285f4 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, #4285f4 100%)`,
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "100%",
    opacity: 0.2,
  },
});

const Hero = () => {
  return (
    <MyStyledDiv>
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
            fontSize: "$xl",
            padding: "0 3rem",
            "@mdMax": {
              fontSize: "$lg",
            },
            "@xsMax": {
              fontSize: "$sm",
            },
          }}
        >
          Join us on 12th March with over 300 students from across the nation
          for 36 hours of creation, innovation, & fun!
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
            as="a"
            target="_blank"
            href="https://bit.ly/SDGHack2023"
          >
            Register Now
          </Button>
          <Button
            icon={<DiscordIcon css={{ fill: "white" }} />}
            css={{ color: "white" }}
            size="lg"
            color="primary"
            as="a"
            href="https://discord.gg/J5u8EGqS6y"
            target="_blank"
            bordered
            shadow
          >
            Join Discord
          </Button>
        </Row>
      </div>
    </MyStyledDiv>
  );
};

export default Hero;
