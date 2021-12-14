import React from 'react';
import DarkMode from 'components/DarkMode';
import './style.scss'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { getHeader } from 'constants/global';
import Images from 'constants/images'
const index = props => {
    let headerItems = getHeader();
    return (
        <nav className="navbar fixed-top navbar-expand-lg ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <Link className="navbar-brand" to="/"> <img className='navbar--image' src={Images.NoFace} alt='brand logo' /> </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    {
                        headerItems.map(header => (
                            <li key={header.url} className="nav-item">
                                <NavLink className="nav-link" className={({ isActive }) => isActive ? "nav-link nav-link__active" : "nav-link "}
                                    to={header.url}

                                >
                                    {header.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <form className="form-inline my-2 my-lg-0 mr-2">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>

                <DarkMode></DarkMode>
            </div>
        </nav>

    );
};

export default index;