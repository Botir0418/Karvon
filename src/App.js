import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Murojat from "./Components/Murojat";
import Working from "./Components/Working";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hoverpost from "./Components/Hoverpost";
import Page from "./Components/Page";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/murojat" component={Murojat} />
            <Route path="/working" component={Working} />
            <Route path="/page" component={Page} />
            <Route path="/hoverpost" component={Hoverpost} />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
