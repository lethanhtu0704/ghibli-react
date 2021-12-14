import React from 'react';
import PeoplePage from './Page/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'components/NotFound';
import CharacterInfo from './Page/CharacterInfo';


const PeopleList = props => {

    return (
        <Routes>
            <Route path="/" element={<PeoplePage />} />
            <Route path=":id" element={<CharacterInfo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default PeopleList;