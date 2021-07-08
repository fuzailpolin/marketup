import React from "react";
import HeroSection from "../components/SubPages/Homepage/HeroSection";
import AboutMarketUp from "../components/SubPages/Homepage/AboutMarketUp";
import ServiceSection from "../components/SubPages/Homepage/ServiceSection";
import OurTeam from "../components/SubPages/Homepage/OurTeam";


// import layout
import HomeLayout from "../layouts/HomeLayout";
import OurWorkSection from "../components/SubPages/Homepage/OurWorkSection";

const HomePage = () => {
    return (
        <HomeLayout>
            <HeroSection/>
            <AboutMarketUp/>
            <ServiceSection/>
            <OurTeam />
            <OurWorkSection />

        </HomeLayout>
    );
};

export default HomePage;
