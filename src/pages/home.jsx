import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../components/books/books';

const Home = () => {
  const booksData = useSelector((state) => state.reducer);
  console.log(booksData, 'books data');

  return (
    <div className='home'>
      {booksData.loading && <h1>Loading...</h1>}
      {!booksData.loading &&
        booksData.bookList.books.map(
          ({
            id,
            book_author,
            book_title,
            book_publication_year,
            book_publication_country,
            book_publication_city,
            book_pages,
          }) => (
            <Books
              author={book_author}
              country={book_publication_country}
              title={book_title}
              year={book_publication_year}
              city={book_publication_city}
              pages={book_pages}
              key={id}
            />
          )
        )}
    </div>
  );
};

export default Home;
