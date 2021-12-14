import React, { useEffect, useRef, useState } from 'react';
import { randombackGround } from 'constants/images';
import './style.scss'
import peopleApi from 'api/peopleApi';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
// var backGround = randombackGround();
const CharacterInfo = props => {
    let params = useParams();
    const backGround = useRef(randombackGround())
    const [isLoading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [Character, setCharacter] = useState([]);

    useEffect(() => {
        setLoading(true)
        const fetchCharacter = async () => {
            try {
                const id = params.id;
                const response = await peopleApi.getCharacter(id);
                setCharacter(response);
                setLoading(false)
                setProgress(100)
            } catch (error) {
                console.log('Failed to fetch character : ', error);
            }
        }
        fetchCharacter();
    }, []);

    return (

        <div className="character-background"
            style={{
                backgroundImage: `linear-gradient(to right, rgb(15 32 39 / 35%), rgb(32 58 67 / 35%), rgb(44 83 100 / 35%)), url(${backGround.current})`
            }}
        >
            <LoadingBar
                color='#0286c4'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4  mx-auto">
                        {
                            isLoading
                                ?
                                <div class="text-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                                :
                                <blockquote className="character character-custom  p-5 shadow rounded">
                                    <div className="character-custom__icon bg-info shadow-sm"><i className="fa fas fa-user text-white" /></div>
                                    {/* <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p> */}
                                    <div className='character-field d-flex justify-content-center'>
                                        <ul className="fa-ul">
                                            <h2 className='character-field__name'>{Character.name}</h2>
                                            <li><span className="fa-li"><i className="fas fa-venus-mars"></i></span>{Character.gender}</li>
                                            <li><span className="fa-li"><i className="fas fa-heartbeat"></i></span>{Character.age}</li>
                                            <li><span className="fa-li"><i className="fas fa-eye"></i></span>{Character.eye_color}</li>
                                            <li><span className="fa-li"><i className="fas fa-palette"></i></span>{Character.hair_color}</li>
                                        </ul>
                                    </div>

                                    <footer className="character-footer pt-2 mt-2 border-top">Character in
                                        <cite title="Source Title"> Source Title</cite>
                                    </footer>
                                </blockquote>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CharacterInfo;