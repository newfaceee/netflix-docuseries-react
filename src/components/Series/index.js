import React, { useState, useEffect } from "react";
import "./Series.scss";
import classnames from "classnames";
import controls from "../../utils/controls";
import { Link, useHistory } from "react-router-dom";

// дивы в ссылках возможно потом надо будет заменить на элемент баттон
// добавить к класссу  series__nav класс series_controls
const Series = ({ database }) => {
  let history = useHistory();
  const { preparingData } = controls;
  const sortBy = ["Users rating", "IMDB rating", "Release date"];
  const filters = ["All", "Trending", "Recently add"];
  const [activeButton, setActiveButton] = useState(0);
  const [currentSortType, setCurrentSortType] = useState(sortBy[0]);
  const [currentFilterState, setCurrentFilterState] = useState(filters[0]);
  const [isSortMenu, setSortMenu] = useState(false);
  const currentList = preparingData(
    database.series,
    currentSortType,
    currentFilterState
  );

  return (
    <section className='series'>
      <div
        onClick={e => {
          return !e.target.id ? "" : setActiveButton(+e.target.id);
        }}
        className='series__nav'>
        {filters.map((filter, index) => {
          return (
            <div
              key={index}
              id={index}
              className={classnames("series__btn", {
                active: activeButton === index
              })}
              onClick={e => {
                return filters.includes(e.target.textContent)
                  ? setCurrentFilterState(e.target.textContent.trim())
                  : new Error("this type of filtering is non exist yet");
              }}>
              {filter}
            </div>
          );
        })}

        <div className='series__sort'>
          <p onClick={e => setSortMenu(!isSortMenu)}>
            Sorty By: <span>{currentSortType}</span>
          </p>
          {isSortMenu && (
            <div className='series__sort-by'>
              {sortBy.map((item, index) => {
                return (
                  <p
                    key={index}
                    onClick={e => {
                      setCurrentSortType(e.target.textContent.trim());
                      setSortMenu(false);
                    }}
                    className={classnames("series__sort-by__item", {
                      [`sort-by--active`]: currentSortType === item
                    })}>
                    {item}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <ul className='series__items'>
        {currentList.map(series => {
          return (
            <li key={series.id} className='series__item'>
              <Link
                to={`/series/${series.id}`}
                key={series.id}
                className='series__item'>
                <div className='series__poster'>
                  <img
                    width='300'
                    height='450'
                    src={series.poster_path}
                    alt='poster'
                  />
                </div>
                <p className='series__title'>{series.title}</p>
                <p className='series__genre'>{series.genres[0]}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Series;
