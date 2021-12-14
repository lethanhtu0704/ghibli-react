import React, { useEffect, useState } from 'react';
import Film from './Page/Film';
import MainPage from './Page/Main';
import NotFound from 'components/NotFound';
import { Route, Routes } from 'react-router';
import movieApi from 'api/moivieApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from 'components/Footer';

const MovieList = props => {
    const [filmList, setFilmList] = useState([]);
    const [count, setCount] = useState(3);
    const [hasMore, sethasMore] = useState(true);
    useEffect(() => {
        fetchProductList();
    }, []);

    const fetchProductList = async () => {
        try {
            const params = {
                limit: count,
            };
            const response = await movieApi.getAll(params);
            //console.log(response);
            setFilmList(response);
            if (count >= 21) {
                sethasMore(false);
            }
            setCount(count + 2)
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }
    return (
        <div>
            <Routes>
                <Route path="/" element={

                    <InfiniteScroll dataLength={filmList.length}

                        next={fetchProductList}
                        hasMore={hasMore}
                        loader={
                            <div className="text-center mt-3">
                                <div className="spinner-grow text-warning" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-warning" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-warning" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        }
                        endMessage={
                            <Footer />
                        }
                    >
                        <MainPage filmList={filmList} />
                    </InfiniteScroll>
                }
                />
                <Route path=":id" element={<Film />} />
                {/* <Route path=":photoId" element={< AddEditPage />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};



export default MovieList;