import { Image } from "@nextui-org/react";
import GDSCLogo from "../assets/gdsc_logo.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        margin: "2rem",
      }}
    >
      <Image
        src={`${GDSCLogo}`}
        alt="GDSC logo"
        css={{
          width: "30%",
          margin: "0 auto",
          "@mdMax": {
            width: "50%",
          },
        }}
      />
    </div>
  );
};

export default Footer;
