import React from "react";
import HeroSection from "../components/SubPages/Homepage/HeroSection";
import AboutMarketUp from "../components/SubPages/Homepage/AboutMarketUp";
import ServiceSection from "../components/SubPages/Homepage/ServiceSection";


// import layout
import HomeLayout from "../layouts/HomeLayout";

const HomePage = () => {
    return (
        <HomeLayout>
            <HeroSection/>
            <AboutMarketUp/>
            <ServiceSection/>

        </HomeLayout>
    );
};

export default HomePage;
