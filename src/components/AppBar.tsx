import { Navbar, Image, Link, Text } from "@nextui-org/react";
import { Link as ReactLink } from "react-router-dom";
import SDGLogo from "../assets/gdsc_event_logo.png";
import MobileBG from "../assets/mobile-background.png";

const AppBar = () => {
  const collapseItems = [
    { title: "About", link: "/about" },
    { title: "Tracks", link: "/events" },
    { title: "Prizes", link: "/team" },
    { title: "Sponsors", link: "/contact" },
    { title: "FAQs", link: "/contact" },
  ];

  const secondaryItems = [
    { title: "Schedule", link: "/login" },
    { title: "Swag", link: "/register" },
    { title: "Team", link: "/register" },
  ];

  return (
    <Navbar
      isBordered
      variant="static"
      css={{
        margin: "1rem 0 0 0",
      }}
    >
      <Navbar.Brand>
        <Image src={SDGLogo} alt="SDG Open Hack" width="12rem" />
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
        {collapseItems.map((item, index) => (
          <Navbar.Link to={item.link} key={index} as={ReactLink}>
            <Text b>{item.title}</Text>
          </Navbar.Link>
        ))}
        <span style={{ border: "1px solid #fff", height: "40%" }}></span>
        {secondaryItems.map((item, index) => (
          <Navbar.Link to={item.link} key={index} as={ReactLink}>
            <Text b>{item.title}</Text>
          </Navbar.Link>
        ))}
      </Navbar.Content>

      <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              as={ReactLink}
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
              as={ReactLink}
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
