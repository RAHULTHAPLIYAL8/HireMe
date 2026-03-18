import {createBrowserRouter} from "react-router-dom"
import Auth from "../pages/Auth"
import Login from "../components/Login"
import Register from "../components/Register"
import Nav from "../components/Nav"

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Auth><Login/></Auth>
        },
        {
            path:"/register",
            element:<Auth><Register/></Auth>
        },
        {
            path:"/nav",
            element:<Nav/>
        }
    ]
)

export default router;