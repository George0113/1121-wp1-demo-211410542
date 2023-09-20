import './App.css';

import Book_42 from './components/Book_42';

// functional component
const App = () => {
  return (
    <section className='booklist'>
      <Book_xx
        key='1'
        img='https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg'
        title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Arthur C. Brook'
      />
      <Book_xx
        key='2'
        img='https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg'
        title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Arthur C. Brook'
      />
      <Book_xx
        key='3'
        img='https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg'
        title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Arthur C. Brook'
      />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg'
        alt=''
      />
      <h1>Build the Life You Want: The Art and Science of Getting Happier</h1>
      <h4> Arthur C. Brook</h4>
    </article>
  );
};

export default App;
