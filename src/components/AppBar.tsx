import { Navbar, Image, Link, Text } from "@nextui-org/react";
import { Link as ReactLink } from "react-router-dom";
import SDGLogo from "../assets/gdsc_event_logo.png";
import { HashLink } from "react-router-hash-link";

const AppBar = () => {
  const collapseItems = [
    { title: "About", link: "/#about", hashLink: true },
    { title: "Tracks", link: "/#tracks", hashLink: true },
    // { title: "Prizes", link: "/#prizes", hashLink: true },
    // { title: "Sponsors", link: "/#sponsors", hashLink: true },
    { title: "FAQs", link: "/faq", hashLink: false },
  ];

  const secondaryItems = [
    { title: "Schedule", link: "/schedule", hashLink: false },
    // { title: "Swag", link: "/register", hashLink: false },
    // { title: "Team", link: "/register", hashLink: false },
  ];

  return (
    <Navbar
      variant="sticky"
      isBordered
      maxWidth="fluid"
      css={{
        zIndex: 999,
      }}
    >
      <Navbar.Brand as={ReactLink} to="/">
        <Image src={SDGLogo} alt="SDG Open Hack" width="12rem" />
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
        {collapseItems.map((item, index) => (
          <Navbar.Link
            to={item.link}
            key={index}
            as={item.hashLink ? HashLink : ReactLink}
          >
            <Text b>{item.title}</Text>
          </Navbar.Link>
        ))}
        <span style={{ border: "1px solid #fff", height: "40%" }}></span>
        {secondaryItems.map((item, index) => (
          <Navbar.Link
            to={item.link}
            key={index}
            as={item.hashLink ? HashLink : ReactLink}
          >
            <Text b>{item.title}</Text>
          </Navbar.Link>
        ))}
      </Navbar.Content>

      <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              as={item.hashLink ? HashLink : ReactLink}
              color="inherit"
              style={{
                minWidth: "100%",
              }}
              to={item.link}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
        {secondaryItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              as={item.hashLink ? HashLink : ReactLink}
              color="inherit"
              style={{
                minWidth: "100%",
              }}
              to={item.link}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem
          css={{
            cursor: "pointer",
          }}
        ></Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;
