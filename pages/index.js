import React from "react";
import HeroSection from "../components/SubPages/Homepage/HeroSection";
import AboutMarketUp from "../components/SubPages/Homepage/AboutMarketUp";
import ServiceSection from "../components/SubPages/Homepage/ServiceSection";
import OurTeam from "../components/SubPages/Homepage/OurTeam";


// import layout
import HomeLayout from "../layouts/HomeLayout";

const HomePage = () => {
    return (
        <HomeLayout>
            <HeroSection/>
            <AboutMarketUp/>
            <ServiceSection/>
            <OurTeam />

        </HomeLayout>
    );
};

export default HomePage;
