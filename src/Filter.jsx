import React from 'react';

let Filter = (props) => {
    return (
        <div class="col-4">
            <ul class="list-group m-4">
                <li onClick={() => {
                   props.OnfilterChangeHandler("All Genres")
                }} class={`list-group-item ${props.selectedFilters === "All Genres" ? "active" : ""}`} aria-current="true">All Genres</li>
                {props.genreData.map((ele) => {
                    return (
                        <li onClick={() => {
                            props.OnfilterChangeHandler(ele.name)
                        }} class={`list-group-item ${props.selectedFilters === ele.name ? "active" : ""}`} aria-current="true" key={ele._id}>{ele.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}




export default Filter