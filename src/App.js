import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

function App() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios.get(`${baseUrl}&page=${pageNumber}`)
      .then(res => {
        setMovies(prev => [...prev, ...res.data.results])
      })
      .catch(err => setError(err))
    setLoading(false);
  }, [pageNumber])

  return (
    <div className="main-container p-4">
      <h1 className="mb-4 text-slate-700 text-2xl">Popular Movies</h1>
      {loading ? "Loading..." :
        error ? "Error Loading Movies" :
          <div className="flex gap-x-4 flex-wrap">
            <Swiper
              navigation={true} 
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={5}
              onReachEnd={() => setPageNumber((prev) => prev + 1)}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  width: 240,
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  width: 480,
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: { 
                  width: 480,
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 40
                },
                1536: {
                  slidesPerView: 6,
                  spaceBetween: 50
                }
              }}
            >
            {movies?.map(({ first_air_date, name, poster_path, release_date, original_title, id }) => (
              <SwiperSlide key={id}>
                <Movie {...{ first_air_date, name, poster_path, release_date, original_title }} />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
      }
    </div >
  );
}

export default App;
