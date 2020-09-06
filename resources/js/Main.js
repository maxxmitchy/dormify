import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router";
import Index from "./Index";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import VerifyEmail from "./components/Auth/VerifyEmail";
import ProtectedRoutes from "./components/Auth/protectedRoutes";
import Dashboard from "./components/Dashboard/User/Dashboard";

const Main = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/register" exact component={Register}></Route>
                    <Route
                        path="/verifyEmail"
                        exact
                        component={VerifyEmail}
                    ></Route>
                    <ProtectedRoutes
                        path="/dashboard"
                        exact
                        component={Dashboard}
                    ></ProtectedRoutes>
                </Switch>
            </AnimatePresence>
        </>
    );
};

export default Main;
