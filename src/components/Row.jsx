import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.Search || []);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.imdbID}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                        alt={movie.Title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
