import Heading from "./Heading";
import SponsorSection from "./SponsorSection";
import SponsorsData from "../data/sponsors.json";

const Sponsors = () => {
  return (
    <div
      id="sponsors"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100%",
        padding: "0 var(--nextui--navbarPadding)",
        margin: 0,
      }}
    >
      <Heading foregroundText="Sponsors" backgroundText="SPONSORS" />
      {SponsorsData.map((sponsor) => {
        return (
          <SponsorSection
            title={sponsor.title}
            sponsorsList={sponsor.sponsors}
          />
        );
      })}
    </div>
  );
};

export default Sponsors;
