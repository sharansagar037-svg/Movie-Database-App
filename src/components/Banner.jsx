import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            const movies = request.data.Search;
            setMovie(movies[Math.floor(Math.random() * movies.length - 1)] || movies[0]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${movie?.Poster}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.Title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.Title + " - A cinematic experience brought to you by the Movie Database App.", 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
