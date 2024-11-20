import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import Footer from './components/UI/footer/Footer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './images/cat.svg'
import './styles/App.css';

function App() {
    return <div>
        <BrowserRouter>
            <header className='header'>
                <div className='header__content'>
                    <img className ="header__image" src={logo} alt="Логотип" />
                    <Navbar />
                </div>

            </header>
            <main className='content'>
                <AppRouter />
            </main>
            <Footer>
            </Footer>
        </BrowserRouter>
    </div>;
}

export default App;
