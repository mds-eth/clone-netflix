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
    const [blackHeader, setBlackHeader] = useState(false);
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

            if (chosenMovie.backdrop_path !== null) {
                const chosenInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');

                setFeaturedData(chosenInfo);
            }
        }

        loadAll();
    }, []);

    useEffect(() =>
    {
        const scrollListener = () =>
        {
            if (window.scrollY > 10) {
                setBlackHeader(true)
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () =>
        {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);
    return (
        <>
            <Header black={blackHeader} />
            {featuredData ? <FeaturedMovie featured={featuredData} /> : ''}
            <section className="list-movies">
                {movieList.map((movie, key) => (
                    <ListMovies key={key} title={movie.title} movie={movie.items} />
                ))}
            </section>

            <Footer />
        </>
    );
}

export default App;
