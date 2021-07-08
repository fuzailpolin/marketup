import HomeLayout from "../../layouts/HomeLayout";

import CareerHero from "../../components/SubPages/CareerPage/CareerHero";
import CareerContent from "../../components/SubPages/CareerPage/CareerContent";
import CurrentOpenings from "../../components/SubPages/CareerPage/CurrentOpenings";

const Career = () => {
    return (
        <HomeLayout>
            <CareerHero/>
            <CareerContent/>
            <CurrentOpenings />
        </HomeLayout>
    );
}

export default Career;
