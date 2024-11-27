import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/UI/footer/Footer';
import { AuthContext } from './context/context';
import Logo from './images/Logo.svg';

import './styles/App.css';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return <div className='main-container'>
            <AuthContext.Provider value = {{
                isAuth,
                setIsAuth: setIsAuth
            }}>
                <BrowserRouter>
                    <header id='header' className='header'>
                        <div className='header__content'>
                            <img className ="header__image" src={Logo} alt="Логотип" />
                            <Navbar />
                        </div>
                    </header>
                    <main id='main' className='content'>
                        <AppRouter />
                    </main>
                    <Footer>
                    </Footer>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>;
}

export default App;
