function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For a category or keyword"
                    id="search"
                />
                <br />
                <button
                    onClick={props.handleFormSubmit}
                    calssName="btn btn-primary"
                    type="submit"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;