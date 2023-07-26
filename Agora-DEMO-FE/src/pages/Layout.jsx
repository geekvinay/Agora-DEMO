import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import CallScreen from "./CallScreen";
const Layout = () => {
    const [path, setPath] = useState(useLocation().pathname);
    useEffect(() => {
        console.log(path);
    });

    if (path === "/")
    {
        return (
            <div className='w-screen h-screen overflow-hidden'>
                Home
            </div>
        )
    }
    if(path === "/call")
    {
        return (
            <div className='w-screen h-screen overflow-hidden'>
                <CallScreen/>
            </div>
        )
    }
    else 
    {
        return (
            <div className='w-screen h-screen overflow-hidden'>
                Layout
            </div>
        ) 
    }
}

export default Layout