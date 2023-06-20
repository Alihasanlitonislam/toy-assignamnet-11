import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegisterLogout/Login/Login";
import Register from "../Pages/LoginRegisterLogout/Register/Register";
import LogOut from "../Pages/LoginRegisterLogout/LogOut/LogOut";
import AddToy from "../Toy/AddToy/AddToy";
import AllToy from "../Toy/AllToy/AllToy";
import Error from "../Pages/Error/Error";
import Blog from "../Blog/Blog";
import PriveatRouts from "./PriveatRouts";
import MyToy from "../Toy/MyToy/MyToy";
import Edit from "../Toy/MyToy/Edit/Edit";
import SinglePage from "../Toy/AllToy/SinglePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/logout',
                element: <LogOut/>
            },
            {
                path: '/add-Toy',
                element: <PriveatRouts><AddToy/></PriveatRouts>
            },
            {
                path: '/all-Toy',
                element: <AllToy/>,
                loader: ()=> fetch('https://toy-cor-server.vercel.app/addtoy')
            },
            {
                path: '/mytoy',
                element: <PriveatRouts><MyToy/></PriveatRouts>
            },
            {
                path:'/updatetoy/:id',
                element:<Edit></Edit>

            },
            {
                path: '/single/:id',
                element: <PriveatRouts><SinglePage/></PriveatRouts>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
])
export default router;