import Heading from "../components/Heading";
import { Text } from "@nextui-org/react";

const Schedule = () => {
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
      <Text h3>Coming Soon.</Text>
    </div>
  );
};

export default Schedule;
