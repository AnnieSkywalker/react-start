import React from 'react'

import avatar from '../images/avka.png'
import github from '../images/github.svg';
import vk from '../images/vkontakte.svg'
import telegram from '../images/telegram-app.svg'

function Profile() {
    return (
        <div className='profile'>
            <div className='profile__content'>
                <div className='profile__avatar-block'>
                    <img className="profile__avatar" src={avatar} alt="Аватар" />
                </div>
                <div className='profile__description'>
                    <h2 className="section-title profile__section-title">
                        Привет, меня зовут Андрей
                    </h2>
                    <p className="section-subtitle profile__section-subtitle">
                        Я Frontend-разработчик. Занимаюсь веб-разработкой с 2019 года. Более подробно обо мне можно узнать перейдя по ссылкам.
                    </p>
                </div>
            </div>
            <div className='profile__links'>
                <a href="https://github.com/AnnieSkywalker/" className="profile__link" target="_blank" rel="noopener noreferrer">
                    <img className="profile__image" src={github} alt="Иконка github" />
                </a>
                <a href="https://vk.com/spirridonov" className="profile__link" target="_blank" rel="noopener noreferrer">
                    <img className="profile__image" src={vk} alt="Иконка github" />
                </a>
                <a href="https://t.me/spirridonov" className="profile__link" target="_blank" rel="noopener noreferrer">
                    <img className="profile__image" src={telegram} alt="Иконка github" />
                </a>
            </div>
        </div>
    )
}

export default Profile
