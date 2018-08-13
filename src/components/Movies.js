import React from 'react';
import {connect} from "react-redux";
import {likeMovie, deleteMovie} from "../store/actions/movieActions";

const Movies = props =>
    props.movies.map((value, index) => (
            <tr key={index}>
                <td>{value.title}</td>
                <td>{value.genre}</td>
                <td>{value.stock}</td>
                <td>{value.rate}</td>
                <td>
                    <button className="btn btn-light" onClick={()=> props.likeFunc(value.id)}>
                        {
                            value.isLiked === true ?
                            <i className="fas fa-heart fa-lg" />
                            : <i className="far fa-heart fa-lg" />
                        }
                    </button>

                </td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() => props.deleteFunc(value.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
);

const mapStateToProps = state => ({
    movies : state.moviesReducer.movies
});

const mapDispatchToProps = dispatch => ({
    likeFunc : id => dispatch(likeMovie(id)),
    deleteFunc : id => dispatch(deleteMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);