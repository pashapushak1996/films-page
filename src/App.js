import Header from "./components/Header";
import Home from "./components/Home";
import {Redirect, Route, useHistory} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";
import {useSelector} from "react-redux";
import {selectUser} from "./features/user/userSlice";

function App() {

    const user = useSelector(selectUser);

    return (
        <div>
            <Header/>
            { !user.name ? <Redirect to={ `/login` }/> : <Redirect to={ `/` }/> }
            <Route exact path={ `/` } component={ Home }/>
            <Route path={ `/movie/:id` } component={ MovieDetails }/>
            <Route path={ `/login` } component={ Login }/>
        </div>
    );
}

export default App;
