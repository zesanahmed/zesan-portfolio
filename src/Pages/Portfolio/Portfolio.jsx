import { BiBriefcase } from "react-icons/bi";
import SportsCard from "../../Components/Card/SportsCard";
import PremiumShopCard from "../../Components/Card/PremiumShopCard";
import FrozenCard from "../../Components/Card/FrozenCard";
import RannaGhorCard from "../../Components/Card/RannaGhorCard";


const Portfolio = () => {
  const divStyle = {
    backgroundColor: '#2c2d2f',
};
    return (
        <div style={divStyle} className=" p-16" >
            <div className="flex justify-between">
                <h2 className="text-4xl text-sky-600 font-bold">Portfolio.</h2>
                <BiBriefcase className="text-4xl text-sky-600" />
            </div>
            <hr className="mt-2" />
            <div className="mt-16">
            <SportsCard/>
            <PremiumShopCard/>
            <FrozenCard/>
            <RannaGhorCard/>
            </div>
        </div >
    );
};

export default Portfolio;

 