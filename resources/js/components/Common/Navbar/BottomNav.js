import React from "react";
import IsAuth from "./BottomNav/IsAuth";
import NotAuth from "./BottomNav/NotAuth";
import { useSelector } from "react-redux";

const BottomNav = () => {

    const isAuth = useSelector(({ auth }) => auth.token);

    const token =
        localStorage.getItem("token") &&
        localStorage.getItem("token").length === 244;

    return (
        <React.Fragment>
            {isAuth || token ? <IsAuth /> : <NotAuth />}
        </React.Fragment>
    );
};

export default BottomNav;
