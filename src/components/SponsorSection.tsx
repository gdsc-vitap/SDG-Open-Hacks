import { Row, Text } from "@nextui-org/react";
import SponsorCard from "./SponsorCard";

const SponsorSection = ({
  title,
  sponsorsList,
}: {
  title: string;
  sponsorsList: { img: string; link: string }[];
}) => {
  return (
    <>
      <Text
        h2
        css={{
          p: "0 $lg",
        }}
      >
        {title}
      </Text>
      <Row
        wrap="wrap"
        align="stretch"
        css={{
          rowGap: "$15",
          p: "$lg",
        }}
      >
        {sponsorsList.map((sponsor, ind) => (
          <SponsorCard key={ind} {...sponsor} css={{ marginRight: "$sm" }} />
        ))}
      </Row>
    </>
  );
};

export default SponsorSection;
