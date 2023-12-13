import { useState,useEffect } from "react";
import Alert_42 from "./components/Alert_42";
import List_42 from "./components/List_42";

const getLocalStorage =() => {
  let list = localStorage.getItem('list');
  if (list){
    list = JSON.parse(localStorage.getItem(list));
  }else{
    list = []; 
  }
  return list;
}

const setLocalStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App_xx = () => {
  const[name,setName] = useState('');
  const[list,setList] = useState(defaultList);
  const[isEditing,setIsEditing] = useState(false);
  const[editID,setEditID] = useState(null);
  const[alert,setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list));
  },[list]);

  const shownAlert = (show = false,msg='',type='') => {
    setAlert({show,msg,type});
  }



  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      shownAlert(true, 'Please enter value','danger');
    }else if(name && isEditing){
      const newItems = list.map((item)=>{
        if(item.id === editID){
          return {...item, title: name}
        }
        return item;
      });
      setList(newItems);
      setLocalStorage(newItems);
      setName('');
      setIsEditing(false);
      shownAlert(true, 'value changed','success');
    }
    else{
      shownAlert(true, 'value added','success');
      const newItem = {
        id:new Date().getTime().toString(),
        title: name,
      };
      const newItems = [...list, newItem]
      setList(newItems);
      setLocalStorage(newItems);
      setName('');
    }
  }

  const removeItem = (id) => {
    const newItems = list.filter((item)=>item.id !=id);
    setList(newItems);
    setLocalStorage(newItems);
    shownAlert(true,'item remove','danger');
  };

  const editItem = (id) => {
    const specificItem = list.find((item)=>item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const clearList = () => {
    shownAlert(true,'empty list','danger');
    setList([]);
    setLocalStorage([]);
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert_42 {...alert} removeAlert={shownAlert}/>}

          <h3>Grocery Bud -- 陳思語</h3>
          <div className="form-control">
            <input type="text" className='grocery' value={name} placeholder='e.g. eggs' 
            onChange={(e)=>setName(e.target.value)}/>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List_42 items={list} removeItem={removeItem} 
            editItem={editItem}/>
            <button className="clear-btn" onClick={clearList}>
              clear item
              </button>
          </div>

          
        )}
      </section>
    </>
  );
};
export default App_xx;
