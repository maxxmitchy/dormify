import React from "react";
import IsAuth from "./BottomNav/IsAuth";
import NotAuth from "./BottomNav/NotAuth";
import { useSelector } from "react-redux";

const BottomNav = () => {
    const token = localStorage.getItem("token");

    return <React.Fragment>{token ? <IsAuth /> : <NotAuth />}</React.Fragment>;
};

export default BottomNav;
