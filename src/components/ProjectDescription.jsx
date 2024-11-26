import React from 'react'

import SocialBlock from './UI/socialBlock/SocialBlock';
import { SocialProjectConfig } from './../utils/constants';

function ProjectDescription() {
  return (
    <div className='project-description'>
        <div className='project-description__content'>
            <h2 className='section-title project-description__title'>Pet Project</h2>
            <p className='section-subtitle project-description__subtitle'>
            Сам проект одностраничное приложение(SPA).<br/>
            Свёрстано по БЭМ с использованием технологий позволяющих делать сайт адаптивным и резиновым (@media - меди запросы. FLEX BOX.)<br/>
            Есть элемент которые были добавлены с помощью Material-UI<br/>
            React делает приложение динамичным.<br/>
            На данном этапе используется стороннее [API].<br/>
            </p>
            <ul className='project-description__list'>
                <li className='project-description__item'>
                    React
                </li>
                <li className='project-description__item'>
                    JavaScript
                </li>
                <li className='project-description__item'>
                    CSS
                </li>
                <li className='project-description__item'>
                    БЭМ
                </li>
                <li className='project-description__item'>
                    Material-UI
                </li>
            </ul>
        </div>
        <div className='project-description__links'>
            {SocialProjectConfig.map((link)=>
                <SocialBlock href={link.href} target={link.target} rel={link.rel} src={link.src} alt={link.alt}></SocialBlock>
            )}
        </div>
    </div>
  )
}

export default ProjectDescription
