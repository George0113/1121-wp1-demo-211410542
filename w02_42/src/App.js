import './App.css';

import Booklist_42 from './components/Booklist_42';
import Book_42 from './components/Book_42';

// functional component
const App = () => {
  return (
    <Booklist_42 />
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

const ThreeBooks = () => {
  return (
    <section className='booklist'>
      <Book_42
        key='1'
        img='https://m.media-amazon.com/images/I/814mI0-rkxL._SY342_.jpg'
        title='Elon Musk'
        author='Walter Isaacson'
      />
      <Book_42
        key='2'
        img='https://m.media-amazon.com/images/I/71XWecmzCZL._SL1500_.jpg'
        title='FAR/AIM 2024: Federal Aviation Administration/Aeronautical Information Manual (ASA FAR/AIM Series)'
        author=' Federal Aviation Administration (FAA)/Aviation Supplies & Academics (ASA)'
      />
      <Book_42
        key='3'
        img='https://m.media-amazon.com/images/I/91HJ+XrsRVL._SL1500_.jpg'
        title='Harley-Davidson 2024: 16-Month 17x12 Wall Calendar - September 2023 through December 2024'
        author='David Blattel'
      />
      <Book_42
        key='4'
        img='https://m.media-amazon.com/images/I/81lNLEp6mdL._SL1500_.jpg'
        title='NBA Legends: Discover Basketballs All-time Greats'
        author='Dan Peel'
      />
      <Book_42
        key='5'
        img='https://m.media-amazon.com/images/I/71wk48mKVcL._SL1020_.jpg'
        title='The Genius Kids Guide to Pro Basketball'
        author='Brendan Flynn'
      />
      <Book_42
        key='6'
        img='https://m.media-amazon.com/images/I/81PxsnSH05L._SL1500_.jpg'
        title='Birnbaums 2024 Walt Disney World: The Official Vacation Guide (Birnbaum Guides)'
        author='Birnbaum Guides'
      />
    </section>
  );
};

export default App;
