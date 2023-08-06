import React from "react";

// components
import LessonRecord from "./LessonRecord/LessonRecord";
import Goals from "./Goals/Goals";
import TopSlider from "./TopSlider/TopSlider";
import BottomSlider from "./BottomSlider/BottomSlider";
import Advantages from "./Advantages/Advantages";
import About from "./About/About";
import PriceList from "./PriceList/PriceList";
import StudySteps from "./StudySteps/StudySteps";
import ReviewList from "./ReviewList/ReviewList";
import Founder from "./Founder/Founder";
import Footer from "../../Universal/Footer/Footer";

const IndexPage: React.FC = () => {  
  return(
    <section>
      <LessonRecord />
      <Goals />
      <TopSlider /> 
      <BottomSlider />
      <Advantages />
      <About />
      <PriceList />
      <StudySteps />
      <ReviewList />
      <Founder />
      <Footer />
    </section>
  );
}

export default React.memo(IndexPage);