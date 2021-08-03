import React from 'react';


class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <button className="pagination__btn"
          onClick={this.props.onPagination}>
        load more: </button>
  </div>);
  }
}

export default Pagination;