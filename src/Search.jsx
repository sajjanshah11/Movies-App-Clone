let Search = (props) => {
    return (
        <>
            <p class="text-start mt-4">Showing {props.total} movies from the database</p>
            <button type="button" class="btn btn-info"> New </button>
            <div class="row">
                <div class="col-8 mt-3">
                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Search..." 
                            aria-label="Username"
                            aria-describedby="basic-addon1" 
                            onChange = {(e)=>{
                                props.onChangeSearch(e.currentTarget.value)
                            }}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search