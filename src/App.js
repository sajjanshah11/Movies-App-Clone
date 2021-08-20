import React from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import Search from './Search';
import Table from './Table';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Rentals from './Rentals';
import Customers from './Customers';

class App extends React.Component {

  state = {
    movies: [],
    genre: [],
    selectedFilters: "All Genres",
    search: ""
  }

  onChangeSearch = (search_element) => {
    this.setState({
      search: search_element
    })
  }

  filterChangeHandler = (filter) => {
    this.setState({ selectedFilters: filter })
  }

  likeButtonToogler = (id) => {
    let allMovies = this.state.movies;
    let index = allMovies.findIndex((el) => {
      return el._id == id
    })
    console.log(index)
    let allMoviesCopy = allMovies.map((el) => {
      return el;
    })

    if (allMoviesCopy[index].liked) {
      allMoviesCopy[index].liked = false;
    } else {
      allMoviesCopy[index].liked = true
    }

    this.setState({
      movies: allMoviesCopy
    })

  }

  deleteButtonHandler = (id) => {

    let currFilterArr = this.state.movies.filter((el) => {
      return el._id != id;
    })

    this.setState({
      movies: currFilterArr
    })
  }

  componentDidMount() {

    //i will get data here

    let f = async () => {
      let moviesResponse = await fetch("/movies");
      let genreResponse = await fetch("/genre");
      let moviesJson = await moviesResponse.json();
      let genreJson = await genreResponse.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson
      })
    }

    f();

  }

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>

            <Route exact path="/login"> <Login /> </Route>
            <Route exact path="/rental">
              <Rentals />
            </Route>
            <Route exact path="/customer">
              <Customers />
            </Route>
            <Route path="/">

              <div className="row">
                <Filter genreData={this.state.genre} OnfilterChangeHandler={this.filterChangeHandler}
                  selectedFilters={this.state.selectedFilters}
                />
                <div className="col-8">
                  <Search total={this.state.movies.length} onChangeSearch={this.onChangeSearch} />
                  <Table
                    moviesData={this.state.movies}
                    selectedFilters={this.state.selectedFilters}
                    likeButtonToogler={this.likeButtonToogler}
                    onDeleteBtn={this.deleteButtonHandler}
                    search={this.state.search}
                    onChangeSearch={this.onChangeSearch}
                  />
                </div>
              </div>
            </Route>
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;
