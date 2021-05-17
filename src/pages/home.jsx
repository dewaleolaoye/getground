import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Books from '../components/books/books';
import PaginationLink from '../components/pagination/pagination';

const Home = () => {
  const booksData = useSelector((state) => state.reducer);

  const loadingState = booksData.loading;

  return (
    <>
      <div className='home'>
        {loadingState && <CircularProgress color='primary' />}
        {!loadingState &&
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

      <div style={{ display: loadingState ? 'none' : 'block' }}>
        <PaginationLink />
      </div>
    </>
  );
};

export default Home;
