import Error from "./../Pages/Error";
import About from "./../Pages/About";
import Login from "./../Pages/Login";
import PostPage from "./../Pages/PostPage";
import Posts from "./../Pages/Posts";

export const privateRoutes =[
    {path: '/', element: <Posts />},
    {path: '/about', element: <About />},
    {path: '/posts', element: <Posts />},
    {path: '/posts/:id', element: <PostPage/>},
    {path: '/about', element: <About />},
    {path: '/error', element: <Error />}
]

export const publicRoutes =[
    {path: '/login', element: <Login />},
    {path: '*', element: <Login />},
]
