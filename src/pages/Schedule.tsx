import Heading from "../components/Heading";
import { Button, Text } from "@nextui-org/react";
import day1Schedule from "../data/day1Schedule.json";
import day2Schedule from "../data/day2Schedule.json";
import { useState } from "react";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const chosenDay = selectedDay === 1 ? day1Schedule : day2Schedule;

  return (
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
      <Heading foregroundText="Schedule" backgroundText="SCHEDULE" />
      <Button.Group
        color="gradient"
        size="lg"
        ghost
        css={{
          margin: "$md auto",
        }}
      >
        <Button
          css={{
            background: selectedDay === 1 ? "$gradient" : "",
          }}
          onClick={() => setSelectedDay(1)}
        >
          12th March
        </Button>
        <Button
          css={{
            background: selectedDay === 2 ? "$gradient" : "",
          }}
          onClick={() => setSelectedDay(2)}
        >
          13th March
        </Button>
      </Button.Group>
      <div
        style={{
          margin: "1rem auto 0 auto",
        }}
      >
        <Text h2>{selectedDay === 1 ? "12th March" : "13th March"}</Text>
      </div>
      <div
        style={{
          margin: "0 auto 2rem auto",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            borderLeft: "5px solid #F4B400",
            padding: "2rem 0 2rem 1.5rem",
            rowGap: ".75rem",
          }}
        >
          {Object.entries(chosenDay).map(([time, event]) => (
            <div
              style={{
                display: "flex",
                columnGap: "1rem",
              }}
            >
              <Text
                h4
                color="#4285F4"
                css={{
                  flex: "0 0 10rem",
                  "@smMax": {
                    flex: "0 0 6rem",
                  },
                }}
              >
                {time}
              </Text>
              <Text
                h4
                css={{
                  flex: "1 1 0",
                }}
              >
                {event}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
