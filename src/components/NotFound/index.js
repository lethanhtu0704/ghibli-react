import React from 'react';
import Images from '../../constants/images'
import { useNavigate } from 'react-router-dom';
import './style.scss'
const NotFound = props => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="not--found mt-5">
                <div className="not--found">
                    <img src={Images.NotFound} alt="Not Found SVG" />
                    <div className="not--found__text"> 404
                        <div className="not--found__span">Page Not Found
                            <div onClick={() => navigate(-1)} className="not--found__back">Go Back</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};


export default NotFound;