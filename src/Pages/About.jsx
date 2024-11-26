import React from 'react'

import Profile from '../components/Profile'
import Section from '../components/UI/section/Section'
import ProjectDescription from '../components/ProjectDescription'

function About() {
    return (
        <div>
            <Section margin={true}>
                <ProjectDescription></ProjectDescription>
            </Section>
            <Section margin={true}>
                <Profile></Profile>
            </Section>
        </div>
    )
}

export default About
