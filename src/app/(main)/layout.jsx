import Navber from "@/component/shared/Navber";
import HeroPage from "../../component/homepage/hero/page";
import ExtraSections from "@/component/ExtraSections";
import Tips from "@/component/Tips";

const Mainlayout = ({children}) => {
    return (
        <>
            <Navber></Navber>
            <HeroPage></HeroPage>
            <ExtraSections></ExtraSections>
            <Tips></Tips>
            {children}
        </>
    );
};

export default Mainlayout;