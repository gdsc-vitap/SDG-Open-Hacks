import { Spacer } from "@nextui-org/react";
import About from "../components/About";
import Hero from "../components/Hero";
import Track from "../components/Track";

const Home = () => {
  return (
    <>
      <Hero />
      <Spacer y={2} />
      <About />
      <Spacer y={2} />
      <Track />
    </>
  );
};

export default Home;
