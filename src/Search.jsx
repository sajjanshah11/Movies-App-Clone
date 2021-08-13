let Search = () => {
    return (
        <>
            <p class="text-start mt-4">Showing 18 movies from the database</p>
            <button type="button" class="btn btn-info"> New </button>
            <div class="row">
                <div class="col-8 mt-3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="Username"
                            aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search