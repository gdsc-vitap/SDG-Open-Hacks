import Heading from "./Heading";
import SponsorSection from "./SponsorSection";

const Sponsors = () => {
  const seasonSponsors = [
    {
      img: "https://i.imgur.com/4mUjgsk.png",
      link: "https://devfolio.co/",
    },
    {
      img: "https://i.imgur.com/070AfOo.png",
      link: "https://filecoin.io/",
    },
    {
      img: "https://i.imgur.com/AKaesvY.png",
      link: "https://polygon.technology/",
    },
    {
      img: "https://i.imgur.com/xI51LEs.png",
      link: "https://replit.com/",
    },
    {
      img: "https://i.imgur.com/rVtd35C.png",
      link: "https://solana.com/",
    },
  ];

  const venuePartners = [
    {
      img: "https://i.imgur.com/2SmBz7m.png",
      link: "https://www.vitap.ac.in/",
    },
    // {
    //   img: "https://i.imgur.com/rQBf7Ng.png",
    //   link: "https://www.linkedin.com/company/air-center-vitap/about/",
    // },
  ];

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
      <SponsorSection title="Season Partners" sponsorsList={seasonSponsors} />
      <SponsorSection title="Venue Partners" sponsorsList={venuePartners} />
    </div>
  );
};

export default Sponsors;
