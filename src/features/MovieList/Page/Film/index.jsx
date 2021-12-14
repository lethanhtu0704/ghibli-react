import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { useParams } from 'react-router-dom';
import movieApi from 'api/moivieApi';
import { CountUp } from 'use-count-up';

const Film = props => {
    let params = useParams();
    const [film, setFilm] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const id = params.id;
                const response = await movieApi.getFilm(id);
                setFilm(response);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchFilm();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    const { id, movie_banner, description, director, image, title, original_title, original_title_romanised,
        producer, release_date, rt_score, running_time } = film;
    console.log(film)
    return (
        <div style={{
            backgroundImage: `linear-gradient(to right, rgb(15 32 39 / 35%), rgb(32 58 67 / 35%), rgb(44 83 100 / 35%)), url(${movie_banner})`
        }} className='film'>
            <div className='overlay'> </div>
            <div className='container'>

                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <div className='film--left'>
                            <div className='film--left__score'> <CountUp isCounting end={Number(rt_score)} duration={7} />  </div>
                            <img className='film--left__image' src={image} alt='Film Img' />
                        </div>

                    </div>
                    <div key={id} className='col-md-6 d-flex flex-column justify-content-start'>
                        <div className='overlay2'> </div>
                        <h2 className='film--title'> {title} ({release_date}) </h2>
                        <h3 className='film--title__romanised'> {original_title_romanised}</h3>
                        <h3 className='film--title__original'> {original_title}</h3>
                        <div><span className='font-weight-bold'>Amount of time</span> : {running_time} minute</div>
                        <div><span className='font-weight-bold'>Director</span> : {director}</div>
                        <div><span className='font-weight-bold'>Producer</span> : {producer}</div>
                        <span>{description}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

Film.propTypes = {

};

export default Film;