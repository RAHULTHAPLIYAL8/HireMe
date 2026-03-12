import {createBrowserRouter} from "react-router-dom"
import Auth from "../pages/Auth"
import Login from "../components/Login"
import Register from "../components/Register"

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Auth><Login/></Auth>
        },
        {
            path:"/register",
            element:<Auth><Register/></Auth>
        }
    ]
)

export default router;