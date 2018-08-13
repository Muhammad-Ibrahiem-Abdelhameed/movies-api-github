
export const MovieActions = {
    DELETE_MOVIE : 'DELETE_MOVIE',
    LIKE_MOVIE : 'LIKE_MOVIE'
};

export const deleteMovie = id => ({
    type : MovieActions.DELETE_MOVIE,
    id
});

export const likeMovie = id => ({
    type: MovieActions.LIKE_MOVIE,
    id
});