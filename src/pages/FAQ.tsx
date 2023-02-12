import { Collapse, Text } from "@nextui-org/react";
import Heading from "../components/Heading";
import FAQs from "../data/faqs.json";

const FAQ = () => {
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
      <Heading foregroundText="Questions" backgroundText="FAQs" />
      <Collapse.Group>
        {FAQs.map((faq, ind) => (
          <Collapse title={faq.question} key={ind} expanded={ind === 0}>
            <Text dangerouslySetInnerHTML={{ __html: faq.answer }}></Text>
          </Collapse>
        ))}
      </Collapse.Group>
    </div>
  );
};

export default FAQ;
