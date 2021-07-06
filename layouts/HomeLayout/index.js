import Header from "./Header";
import Footer from "./Footer";


function HomeLayout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
};

export default HomeLayout;
