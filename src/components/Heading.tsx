import { Container, Text } from "@nextui-org/react";

const Heading = ({
  backgroundText,
  foregroundText,
  cssForBackgroundText,
  cssForForegroundText,
}: {
  backgroundText: string;
  foregroundText: string;
  cssForBackgroundText?: React.CSSProperties;
  cssForForegroundText?: React.CSSProperties;
}) => {
  return (
    <Container
      gap={0}
      css={{
        width: "100%",
        position: "relative",
        height: "350px",
        overflow: "hidden",
        margin: 0,
        "@mdMax": {
          height: "220px",
        },
        "@xsMax": {
          height: "200px",
        },
      }}
    >
      <Text
        h1
        css={{
          fontSize: "240px",
          position: "absolute",
          lineHeight: "1.5",
          letterSpacing: "0.5rem",
          top: 0,
          left: "-3%",
          color: "hsla(0,0%,100%,.25)",

          "@mdMax": {
            fontSize: "120px",
          },
          "@xsMax": {
            fontSize: "80px",
          },
          ...cssForBackgroundText,
        }}
      >
        {backgroundText}
      </Text>
      <Text
        h1
        css={{
          position: "absolute",
          top: "50%",
          fontSize: "$8xl",
          letterSpacing: "0.05rem",
          color: "$secondary",
          left: "3%",
          "@mdMax": {
            fontSize: "$6xl",
            top: "20%",
          },
          ...cssForForegroundText,
        }}
      >
        {foregroundText}
      </Text>
    </Container>
  );
};

export default Heading;
