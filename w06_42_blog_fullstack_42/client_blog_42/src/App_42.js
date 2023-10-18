import { BrowserRouter,Routes,Route } from "react-router-dom";

import BlogStaticPage_42 from "./pages/BlogStaticPage_42.js";
import BlogNodeServer_42 from "./pages/BlogNodeServer_42.js";

const App_42 = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/static_42' element=
        {<BlogStaticPage_42/>}/>
        <Route path='/node_42' element=
        {<BlogNodeServer_42/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App_42;
