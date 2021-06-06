import HeaderComponent from "./Header";

const HomeLayout = ({children}) => {
    return (
        <>
            <HeaderComponent />
            {
                children
            }
        </>
    )
}

export default HomeLayout
