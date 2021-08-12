import React from 'react';

import './style.css';

function FeaturedMovie({ featured })
{
    const firstDate = new Date(featured.first_air_date);
    let genres = [];

    for (var i in featured.genres) {
        genres.push(featured.genres[i].name);
    }

    return (
        <section className="container-featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${`https://image.tmdb.org/t/p/original${featured.backdrop_path}`})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{featured.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points">{featured.vote_average} pontos</div>
                        <div className="featured-year">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">{featured.number_of_seasons} temporada{featured.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured-description">{featured.overview}</div>
                    <div className="featured-btns">
                        <button className="featured-btn-watch" onClick={() => window.location.href = `/watch/${featured.id}`}>Assistir</button>
                        <button className="featured-btn-list" onClick={() => window.location.href = `/list/add/${featured.id}`}>+ Minha Lista</button>
                    </div>
                    <div className="featured-genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;