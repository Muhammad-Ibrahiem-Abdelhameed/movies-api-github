import { getMovies} from "../../assets/fakeMovieService";

import { MovieActions} from '../actions/movieActions';

let id = 0;
const initialState = {
    movies : getMovies().map( m => ({
        id : ++id,
        title : m.title,
        genre : m.genre.name,
        stock : m.numberInStock,
        rate : m.dailyRentalRate,
        isLiked : false
    }))
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type){
        case MovieActions.DELETE_MOVIE:
            return {
                movies : state.movies.filter(v => v.id !== action.id)
            };
        case MovieActions.LIKE_MOVIE :
            return {
                movies:state.movies.map( m => {
                    if(m.id === action.id){
                        m.isLiked = !m.isLiked ;
                    }
                    return m ;
                })
            };

        default:
            return state;
    }
};

export default MoviesReducer;