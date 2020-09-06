import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiArrowRight, FiBell } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../Redux/features/auth/authSlice";
import { activeStyle } from "../../Common/Constants";

const TopNav = () => {
    const [toggleProfile, setToggleProfile] = useState(false);

    const isAuth = useSelector(({ auth }) => auth);

    const token =
        localStorage.getItem("token") &&
        localStorage.getItem("token").length === 244;

    const dispatch = useDispatch();

    const handleProfile = () => {
        setToggleProfile(!toggleProfile);
    };

    let noAuth = (
        <React.Fragment>
            <li>
                <NavLink to="/login" className="btn py-0 btn-outline-light">
                    Sign In <FiArrowRight />
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className="btn py-0 btn-outline-light">
                    Sign Up
                </NavLink>
            </li>
        </React.Fragment>
    );

    let Auth = (
        <React.Fragment>
            <li>
                <NavLink to="/dashboard" activeStyle={activeStyle}>
                    Dashboard
                </NavLink>
            </li>
            <li onClick={() => setToggleProfile(!toggleProfile)}>
                <a style={{ cursor: "pointer" }}>Profile</a>
            </li>
        </React.Fragment>
    );

    return (
        <header className="toolbar">
            <nav className="toolbar_navigation container">
                <div className="toolbar_logo">LOGO</div>
                <div className="spacer"></div>
                <div className="toolbar_nav_items">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeStyle={activeStyle}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/explore" activeStyle={activeStyle}>
                                Explore
                            </NavLink>
                        </li>
                        {isAuth.token || token ? Auth : noAuth}
                    </ul>
                </div>
            </nav>
            {toggleProfile ? (
                <React.Fragment>
                    <div className="backdrop" onClick={handleProfile}></div>
                    <div className="profile shadow bg-white p-2">
                        <ul>
                            <li>
                                <NavLink
                                    to="/yourtrips"
                                    exact
                                    activeStyle={activeStyle}
                                    onClick={handleProfile}
                                >
                                    Trips
                                </NavLink>
                            </li>
                            {isAuth.role === "Agent" ? (
                                <li>
                                    <NavLink
                                        to="/upload"
                                        exact
                                        activeStyle={activeStyle}
                                        onClick={handleProfile}
                                    >
                                        Upload Property
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        to="/asdfg"
                                        activeStyle={activeStyle}
                                        onClick={handleProfile}
                                    >
                                        Normal Link
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to="/explore"
                                    activeStyle={activeStyle}
                                    onClick={handleProfile}
                                >
                                    Explore
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/messages"
                                    activeStyle={activeStyle}
                                    onClick={handleProfile}
                                >
                                    Notifications &nbsp;&nbsp;
                                    <FiBell />
                                </NavLink>
                            </li>
                            <hr />
                            {isAuth.role === "Agent" ? (
                                <li>
                                    <NavLink
                                        to={"/userprofile/" + isAuth.user.id}
                                        activeStyle={activeStyle}
                                        onClick={handleProfile}
                                    >
                                        Manage Listing
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        to="/asdfg"
                                        activeStyle={activeStyle}
                                        onClick={handleProfile}
                                    >
                                        Normal Link
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to="/messages"
                                    activeStyle={activeStyle}
                                    onClick={handleProfile}
                                >
                                    Recent Listings{" "}
                                </NavLink>
                            </li>
                            <hr />
                            <li>
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dispatch(userLogout())}
                                >
                                    Logout <IoMdLogOut />
                                </a>
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
            ) : (
                ""
            )}
        </header>
    );
};

export default TopNav;
