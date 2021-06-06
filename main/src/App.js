import { BrowserRouter } from "react-router-dom";

import HomeLayout from "./Layouts/HomeLayout";

// import Routes
import Routers from "./Routers";



function App() {

    return (
        <BrowserRouter>
            <HomeLayout>
                <Routers />
            </HomeLayout>
        </BrowserRouter>
    );
};

export default App;
