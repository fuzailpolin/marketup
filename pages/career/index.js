import HomeLayout from "../../layouts/HomeLayout";

import CareerHero from "../../components/SubPages/CareerPage/CareerHero";
import CareerContent from "../../components/SubPages/CareerPage/CareerContent";

const Career = () => {
    return (
        <HomeLayout>
            <CareerHero/>
            <CareerContent/>
        </HomeLayout>
    );
}

export default Career;
