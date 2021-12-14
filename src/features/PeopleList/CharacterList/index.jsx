import React from 'react';
import PropTypes from 'prop-types';
import 'react-loading-skeleton/dist/skeleton.css'
import LineSkeleton from 'components/Skeleton/LineSkeleton';
import { Link } from 'react-router-dom';

const CharacterList = props => {

    CharacterList.propTypes = {
        characterList: PropTypes.array,
        isLoading: PropTypes.bool,
    };

    CharacterList.defautlProps = {
        characterList: [],
        isLoading: true,
    };

    const { characterList, isLoading } = props;

    return (
        <div>
            <div className='test'>
                <h2 className='text-center mt-3 mb-3'>All Character</h2>
                <ul className="container">

                    {
                        isLoading
                            ?
                            <LineSkeleton></LineSkeleton>
                            :
                            <div className="row justify-content-center">
                                {
                                    characterList.map((character) => (
                                        <li key={character.id} className=" col-sm-4 col-md-3 col-xl-4 mb-4">
                                            <Link to={character.id}>
                                                {character.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </div>
                    }
                </ul>

            </div>
        </div>
    );
};


export default CharacterList;