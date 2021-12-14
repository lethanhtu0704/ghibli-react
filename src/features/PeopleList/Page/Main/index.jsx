import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import CharacterList from 'features/PeopleList/CharacterList';
import './style.scss'
import peopleApi from 'api/peopleApi';

const PeoplePage = props => {

    const [peopleList, setPeopleList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchPeople = async () => {
            try {
                const params = {
                    //limit: count,
                };
                const response = await peopleApi.getAll(params);
                //console.log(response);
                setPeopleList(response);
                setLoading(false)
            } catch (error) {
                console.log('Failed to fetch people list: ', error);
            }
        };

        fetchPeople();
    }, []);



    return (
        <div>
            <div className='people--page'>
                <CharacterList isLoading={isLoading} characterList={peopleList} ></CharacterList>
            </div>
            <Footer />
        </div>
    );
};



export default PeoplePage;