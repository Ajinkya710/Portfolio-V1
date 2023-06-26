import React from 'react';
import './About.css';
import Button from '@mui/material/Button';

const About = () => {
    return (
        <div id='about'>
            <div className='about main'>
                <div className='content'>
                    <h1 className='numbered_heading'>About Me</h1>
                    <p className='about_desc'>I am a professional software developer with 5+ years of industry experience. I have worked with Tata Consultancy Services in the past, where I gained experience
                        in developing large-scale software systems for clients in different industries. Currently, I work with the University of Wollongong, where I am responsible for
                        designing and developing web based applications and databases.</p>

                    <p className='about_desc'>As a software developer, I have experience working in multiple different programming domains, which has allowed me to develop a deep understanding of various
                        programming languages, tools, and frameworks. I am passionate about software development and committed to delivering high-quality solutions that meet my
                        clients' needs. I am a quick learner and have a keen eye for detail, which helps me identify issues and develop effective solutions. I believe that collaboration
                        and communication are key to successful software development and always strive to work closely with my team to achieve our goals.</p>
                </div>
                <div className='content skills'>
                    <h2>Skills</h2>
                    <h4>Programming languages</h4>
                    <div className='skills_set'>
                        <div className='skills_skill'>JavaScript</div>
                        <div className='skills_skill'>Java</div>
                        <div className='skills_skill'>C++</div>
                        <div className='skills_skill'>Python</div>
                        <div className='skills_skill'>HTML</div>
                        <div className='skills_skill'>CSS</div>
                        <div className='skills_skill'>Bash Scripting</div>
                    </div>
                    <h4>Frameworks</h4>
                    <div className='skills_set'>
                        <div className='skills_skill'>React</div>
                        <div className='skills_skill'>Express.js</div>
                        <div className='skills_skill'>Google Firebase</div>
                        <div className='skills_skill'>Next.js</div>
                    </div>
                    <h4>Databases</h4>
                    <div className='skills_set'>
                        <div className='skills_skill'>MySQL</div>
                        <div className='skills_skill'>MongoDB</div>
                    </div>
                    <h4>Version Control and cloud Infrastructure</h4>
                    <div className='skills_set'>
                        <div className='skills_skill'>Git</div>
                        <div className='skills_skill'>RCS</div>
                        <div className='skills_skill'>AWS(Learner)</div>
                    </div>
                    <p>
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                    <Button >
                        <a className='contact_link' href='#connect' >Contact</a>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default About
