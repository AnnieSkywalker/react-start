import AppRouter from 'components/AppRouter';
import Navbar from 'components/UI/navbar/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'styles/App.css';



function App() {
    return <div>
        <BrowserRouter>
        <header className='header'>
            <img className ="header__image" src="" alt="Логотип" />
            <Navbar />
        </header>
            
            <AppRouter />
        </BrowserRouter>
    </div>;
}

export default App;
