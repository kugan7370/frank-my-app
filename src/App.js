import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import Home from "./page/Home.js";
import Edit from "./page/Edit";
import Delete from "./page/Delete";
import View from "./page/View";


  function App() {
  return (
   <div>
    <Router>
        <Routes>
          < Route path="/" exact element={<Home />} />   
          < Route path="/edit/:id" exact element={<Edit/>} />  
          < Route path="/delete/:id" exact element={<Delete/>} />  
          < Route path="/view/:id" exact element={<View/>} />   
 


        </Routes>
      </Router>
   </div>
   
  );
}

export default App;


