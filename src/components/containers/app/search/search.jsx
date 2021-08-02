import React from 'react';
import "./search.css";
import BookList from '../../bookList/bookList';
import Number from '../../number/number';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      startIndex: 0,
      results: [],
      counter: 0,
    };
  }
  searchTermChanged = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  // searchTermChanged(searchTerm) {
  //   this.setState({
  //     searchTerm,
  //   });
  // }
  increacePagination = (e) => {
    this.setState ({
      startIndex: this.state.startIndex + 30,
      // results: this.state.results,
    });
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const baseURL = "https://www.googleapis.com/books/v1/volumes";
    const start = this.state.startIndex;
    const params = {
      key: "AIzaSyDUKowM02Lgu_N3GsnH7cpTOnE2PzGk6Pc",
      q: this.state.searchTerm,
      maxResults: 10,
    };
    const queryString = "?" + this.formatQueryParams(params);
    const url = baseURL + queryString +"&startIndex"+ start;
    console.log(url);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.items,
          counter: data.totalItems,
        });
        console.log(data);
        console.log(data.items);
        console.log(data.totalItems);
        return data;
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }
  render() {
    const counter = <Number count={this.state.counter} />;
    const results = <BookList results={this.state.results} />;
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <>
      <div className="search">
          <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='search__user'></label>
          <input
            id="search__user"
            type="text"
            name='search'
            className='search__field'
              placeholder="SEARCH BOOK..."
              onChange={this.searchTermChanged}
            // onChange={(e) => this.searchTermChanged(e.target.value)}
            value={this.state.searchTerm}
            required />
          <button type="submit"
            value='Send'
            className='search__btn'></button>
          <div className='search__wrap'>
              <label htmlFor='print' className='search__print'>Print Type:</label>
              <select name='print' id='print'>
                <option value='All'>All</option>
                <option value='Art'>Art</option>
                <option value='Biography'>Biography</option>
                <option value='Computers'>Computers</option>
                <option value='History'>History</option>
                <option value='Medical'>Medical</option>
                <option value='Poetry'>Poetry</option>
              </select>
              <label htmlFor='book'className='search__print'>Book Type:</label>
              <select
                name='book'
                id='book'>
                <option selected value='Relevance '>Relevance </option>
                <option value='Newest'>Newest</option>
              </select>
          </div>
            <div className="pagination">
            <button className="pagination__btn"
              value= {this.state.searchTerm}
              onClick={(e) => { this.increacePagination(e) }}>
                load more: </button>
          </div>
          </form>
      </div>
        {counter}
        {error}
        {results}
      </>
    );
  }
}

export default Search;



