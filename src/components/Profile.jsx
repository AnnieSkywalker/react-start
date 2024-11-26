import React from 'react'

import avatar from '../images/avka.png'
import { SocialProfileConfig } from '../utils/constants'
import SocialBlock from './UI/socialBlock/SocialBlock'

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
            {SocialProfileConfig.map((link)=>
                <SocialBlock href={link.href} target={link.target} rel={link.rel} src={link.src} alt={link.alt}></SocialBlock>
            )}
            </div>
        </div>
    )
}

export default Profile
