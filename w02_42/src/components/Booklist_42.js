import { books } from './books_data';
import Book_42 from './Book_42';

const Booklist_42 = () => {
  console.log('book_data', books);
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { id, img, title, author } = book;
        return <Book_42 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist_42;
