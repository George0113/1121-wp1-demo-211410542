import { useState } from 'react';
import './App.css';
import menu_data from './data';
import Menu_42 from './components/Menu_42';
import Category_42 from './components/Category_42';


// functional component
const App = () => {
  const [menu,setMenu] = useState(menu_data);
  console.log('menu',menu);
  return (
    <section className="menu">
    <div className="title">
      <h2>our menu - 211410542</h2>
      <link rel="stylesheet" href="./style_42.css"/>
      <div className="underline"></div>
    </div>

    <Category_42 />
    <Menu_42 menu={menu}/>
  </section>
  );
};

export default App;
