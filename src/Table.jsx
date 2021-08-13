import React from 'react';

class Table extends React.Component {

    render = () => {
        let currFilters = this.props.selectedFilters;

        let allMovies = this.props.moviesData;
        
        let filterMoviesArr = allMovies.filter((el)=>{
            if(currFilters == "All Genres"){
                return el;
            } else if(el.genre.name == currFilters){
                return el;
            }
        })

        console.log(allMovies)
        
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

                                {filterMoviesArr.map((el) => {
                                    return (
                                        <tr key = {el._id}>
                                            <td>{el.title}</td>
                                            <td>{el.genre.name}</td>
                                            <td>{el.numberInStock}</td>
                                            <td>{el.dailyRentalRate}</td>
                                            <td>Like</td>
                                            <td><button>Delete</button></td>
                                        </tr>
                                    )

                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Table