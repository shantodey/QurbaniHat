

import ExtraSections from "@/component/ExtraSections";
import Tips from "@/component/Tips";
import CustomerFeedback from "@/component/CustomerFeedback";

import FeaturedAnimals from "@/component/FeaturedAnimals";
import Footer from "@/component/Footer";
import HeroSection from "@/component/homepage/hero/page";

const Mainlayout = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <ExtraSections></ExtraSections>
            <FeaturedAnimals></FeaturedAnimals>
            <Tips></Tips>
            <CustomerFeedback></CustomerFeedback>
            <Footer></Footer>
        </>
    );
};

export default Mainlayout;