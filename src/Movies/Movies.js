import React from 'react';
import MoviesList from './MoviesList.json';

export default function Movies(){
    return(
        <div className="container">
            <div className="row">
                <MoviesDetails/>
            </div>
        </div>

    )
}

function MoviesDetails(){
    return(
        MoviesList.map( (movies, index) =>{
            return (
                <div className='col-xl-4 col-lg-4 col-sm-12 col-md-6' key={index}>
                    <div className='movie-container'>
                        <img src= { movies.image } alt={ movies.name } className='movie-poster' />
                        <div className="movie-specs mt-2">
                            <h3 className="movie-name"> { movies.name } </h3>
                            <p className="movie-rating">⭐  { movies.rating } </p>
                        </div>
                        <p className="movie-summary">
                        { movies.description } 
                        </p>
                    </div>
                </div>
            )
            }      
        )
    )
}