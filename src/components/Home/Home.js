import React from 'react';
import './Home.css';
// import me from '../../assests/me.png'
const Home = () => {
    return (
        <div id='home'>
            <div className='main home'>
                <div className='content'>
                    <div>
                        <h1 className='header'>Hi, my name is</h1>
                        <h2 className='name'>Ajinkya Buva.</h2>
                        <p className='desc'>I'm a software developer with a passion for coding and a love for laughter.
                            I may not have a black belt in karate, but I'm a coding sensei who knows how to deliver results that pack a punch.
                            From debugging like a pro to crafting code that's so clean, you could eat off of it (not that you'd want to), I'm always focused on excellence.
                            I promise to bring a positive and enthusiastic attitude to the table. Let's make some magic together and take your digital presence to the next level!</p>
                    </div>
                    <div>
                        {/* <img width="300" height="300" data-main-image="" sizes="(min-width: 500px) 500px, 100vw" decoding="async" src={me} alt="Headshot" style={{ objectFit: 'cover', opacity: '1' }}></img> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
