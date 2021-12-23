
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Murojat from "./Components/Murojat";
import Working from "./Components/Working";
import Hoverpost from "./Components/Hoverpost";
import Page from './Components/Page';
import Tavsiya from "./Components/Tavsiya"
import Clent from "./Components/Clent";
import Side from "./Components/Side";


function App() {
    return (
    <BrowserRouter>
      
      <Route path='/murojat' component={Murojat} />
      <Route path='/working' component={Working} />
      <Route path='/hoverpost' component={Hoverpost} />
      <Route path='/page' component={Page} />
      <Route path='/tavsiya' component={Tavsiya} />
      <Route path='/clent' component={Clent} />
      <Route path='/side' component={Side} />


    </BrowserRouter>
    );

}

export default App;
