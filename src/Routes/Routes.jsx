import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "resume",
                element: <Resume></Resume>
            },
            {
                path: "portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "Blog",
                element: <Blog></Blog>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
        ]
    },
]);