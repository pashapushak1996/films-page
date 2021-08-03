import Header from "./components/Header";
import Home from "./components/Home";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={ `/` } component={ Home }/>
            </Switch>
        </div>
    );
}

export default App;
