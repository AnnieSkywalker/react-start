import About from "Pages/About";
import PostPage from "Pages/PostPage";
import Posts from "Pages/Posts";

export const routes =[
	{path: '/', element: <Posts />},
	{path: '/about', element: <About />},
	{path: '/posts', element: <Posts />},
	{path: '/posts/:id', element: <PostPage/>}
]
