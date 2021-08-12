import React, { useEffect, useState } from 'react';

import './App.css';

import Tmdb from './service/Tmdb';

import Header from './pages/Header';
import FeaturedMovie from './pages/FeaturedMovie';
import ListMovies from './pages/ListMovies';
import Footer from './pages/Footer';

function App()
{
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() =>
    {
        const loadAll = async () =>
        {
            const movies = await Tmdb.getHomeList();

            setMovieList(movies);

            const originals = movies.filter(movie => movie.slug === 'originals');

            const results = originals[0].items.results

            const randomChosen = Math.floor(Math.random() * results.length - 1);

            const chosenMovie = results[randomChosen];

            const chosenInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');

            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);
    return (
        <>
            <Header />
            {featuredData ? <FeaturedMovie featured={featuredData} /> : ''}
            <section className="list-movies">
                {movieList.map((movie, key) => (
                    <ListMovies key={key} title={movie.title} movie={movie.items} />
                ))}
            </section>
        </>
    );
}

export default App;
