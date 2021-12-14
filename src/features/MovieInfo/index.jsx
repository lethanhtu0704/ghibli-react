import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { CountUp } from 'use-count-up'
import { Link } from 'react-router-dom';

const MovieInfo = props => {
    const { id, title, image, description, rt_score } = props
    return (
        <div className="movie card" >
            <img className="card-img-top" src={image} alt="Ghibli Movie Sumary Information" />
            <div className="card-body">
                <Link to={id}>
                    <h5 className="card-title">{title}
                        <div className='movie--score'>
                            <CountUp isCounting end={Number(rt_score)} duration={7} />
                        </div>
                    </h5>
                </Link>
                <p className="movie--description card-text">{description}    </p>

            </div>
        </div>
    );
};

MovieInfo.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    rt_score: PropTypes.string
};

MovieInfo.defautlProps = {
    id: "",
    title: "",
    image: "",
    description: "",
    rt_score: ""
};

export default MovieInfo;