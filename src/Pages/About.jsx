import React from 'react'
import ava from './../images/avka.png'
import github from './../images/github.svg';
import vk from './../images/vkontakte.svg'
import telegram from './../images/telegram-app.svg'

function About() {
    return (
        <section className="about">
            <h2 className="section-title about__section-title">Привет, я Андрей</h2>
            <p className="section-subtitle about__section-subtitle">Я web-developer, фронтенд разработчик.</p>
            <ul className="cards">
                <li className="cards__item cards__block-avatar">
                    <img className="cards__avatar" src={ava} alt="Аватар" />
                </li>
                <li className="cards__item cards__block-link">
                    <h3 className="cards__title">My Links</h3>
                    <div className="cards__wrapper">
                        <a href="https://github.com/AnnieSkywalker/" className="cards__link" target="_blank" rel="noopener noreferrer">
                            <img className="cards__image" src={github} alt="Иконка github" />
                            <p className="cards__description">Annie Skywalker</p>
                        </a>
                    </div>
                    <div className="cards__wrapper">
                        <a href="https://vk.com/spirridonov" className="cards__link" target="_blank" rel="noopener noreferrer">
                            <img className="cards__image" src={vk} alt="Иконка github" />
                            <p className="cards__description">Spiridonov Andrey</p>
                        </a>
                    </div>
                    <div className="cards__wrapper">
                        <a href="https://t.me/spirridonov" className="cards__link" target="_blank" rel="noopener noreferrer">
                            <img className="cards__image" src={telegram} alt="Иконка github" />
                            <p className="cards__description">@spirridonov</p>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default About
