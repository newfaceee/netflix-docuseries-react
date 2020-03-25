import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Trending from "./components/Trending";
import Series from "./components/Series";
import db from "./assets/DB.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SeriesItem from "./components/Series/SeriesItem";

// наверное надо добавить в пункт log in button с classname user--login, и дать еще ему состояние user--logout
const App = () => {
  return (
    <Router>
      <div className='container'>
      <Header/>
        <Route exact path='/'>
          <Trending database={db} />
          <Series database={db} />
        </Route>
        <Route exact path='/series/:id'>
          <SeriesItem database={db}/>
        </Route>
      </div>
    </Router>
  );
};

export default App;
