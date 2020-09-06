import React, { useEffect } from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import { verified } from "../../../Redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();

    let isAuthenticated = useSelector(({ auth }) => auth.isVerified);

    useEffect(() => {
        if (isAuthenticated === "" && localStorage.getItem('token')) {
            dispatch(verified());
        }
    }, []);
    return (
        <React.Fragment>
            <div className="topnav">
                <TopNav />
            </div>
            <div className="bottomnav">
                <BottomNav />
            </div>
        </React.Fragment>
    );
};

export default Navbar;
