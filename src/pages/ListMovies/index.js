import React from 'react';

import './style.css';

function ListMovies({ title, movie })
{
    return (
        <div className="movie-row">
            <h2>{title}</h2>
            <div className="movie-row-list-area">
                <div className="movie-row-list">
                    {movie.results.length > 0 && movie.results.map((item, key) => (
                        <div className="movie-row-item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListMovies;