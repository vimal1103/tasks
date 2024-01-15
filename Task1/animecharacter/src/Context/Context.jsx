// AnimeContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [animeCharacters, setAnimeCharacters] = useState({
    characters: [],
  });

  useEffect(() => {
    const animeData = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/characters?page=1&limit=15&q=&order_by=favorites&sort=desc`
        );
        setAnimeCharacters({
          characters: response.data.data,
        });
      } catch (error) {
        console.log("no data availble");
      }
    };

    animeData();
  }, []);

  const searchAnime = async (searchValue, pageIndex, pageLimit) => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/characters?page=${pageIndex}&limit=${pageLimit}&q=${searchValue}&order_by=favorites&sort=desc`
      );
      setAnimeCharacters({
        characters: response.data.data,
      });
    } catch (error) {
      console.log('data not found');
    }
  };

 
  return (
    <AnimeContext.Provider
      value={{
        animeCharacters,
        searchAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

const useAnimeContext = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error('useAnimeContext must be used within an AnimeProvider');
  }
  return context;
};

export { AnimeProvider, useAnimeContext };
