import OurWorkSection from "../../components/SubPages/GalleryPage/OurWorkSection";
import GalleryHero from "../../components/SubPages/GalleryPage/GalleryHero";
import HomeLayout from "../../layouts/HomeLayout";

const Gallery = () => {
    return (
        <HomeLayout>
            <GalleryHero/>
            <OurWorkSection/>
        </HomeLayout>
    );
}

export default Gallery;
