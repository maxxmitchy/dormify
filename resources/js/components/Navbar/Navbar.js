import React, { useEffect } from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import { useDispatch, useSelector } from "react-redux";
import './Navbar.css'

const Navbar = () => {

    return (
        <React.Fragment>
            <div className="topnav">
                <TopNav />
                <br/>
                <br/>
            </div>
            <div className="bottomnav">
                <BottomNav />
            </div>
        </React.Fragment>
    );
};

export default Navbar;
