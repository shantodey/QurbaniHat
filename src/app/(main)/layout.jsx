import Navber from "@/component/shared/Navber";
import HeroPage from "../../component/homepage/hero/page";

const Mainlayout = ({children}) => {
    return (
        <>
            <Navber></Navber>
            <HeroPage></HeroPage>
            {children}
        </>
    );
};

export default Mainlayout;