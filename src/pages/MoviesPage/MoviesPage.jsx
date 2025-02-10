import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const movies = await fetchMoviesByQuery(query);
        setMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
