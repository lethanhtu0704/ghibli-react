import PropTypes from 'prop-types';
import Intro from 'components/Intro';
import MovieInfo from 'features/MovieInfo';


const MainPage = props => {

    MainPage.propTypes = {
        filmList: PropTypes.array,
    };

    MainPage.defautlProps = {
        filmList: [],

    };
    const { filmList } = props

    return (

        <div>
            <Intro></Intro>
            <h3 className="mt-5 text-center">ALL FILMS</h3>
            <div className="container">
                <div className="row">
                    {
                        filmList.map((film) => (

                            <div key={film.id} className="col-12 col-sm-6  col-md-4 col-xl-4  mt-5" >
                                <MovieInfo id={film.id} title={film.title} image={film.image}
                                    release_date={film.release_date} description={film.description} rt_score={film.rt_score}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div> </div>
        </div >
    );
};



export default MainPage;