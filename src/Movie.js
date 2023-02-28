
export default function Movie({ first_air_date, name, poster_path, release_date, original_title }) {
    const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

    return (
        <div className="cursor-pointer group relative movie-wrapper">
            <div className="overflow-hidden rounded-md">
                <img src={`${imageBaseUrl}/${poster_path}`} alt={`Poster of ${original_title}`} className='w-full max-h-[300px] group-hover:scale-125 transition ease-out duration-300'></img>
            </div>
            <p className="pt-2 pb-1 text-lg font-medium leading-tight">{name || original_title}</p>
            <p className="text-sm">
                {first_air_date?.slice(0, first_air_date?.indexOf("-")) || release_date?.slice(0, release_date?.indexOf("-"))}
            </p>
            <svg className="play-svg hidden group-hover:block" 
                fill="#fff" height="70px" width="70px" version="1.1" id="Capa_1" viewBox="0 0 60 60">
                <g>
                    <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
                    <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
                </g>
            </svg>
            <button className="favourite-btn hidden group-hover:inline-block">Add to Favourites</button>
        </div>
    )
}
