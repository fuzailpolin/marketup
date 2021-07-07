import React from "react";
import HeroSection from "../components/SubPages/Homepage/HeroSection";
import AboutMarketUp from "../components/SubPages/Homepage/AboutMarketUp";



// import layout
import HomeLayout from "../layouts/HomeLayout";

const HomePage = () => {
    return (
        <HomeLayout>
            <HeroSection />
            <AboutMarketUp />

        </HomeLayout>
    );
};

export default HomePage;
