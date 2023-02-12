import { Row } from "@nextui-org/react";
import Heading from "./Heading";
import Healthcare from "../assets/healthcare.png";
import Diversity from "../assets/diversity.png";
import Climate from "../assets/climate.jpg";
import TrackCard from "./TrackCard";

const Track = () => {
  return (
    <div
      id="tracks"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100%",
        padding: "0 var(--nextui--navbarPadding)",
        margin: 0,
      }}
    >
      <Heading foregroundText="Tracks" backgroundText="TRACKS" />
      <Row
        justify="space-evenly"
        wrap="wrap"
        css={{ rowGap: "$15", py: "$2xl" }}
        align="stretch"
      >
        <TrackCard
          title="Healthcare for All"
          image={Healthcare}
          description="Access to quality healthcare is essential for a healthy and thriving society. Hackers can use their skills to tackle challenges in healthcare, such as developing new technologies, improving patient care, and increasing access to services for marginalized communities. Join the fight for healthcare for all and help improve the lives of people everywhere."
        />
        <TrackCard
          title="Inclusion, Diversity & Intersectionality"
          image={Diversity}
          description="Yes, India, we have a problem. When a workforce does not represent the communities it serves, it causes harm and hampers vibrant solutions. SDG Open Hack is working to change this; come and help us."
        />
        <TrackCard
          title="Environmental Resilience & Climate Action"
          image={Climate}
          description="Climate change is one of the biggest challenges facing our planet, and it affects all aspects of our lives, including disasters and natural calamities. Hackers can work on developing innovative solutions for promoting environmental resilience and addressing climate change, addressing issues such as reducing carbon emissions, protecting biodiversity, and promoting sustainable development. Join the effort to create a more sustainable and resilient world."
        />
      </Row>
    </div>
  );
};

export default Track;
