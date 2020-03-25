import React, { useState } from "react";
import "./Trending.scss";

const Trending = ({ database }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trendingSeries = database.series.filter(item => item.is_Trending);
  const sliderStyles = {
    transform: `translateX(-${currentSlide * 1280}px)`,
    transition: "all, .8s",
    width: `${trendingSeries.length * 1280}px`
  };
  return (
    <div className='slider'>
      <button
        onClick={() => {
          setCurrentSlide((currentSlide + 1) % trendingSeries.length);
        }}
        className='btn btn-next'>
        next
      </button>
      <button
        onClick={() => {
          setCurrentSlide(
            currentSlide - 1 < 0 ? trendingSeries.length - 1 : currentSlide - 1
          );
        }}
        className='btn btn-prev'>
        prev
      </button>
      <div className='slider__wrapper' style={sliderStyles}>
        {trendingSeries.map(series => {
          return (
            <div
              key={series.id}
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(67, 59, 84, 0.9), rgba(70, 50, 80, 0.9)), url('${series.backdrop_path}')`
              }}
              className='slider__item'>
              <p className='slider__title'>{series.title}</p>
              <p className='slider__release-date'>{series.release_date}</p>
              <p className='slider__overview'>
                {series.overview.substring(0, 200)}...
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Trending;
