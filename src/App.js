import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Murojat from "./Components/Murojat";
import Working from "./Components/Working";
import Header from "./Components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/murojat" component={Murojat} />
            <Route path="/working" component={Working} />
        </BrowserRouter>
    );
}

export default App;
