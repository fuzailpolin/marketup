import Header from "./Header";
import Footer from "./Footer";

function HomeLayout({children}) {
    return (
        <>
            <link
                rel="preload"
                href="public/fonts/Typoslab_ irregular/TypoSlab Irregular Demo.otf"
                as="font"
                crossOrigin=""
            />
            <Header/>
            {children}
            <Footer/>
        </>
    )
};

export default HomeLayout;
