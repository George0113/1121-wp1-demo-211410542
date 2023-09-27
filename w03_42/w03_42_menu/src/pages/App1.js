import './App.css';



// functional component
const App = () => {
  return (
    <section className="menu">
    <div className="title">
      <h2>our menu - 211410542</h2>
      <link rel="stylesheet" href="./style_42.css"/>
      <div className="underline"></div>
    </div>


    <div className="btn-container"><button type="button" className="filter-btn" data-id="all">all</button><button type="button" className="filter-btn" data-id="breakfast">breakfast</button><button type="button" className="filter-btn" data-id="lunch">lunch</button><button type="button" className="filter-btn" data-id="dinner">dinner</button><button type="button" className="filter-btn" data-id="dessert">dessert</button><button type="button" className="filter-btn" data-id="shakes">shakes</button></div>


    <div className="section-center">
     <article className="menu-item">
     <img src="./theme-menu/images/my-1.jpg" alt="eggs" className="photo"/>
     <div className="item-info">
       <header>
         <h4>eggs</h4>
         <h4 className="price">12.59</h4>
       </header>
       <p className="item-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
       </p>
     </div>
   </article>
     
     <article className="menu-item">
     <img src="./theme-menu/images/my-2.jpg" alt="big" salad="" className="photo"/>
     <div className="item-info">
       <header>
         <h4>big salad </h4>
         <h4 className="price">12.59</h4>
       </header>
       <p className="item-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
       </p>
     </div>
   </article>
     
     <article className="menu-item">
     <img src="./theme-menu/images/my-3.jpg" alt="fried" dish="" className="photo"/>
     <div className="item-info">
       <header>
         <h4>fried dish</h4>
         <h4 className="price">12.59</h4>
       </header>
       <p className="item-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
       </p>
     </div>
   </article>
     
     <article className="menu-item">
     <img src="./theme-menu/images/item-1.jpeg" alt="buttermilk" pancakes="" className="photo"/>
     <div className="item-info">
       <header>
         <h4>buttermilk pancakes</h4>
         <h4 className="price">15.59</h4>
       </header>
       <p className="item-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
       </p>
     </div>
   </article>
     
     <article className="menu-item">
     <img src="./theme-menu/images/item-2.jpeg" alt="dinner" double="" className="photo"/>
     <div className="item-info">
       <header>
         <h4>dinner double</h4>
         <h4 className="price">13.99</h4>
       </header>
       <p className="item-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
       </p>
     </div>
   </article>
     
     <article className="menu-item">
     <img src="./theme-menu/images/item-3.jpeg" alt="godzilla" milkshake="" className="photo"/>
     <div className="item-info">
       <header>
         <h4>godzilla milkshake</h4>
         <h4 className="price">13.99</h4>
       </header>
       <p className="item-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. Enim voluptas, expedita architecto, cupiditate molestias quisquam error quam blanditiis tempore quo dicta. Ipsa.
       </p>
     </div>
   </article>
     </div>
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
