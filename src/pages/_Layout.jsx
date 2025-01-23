import { Outlet } from "react-router-dom";
import Navigation from "../components/navigaion";

function Layout(){
    return(
        <>
        <Navigation/>
        <Outlet/>
        </>
    )
}

export default Layout