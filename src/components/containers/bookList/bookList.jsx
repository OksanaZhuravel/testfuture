/* eslint-disable no-undef */
import React from 'react';
import './bookList.css';
import BookItem from '../book/book';

class BookList extends React.Component {
  checkImageLinks(item) {
    let imageLinks = "";
    if (item.volumeInfo.imageLinks.thumbnail === undefined) {
      imageLinks = "";
    } else {
      imageLinks = item.volumeInfo.imageLinks.thumbnail;
    }
    return imageLinks;
  }
  checkCategories(item) {
    let categor = "";
    if (item.volumeInfo.categories === undefined) {
      categor = "";
    } else {
      categor = "Categories: " + item.volumeInfo.categories[0];
    }
    return categor;
  }

  checkAuthor(item) {
    let author = "";
    if (item.volumeInfo.authors === undefined) {
      author = "";
    } else {
      author = "Author: " + item.volumeInfo.authors[0];
    }
    return author;
  }
  checkLanguage(item) {
    let language = "";
    if (item.volumeInfo.language === "en") {
      language = "Language: English";
    } else if (item.volumeInfo.language === "ru"){
      language = "Language: Russian";
    } else {
      language = "Language unknown";
    }
    return language;
  }

  checkDescription(item) {
    const description = item.volumeInfo.description;
    let newDescription = "";
    if (description !== undefined) {
      newDescription = description.substring(0, 100) + "...";
    } else {
      newDescription = "No description currently available for this book.";
    }
    return newDescription;
  }

  render() {
    const { results } = this.props;
    const resultsList = results.map((item, key) => (
      <BookItem
        key={key}
        image={this.checkImageLinks(item)}
        title={item.volumeInfo.title}
        author={this.checkAuthor(item)}
        categor={this.checkCategories(item)}
        language={this.checkLanguage(item)}
        description={this.checkDescription(item)}
      />
    ));

    return <div className="list">{resultsList}</div>;
  }
}

export default BookList;