import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Posts from './Pages/Posts';


function App() {
	return <div>
    <BrowserRouter>
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
