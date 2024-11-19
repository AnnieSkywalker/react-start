import AppRouter from 'components/AppRouter';
import Navbar from 'components/UI/navbar/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './images/cat.svg'

import 'styles/App.css';



function App() {
    return <div>
        <BrowserRouter>
            <header className='header'>
                <img className ="header__image" src={logo} alt="Логотип" />
                <Navbar />
            </header>
            <hr style={{ margin: '15px 0' }}></hr>
            <main className='content'>
                <AppRouter />
            </main>
        </BrowserRouter>
    </div>;
}

export default App;
