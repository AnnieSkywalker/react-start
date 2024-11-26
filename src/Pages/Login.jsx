import Section from '../components/UI/section/Section'
import React from 'react'

function Login() {
    return (
        <div>
            <Section margin={true}>
                <h2 className="section-title">
                    Регистрация, авторизация.
                </h2>
                <p className="section-subtitle">
                    В данный момент на сайте нет полноценной регистрации. Поэтому авторизация реализована через switch в Navbar.
                </p>
            </Section>
            
        </div>
    )
}

export default Login
