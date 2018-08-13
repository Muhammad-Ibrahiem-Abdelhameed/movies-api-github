import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import MoviesTable from "./components/MoviesTable";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <MoviesTable/>
                </div>
            </Provider>
        );
    }
}

export default App;
