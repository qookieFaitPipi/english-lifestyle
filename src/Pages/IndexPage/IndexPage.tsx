import React from "react";

// components
import Header from "../../Universal/Header/Header";
import LessonRecord from "./LessonRecord/LessonRecord";
import Goals from "./Goals/Goals";
import TopSlider from "./TopSlider/TopSlider";
import BottomSlider from "./BottomSlider/BottomSlider";
import Advantages from "./Advantages/Advantages";
import About from "./About/About";
import PriceList from "./PriceList/PriceList";
import EducationSpets from "./EducationSteps/EducationSpets";
import ReviewList from "./ReviewList/ReviewList";
import Founder from "./Founder/Founder";
import Footer from "../../Universal/Footer/Footer";

const IndexPage = () => {
  return(
    <section>
      <LessonRecord />
      <Goals />
      <TopSlider /> 
      <BottomSlider />
      <Advantages />
      <About />
      <PriceList />
      <EducationSpets />
      <ReviewList />
      <Founder />
      <Footer />
    </section>
  );
}

export default React.memo(IndexPage);