import React, { useState } from "react";

// components
import Header from "../../Universal/Header/Header";
import LessonRecord from "./LessonRecord/LessonRecord";
import CourseFor from "./CourseFor/CourseFor";
import TopSlider from "./TopSlider/TopSlider";
import BottomSlider from "./BottomSlider/BottomSlider";
import Advantages from "./Advantages/Advantages";
import About from "./About/About";
import PriceList from "./PriceList/PriceList";
import EducationSpets from "./EducationSteps/EducationSpets";
import ReviewList from "./ReviewList/ReviewList";
import Founder from "./Founder/Founder";
import Footer from "../../Universal/Footer/Footer";

// modals
import RecordModal from "../Modals/RecordModal/RecordModal";

const IndexPage = () => {
  const [recordModalActive, setRecordModalActive] = useState<boolean>(false);

  return(
    <section>
      <Header />
      <LessonRecord 
        recordModalActive={recordModalActive}
        setRecordModalActive={setRecordModalActive}
      />
      <CourseFor />
      <TopSlider /> 
      <BottomSlider />
      <Advantages />
      <About />
      <PriceList />
      <EducationSpets />
      <ReviewList />
      <Founder />
      <Footer 
        recordModalActive={recordModalActive}
        setRecordModalActive={setRecordModalActive}
      />

      <RecordModal 
        recordModalActive={recordModalActive}
        setRecordModalActive={setRecordModalActive}
      />
    </section>
  );
}

export default React.memo(IndexPage);