import { Spacer } from "@nextui-org/react";
import About from "../components/About";
import Hero from "../components/Hero";
import Prizes from "../components/Prizes";
import Sponsors from "../components/Sponsors";
import Track from "../components/Track";

const Home = () => {
  return (
    <>
      <Hero />
      <Spacer y={2} />
      <About />
      <Spacer y={2} />
      <Track />
      <Spacer y={2} />
      <Prizes />
      <Spacer y={2} />
      <Sponsors />
    </>
  );
};

export default Home;
