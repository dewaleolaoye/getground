import React from 'react';

const Books = ({ author, title, year, country, city, pages }) => {
  return (
    <div className='book'>
      <p className='book__author'>{author.map((authorName) => authorName)}</p>
      <p className='book__title'>{title}</p>
      <p className='book__pyear'>{year}</p>
      <p className='book__pcountry'>{country}</p>
      <p className='book__pcity'>{city}</p>
      <p className='book__pages'>{pages}</p>
    </div>
  );
};

export default Books;
