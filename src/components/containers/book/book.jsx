import React from 'react';
import './book.css';


class BookItem extends React.Component {

  render() {
    const {
     key, title,image,author,categor,language,description
    } = this.props;
    return (
      <div className="book" id={key} >
        <h2 className='book__title'>{title}</h2>
        <img src={image}
          alt='cover did not load'
          width='30px'
          height='30px'
          className='book__img' />
        <ul className='book__list'>
          <li className='book__item'> {author}</li>
          <li className='book__item'>{categor}</li>
        </ul>
          <span className='book__text'>{language}</span>
          <span className='book__text'>{description}</span>
      </div>
    );
  }
}

export default BookItem;

