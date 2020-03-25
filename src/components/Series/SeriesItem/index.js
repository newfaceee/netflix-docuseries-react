import React from "react";
import { useHistory } from "react-router-dom";
import "./SeriesItem.scss";
const SeriesItem = ({ database }) => {
  let history = useHistory();
  const id = history.location.pathname.split("/series/")[1];
  const currentSeriesItem = database.series.find(item => item.id == id);

  return (
    <section className="details"  style={{
        backgroundImage: `linear-gradient(to left bottom, rgba(67, 59, 84, 0.9), rgba(70, 50, 80, 0.9)), url('${currentSeriesItem.backdrop_path}')`
      }}>
       
            <img width="315" height="450" src={currentSeriesItem.poster_path} alt="details poster"/>
        <div className="details__right">
            <p className="details__title" >
                {currentSeriesItem.title} <span>({currentSeriesItem.release_date.split('-')[2]})</span>
            </p>
            <span className="details__overview">
                Overview
            </span>
            <p className="details__overview">
                {currentSeriesItem.overview}
            </p>
        </div>

    </section>
  );
};

export default SeriesItem;
/* Rectangle 1 */


