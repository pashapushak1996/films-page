import Header from "./components/Header";
import Home from "./components/Home";
import {Route, Switch} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={ `/` } component={ Home }/>
                <Route path={ `/details` } component={ MovieDetails }/>
                <Route path={ `/login` } component={ Login }/>
            </Switch>
        </div>
    );
}

export default App;
