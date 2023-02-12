import { Card, Image } from "@nextui-org/react";

const SponsorCard = ({
  img,
  link,
  css,
}: {
  img: string;
  link: string;
  css?: React.CSSProperties;
}) => {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{
        mw: "150px",
        p: "$lg",
        justifyContent: "center",
        "@xsMax": {
          mw: "120px",
        },
        ...css,
      }}
      onClick={(_) => window.open(link, "_blank")}
    >
      <Card.Image src={img} alt="sponsor card" css={{ flex: "1 0 auto" }} />
    </Card>
  );
};

export default SponsorCard;
