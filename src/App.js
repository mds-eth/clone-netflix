import React, { useEffect, useState } from 'react';

import './App.css';

import Tmdb from './service/Tmdb';

import Header from './pages/Header';
import Featured from './pages/Featured';
import ListMovies from './pages/ListMovies';
import Footer from './pages/Footer';

function App()
{
    const [movieList, setMovieList] = useState([]);

    useEffect(() =>
    {
        const loadAll = async () =>
        {
            const response = await Tmdb.getHomeList();
            setMovieList(response);
        }

        loadAll();
    }, []);
    return (
        <>
            <Header />
            <section className="list-movies">
                {movieList.map((movie, key) => (
                    <ListMovies key={key} title={movie.title} movie={movie.items} />
                ))}
            </section>
        </>
    );
}

export default App;
