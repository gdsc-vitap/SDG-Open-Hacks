import { styled, Text } from "@nextui-org/react";
import Heading from "./Heading";

const PrizeBox = styled("div", {
  borderRadius: "1rem 1rem 0rem 0rem",
  borderTopWidth: "10px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "2rem",
  variants: {
    type: {
      first: {
        height: "400px",
        background:
          "linear-gradient(0deg, rgba(15,157,88,1) 80%, rgba(36,247,144,1)) 100%",
        borderTopColor: "#24f790",

        "@mdMax": {
          height: "300px",
        },
      },
      second: {
        height: "300px",
        background:
          "linear-gradient(0deg, rgba(66,133,244,1) 80%, rgba(134,175,242,1) 100%)",
        borderTopColor: "#2575f9",
        "@mdMax": {
          height: "200px",
        },
      },
      third: {
        height: "200px",
        borderTopColor: "#f6d77f",
        background:
          "linear-gradient(0deg, rgba(244,180,0,1) 80%, rgba(246,215,127,1) 100%)",
        "@mdMax": {
          height: "100px",
        },
      },
    },
  },
});

const StageDiv = styled("div", {
  backgroundColor: "rgba(82, 82, 82, 0.4)",
  borderRadius: "50%",
  position: "absolute",
  bottom: "-2rem",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 0,
  width: "90%",
  height: "5rem",
});

const AmountText = styled(Text, {
  textAlign: "center",
  fontSize: "$5xl",
  fontWeight: "bold",
  "@smMax": {
    fontSize: "$3xl",
  },
});

const Prizes = () => {
  const PRIZE_MAP = [
    {
      amount: "₹6,000",
      title: "2nd Place",
      type: "second",
    },
    {
      amount: "₹10,000",
      title: "1st Place",
      type: "first",
    },
    {
      amount: "₹4,000",
      title: "3rd Place",
      type: "third",
    },
  ];

  return (
    <div
      id="prizes"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        gap: 0,
        width: "100%",
        padding: "0 var(--nextui--navbarPadding)",
        margin: 0,
      }}
    >
      <Heading foregroundText="Prizes" backgroundText="PRIZES" />
      <div
        style={{
          display: "grid",
          alignItems: "flex-end",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "0 20%",
          zIndex: 1,
        }}
      >
        {PRIZE_MAP.map((prize) => (
          <div>
            <AmountText h3>{prize.amount}</AmountText>
            {/* @ts-ignore */}
            <PrizeBox type={prize.type}>
              <Text
                h3
                css={{
                  color: "black",
                  fontSize: "$3xl",
                  "@smMax": {
                    fontSize: "$xl",
                  },
                }}
              >
                {prize.title}
              </Text>
            </PrizeBox>
          </div>
        ))}
      </div>
      <StageDiv></StageDiv>
    </div>
  );
};

export default Prizes;
