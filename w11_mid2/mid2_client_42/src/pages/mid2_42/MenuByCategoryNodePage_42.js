import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrapper/mid2_xx/Menu_xx';

let api_url = `http://localhost:5000/api/mid2_42/menu_42`;

const MenuByCategoryNodePage_42 = () => {
  const [name, setName] = useState('陳思語');
  const [id, setId] = useState('211410542');
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');

  const fetchMenuDataFromNode = async()=>{
    try{
      const response = await fetch(api_url+`/${category}`);
      const data = await response.json();
      setData(data);
      console.log('menu data',data);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    fetchMenuDataFromNode();
  },[category]);

  const changeMenuFilter = (category)=>{
    setCategory(category);
  }

  return (
    <Wrapper>
      <section className='menu'>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button type="button" className="filter-btn" data-id="all" 
        onClick={()=>changeMenuFilter('')}>all</button>
        <button type="button" className="filter-btn" data-id="breakfast" 
        onClick={()=>changeMenuFilter('breakfast')}>breakfast</button>
        <button type="button" className="filter-btn" data-id="lunch" 
        onClick={()=>changeMenuFilter('lunch')}>lunch</button>
        <button type="button" className="filter-btn" data-id="shakes" 
        onClick={()=>changeMenuFilter('shakes')}>shakes</button>
        <button type="button" className="filter-btn" data-id="dinner" 
        onClick={()=>changeMenuFilter('dinner')}>dinner</button>
      </div>
      <div className="section-center">
        {data.map((item)=>{
          const {id,title,img,category,price,descrip} = item;
          return(
            <article className="menu-item">
            <img
              src={img}
              alt="buttermilk"
              pancakes=""
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{descrip}</p>
            </div>
          </article>
          );
        })}

      </div>
      </section>
    </Wrapper>
  );
};

export default MenuByCategoryNodePage_42;
