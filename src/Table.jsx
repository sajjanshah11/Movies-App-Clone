import React from 'react';
import './Table.css';
import Pagination from './Pagination';


class Table extends React.Component {

    state = {
        currPages: 1,
        
    }

    onPagination = (element) => {
        this.setState({
            currPages: element
        })
    }

    

    render = () => {
        let currFilters = this.props.selectedFilters;

        let allMovies = this.props.moviesData;

        let filterMoviesArr = allMovies.filter((el) => {
            if (currFilters == "All Genres") {
                return el;
            } else if (el.genre.name == currFilters) {
                return el;
            }
        })

        filterMoviesArr = filterMoviesArr.filter((el) => {
            let movieTitle = el.title;
            movieTitle = movieTitle.toLowerCase()
            let s = this.props.search
            s = s.toLowerCase()
            return movieTitle.includes(s)
        })

        let numberOfMovies = Math.ceil(filterMoviesArr.length / 4);

        let startIndex = (this.state.currPages - 1) * 4;
        let endIndex = Math.min(filterMoviesArr.length, this.state.currPages * 4);

        let moviesAtTime = filterMoviesArr.slice(startIndex, endIndex);

        return (
            <>
                <div class="row">
                    <div class="col-10">
                        <table class="table p-4">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                </tr>
                            </thead>
                            <tbody>

                                {moviesAtTime.map((el) => {
                                    return (
                                        <tr key={el._id}>
                                            <td>{el.title}</td>
                                            <td>{el.genre.name}</td>
                                            <td>{el.numberInStock}</td>
                                            <td>{el.dailyRentalRate}</td>
                                            <td onClick={() => {
                                                this.props.likeButtonToogler(el._id)
                                            }}>
                                                {el.liked ? <span class="material-icons-outlined">
                                                    favorite
                                                </span> : <span class="material-icons-outlined">
                                                    favorite_border
                                                </span>}

                                            </td>
                                            <td><button className="delete-btn" onClick={() => {
                                                this.props.onDeleteBtn(el._id);
                                            }}>Delete</button></td>
                                        </tr>
                                    )

                                })}

                            </tbody>
                        </table>
                        <Pagination
                            numberOfMovies={numberOfMovies}
                            currPages={this.state.currPages}
                            onPagination={this.onPagination}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Table