import React, { useEffect, useState } from 'react'
import AnimeCard from '../Components/AnimeCard'
import axios from 'axios';
import { useAnimeContext } from '../Context/Context';

const Home = () => {

    const {animeCharacters, searchAnime } = useAnimeContext();
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = () => {
        searchAnime(searchValue, 1, 15)
    } 

    return (
        <div className='w-full bg-slate-300'>
            <div className='bg-pink-100 p-16'>
                <div className='searchPart flex content-center justify-center bg-pink-100'>
                    <div className="searchBox flex gap-3">
                        <input 
                            type="text" 
                            name='anime name' 
                            placeholder='Search Anime' 
                            className='searchInput' 
                            value={searchValue}
                            onChange={(e)=>setSearchValue(e.target.value)}
                        />
                        <button className='searchButton bg-pink-500 p-2 text-white rounded-md' onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
                {animeCharacters.characters.map((anime) =>(
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </div>
    )
}

export default Home