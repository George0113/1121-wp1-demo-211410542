import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomePage_42 from "./pages/HomePage_42.js";
import BlogStaticPage_42 from "./pages/BlogStaticPage_42.js";
import BlogNodeServer_42 from "./pages/BlogNodeServer_42.js";
import BlogSupabase_42 from "./pages/BlogSupabase_42.js";
import BlogLocalJson_42 from "./pages/BlogLocalJson_42.js";

const App_42 = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element=
        {<HomePage_42/>}/> 
        <Route path='/static_42' element=
        {<BlogStaticPage_42/>}/>
        <Route path='/node_42' element=
        {<BlogNodeServer_42/>}/>
        <Route path='/supa_42' element=
        {<BlogSupabase_42/>}/>
        <Route path='/local_42' element=
        {<BlogLocalJson_42/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App_42;
