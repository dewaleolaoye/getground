import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { loadBooks } from './app/reducer/bookSlice';
import store from './app/store';

store.dispatch(loadBooks());
test('renders App without breaking', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
