import NavHero from "../NavHero";
import OurServices from "../OurServices";
import WhyUs from "../WhyUs";
import Testimony from "../Testimony";
import CtaBan from "../CtaBan";
import Faq from "../Faq";
import Footer from "../Footer";
import { useState } from 'react';


function LandingPage() {

  const [dissapear, setDissapear] = useState(true);

  return (
    <>
      <NavHero diss={dissapear} onDiss={() => setDissapear(!dissapear)} />
      <OurServices />
      <WhyUs />
      <Testimony />
      <CtaBan />
      <Faq />
      <Footer />
    </>
  );
}

export default LandingPage;