import React from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import Search from './Search';
import Table from './Table';
import Pagination from './Pagination';

class App extends React.Component {

  state = {
    movies: [],
    genre: [],
    selectedFilters: "All Genres"
  }

  filterChangeHandler = (filter) => {
    this.setState({ selectedFilters: filter })
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

      <div>
        <Navbar />
        <div className="row">
          <Filter genreData={this.state.genre} OnfilterChangeHandler = {this.filterChangeHandler}
            selectedFilters={this.state.selectedFilters}
          />
          <div className="col-8">
            <Search />
            <Table moviesData = {this.state.movies} selectedFilters = {this.state.selectedFilters}/>
            <Pagination />
          </div>
        </div>
      </div>

    )
  }
}

export default App;
