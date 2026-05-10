import Navber from "@/component/shared/Navber";
import HeroPage from "../../component/homepage/hero/page";
import ExtraSections from "@/component/ExtraSections";

const Mainlayout = ({children}) => {
    return (
        <>
            <Navber></Navber>
            <HeroPage></HeroPage>
            <ExtraSections></ExtraSections>
            {children}
        </>
    );
};

export default Mainlayout;