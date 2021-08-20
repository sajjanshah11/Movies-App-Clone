
let Pagination = (props) => {
    

    let arr = [];

    for(let i = 1; i <= props.numberOfMovies; i++){

        arr.push(i);
        
    }

    return (
        <> 
            <nav aria-label="...">
                <ul class="pagination">

                    {arr.map((el)=> {
                        return (
                            <li onClick = {()=>{
                                props.onPagination(el)
                            }} class = {`page-item ${props.currPages == el ? "active" : ""}`}>
                                <a class="page-link" href="#">
                                    {el}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Pagination