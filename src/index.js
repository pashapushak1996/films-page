import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store";

render(
    <Provider store={ store }>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));