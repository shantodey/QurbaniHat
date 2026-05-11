import Navber from "@/component/shared/Navber";
import HeroPage from "../../component/homepage/hero/page";
import ExtraSections from "@/component/ExtraSections";
import Tips from "@/component/Tips";
import CustomerFeedback from "@/component/CustomerFeedback";
import Footer from "@/component/Footer";
import FeaturedAnimals from "@/component/FeaturedAnimals";

const Mainlayout = ({children}) => {
    return (
        <>
            <Navber></Navber>
            <HeroPage></HeroPage>
            <ExtraSections></ExtraSections>
            <FeaturedAnimals></FeaturedAnimals>
            <Tips></Tips>
            <CustomerFeedback></CustomerFeedback>
            <Footer></Footer>
            {children}
        </>
    );
};

export default Mainlayout;