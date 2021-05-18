import React from 'react';
import { MemoryRouter, Route, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import store from '../../app/store';
import { loadBooks } from '../../app/reducer/bookSlice';

export default function PaginationLink(props) {
  const history = useHistory();

  const handleClick = (page) => {
    const itemsPerPage = 20;
    store.dispatch(loadBooks(page, itemsPerPage));

    history.push(`/books?page=${page}&itemsPerPage=${itemsPerPage}`);
  };

  return (
    <>
      <MemoryRouter initialEntries={['/books']} initialIndex={1}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get('page') || '1', 10);
            // console.log(page, 'parseInt');

            return (
              <Pagination
                page={page}
                count={10}
                onClick={() => handleClick(page)}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/books${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </>
  );
}
