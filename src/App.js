import React from 'react';
import { BrowserRouter, Route,Link, Routes } from 'react-router-dom';
import About from './Pages/About';
import Posts from './Pages/Posts';


function App() {
    return <div>
        <BrowserRouter>
            <div className='navbar'>
                <div className='navbar__links'>
                    <Link to ="/about">about</Link>
                    <Link to ='/posts'>posts</Link>
                </div>
            </div>
            <Routes>
                <Route path='/about' element={<About />}>
                </Route>
                <Route path='/posts' element={<Posts />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
