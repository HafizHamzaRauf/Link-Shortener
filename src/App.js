import { Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hero from "./components/Hero";
import StatisticsSection from "./components/StatisticsSection";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Hero></Hero>
      <StatisticsSection></StatisticsSection>
      <Boost></Boost>
      <Footer></Footer>
    </div>
  );
}

export default App;
