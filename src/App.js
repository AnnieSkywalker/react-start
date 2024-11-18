import AppRouter from 'components/AppRouter';
import Navbar from 'components/UI/navbar/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return <div>
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    </div>;
}

export default App;
