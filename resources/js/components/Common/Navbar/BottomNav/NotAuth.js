import React from "react";
import { MdExplore } from "react-icons/md";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { activeStyle } from "../../Constants";

const NotAuth = () => {
    return (
        <nav className="mobile-bottom-nav shadow">
            <div className="mobile-bottom-nav__item">
                <NavLink
                    exact
                    to="/"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="mobile-bottom-nav__item-content">
                        <AiFillHome className="h4 mb-0" />
                        Home
                    </div>
                </NavLink>
            </div>
            <div className="mobile-bottom-nav__item">
                <NavLink
                    to="/explore"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="mobile-bottom-nav__item-content">
                        <MdExplore className="h4 mb-0" />
                        Explore
                    </div>
                </NavLink>
            </div>
            <div className="mobile-bottom-nav__item mobile-bottom-nav__item--active">
                <NavLink
                    to="/wishlist"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="mobile-bottom-nav__item-content">
                        <GiSelfLove className="h4 mb-0" />
                        Loved
                    </div>
                </NavLink>
            </div>

            <div className="mobile-bottom-nav__item">
                <NavLink
                    to="/login"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="mobile-bottom-nav__item-content">
                        <FaUserCircle className="h4 mb-0" />
                        Login
                    </div>
                </NavLink>
            </div>
            <div className="mobile-bottom-nav__item">
                <NavLink
                    to="/register"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="mobile-bottom-nav__item-content">
                        <FaUserPlus className="h4 mb-0" />
                        Register
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default NotAuth;
