import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Inicial from './Pages/Inicial'

import './App.css'

function App(){

  
  return(
    <BrowserRouter>
        
        <Route path="/singin"  component={Inicial} />
      
      <Route path="/home" exact component={Home} />


    </BrowserRouter>
  );
}
export default App;
