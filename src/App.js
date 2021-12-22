
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Murojat from "./Components/Murojat";
import Working from "./Components/Working";
import Hoverpost from "./Components/Hoverpost";
import Page from './Components/Page';

function App() {
    return (
    <BrowserRouter>
      
      <Route path='/murojat' component={Murojat} />
      <Route path='/working' component={Working} />
      <Route path='/page' component={Page} />
    </BrowserRouter>
    );

}

export default App;
