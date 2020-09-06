import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import ConfigStore from "./Redux/ConfigStore";
import HomePage from "./components/HomePage/HomePage";
import Main from './Main'

function Index() {

    return (
        <React.Fragment>
            <HomePage />
        </React.Fragment>
    );
}

export default Index;

const store = ConfigStore();

if (document.getElementById("index")) {
    ReactDOM.render(
        <ReduxProvider store={store}>
            <Router>
                <Main />
            </Router>
        </ReduxProvider>,
        document.getElementById("index")
    );
}
