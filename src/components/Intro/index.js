import React from 'react';
import './style.scss'
import video from '../../assets/videos/Ghibli.mp4'
import Typewriter from 'typewriter-effect';
const Intro = props => {

    return (
        <div className="intro">

            <div className="welcome-text">

                <Typewriter
                    options={{
                        strings: ['Welcome To Ghibli Studio', 'See Thousand Of Infor Here '],
                        autoStart: true,
                        loop: true,
                        pauseFor: 2500,
                    }}
                />
            </div>

            <video className="intro--video"
                src={video}
                muted
                autoPlay={"autoplay"}
                loop
            > </video>

        </div>
    );
};

export default Intro;