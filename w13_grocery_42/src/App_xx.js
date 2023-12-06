import { useState } from "react";
import Alert_42 from "./components/Alert_42";
import List_42 from "./components/List_42";

const App_xx = () => {
  const[name,setName] = useState('');
  const[list,setList] = useState([]);
  const[alert,setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const shownAlert = (show = false,msg='',type='') => {
    setAlert({show,msg,type});
  }

  const clearList = () => {
    shownAlert(true,'empty list','danger');
    setList([]);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      shownAlert(true, 'Please enter value','danger');
    }else{
      shownAlert(true, 'value changed','success');
      const newItem = {
        id:new Date().getTime().toString(),
        title: name,
      };
      setList([...list,newItem]);
      setName('');
    }
  }

  const removeItem = () => {};

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
            <List_42 items={list} removeItem={removeItem}/>
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
