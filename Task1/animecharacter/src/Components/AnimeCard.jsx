import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = ({ anime }) => {
    return (
        <div>
            {/* <Link to={`/anime/${anime.mal_id}`}>
                <p>{anime.name}</p>
            </Link> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl pb-7">
                <img src={anime.images.webp.image_url} alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    <div className='flex content-center'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#DD2E44" d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z"/></svg></span>
                        <span>{anime.favorites}</span>
                    </div>
                    <p class="text-lg font-bold text-black truncate block capitalize">{anime.name}</p>
                    <div className='mt-1'>
                        {
                            anime.nicknames.map((nickname) => (
                                <p className='inline-block bg-blue-200 m-1 px-2 py-1 rounded-lg text-sm'>{nickname}</p>
                            ) )
                        }
                    </div>
                </div>
                <Link to={anime.url} className='bg-pink-400 m-3 p-2 rounded-md text-white'>
                        More Details
                </Link>
            </div>
        </div>
    )
}

export default AnimeCard