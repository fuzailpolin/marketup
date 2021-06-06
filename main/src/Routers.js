import { Route, Switch} from "react-router-dom";

// import all pages here
import Homepage from "./Pages/Homepage";



const Routers = () => {
    return (
        <Switch>
            <Route path={'/'}  component={Homepage} />
        </Switch>
    )
}

export default Routers