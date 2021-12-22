import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Murojat from "./Components/Murojat";
import Working from "./Components/Working";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
    return (
<<<<<<< HEAD
        <BrowserRouter>
            <Header />
            <Route path="/murojat" component={Murojat} />
            <Route path="/working" component={Working} />
            <Route path="/page" component={Page} />
            <Route path="/hoverpost" component={Hoverpost} />
            <Footer/>
        </BrowserRouter>
=======
    <BrowserRouter>
      
      <Route path='/page' component={Page} />
      <Route path='/hoverpost' component={Hoverpost} />
    </BrowserRouter>
>>>>>>> 50b5900f68e66398522b15f186989afe429fba8a
    );
}

export default App;
