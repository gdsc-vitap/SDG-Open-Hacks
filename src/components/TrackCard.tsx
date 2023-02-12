import { Card, Text } from "@nextui-org/react";

const TrackCard = ({
  title,
  image,
  description,
  css,
}: {
  title: string;
  image: string;
  description: string;
  css?: React.CSSProperties;
}) => {
  return (
    <Card css={{ mw: "400px", alignItems: "stretch", ...css }} isHoverable>
      <Card.Header
        css={{
          height: "100px",
        }}
      >
        <Text h3>{title}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Image
        src={`${image}`}
        width="100%"
        height={200}
        objectFit="cover"
        alt={title}
      />
      <Card.Divider />
      <Card.Body css={{ py: "$10", flex: "1 0 auto" }}>
        <Text>{description}</Text>
      </Card.Body>
      <Card.Divider />
    </Card>
  );
};

export default TrackCard;
