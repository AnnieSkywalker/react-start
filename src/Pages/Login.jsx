import zIndex from '@mui/material/styles/zIndex'
import MyInput from '../components/UI/input/MyInput'
import Section from '../components/UI/section/Section'
import React from 'react'
import { blue } from '@mui/material/colors'

function Login() {
    return (
        <div>
            <Section margin={true}>
                <h2 className="section-title">
                    Регистрация, авторизация.
                </h2>
                <p className="section-subtitle">
                    В данный момент на сайте нет регистрации. Поэтому авторизация реализована через switch в Navbar.
                </p>
            </Section>
            <Section margin={true}>
                <div style={{position: 'absolute', width: '100%', height: '100%', backdropFilter: 'blur(5px)'}}></div>
                <h2 className="section-title">
                    Регистрация
                </h2>
                <MyInput type='text' placeholder='email' disabled ></MyInput>
                <MyInput type='text' placeholder='password' disabled ></MyInput>
            </Section>
        </div>
    )
}

export default Login
