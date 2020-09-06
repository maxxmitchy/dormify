import React from "react";
import { MdExplore } from "react-icons/md";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { activeStyle } from "../../Common/Constants";

const NotAuth = () => {


    return (
        <nav className="mobile-bottom-nav shadow">
            <div className="bottom_nav_item">
                <NavLink
                    exact
                    to="/"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="bottom_nav_item_content">
                        <AiFillHome className="h4 mb-0" />
                        Home
                    </div>
                </NavLink>
            </div>
            <div className="bottom_nav_item">
                <NavLink
                    to="/explore"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="bottom_nav_item_content">
                        <MdExplore className="h4 mb-0" />
                        Explore
                    </div>
                </NavLink>
            </div>
            <div className="bottom_nav_item active_nav_item">
                <NavLink
                    to="/wishlist"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="bottom_nav_item_content">
                        <GiSelfLove className="h4 mb-0" />
                        Loved
                    </div>
                </NavLink>
            </div>

            <div className="bottom_nav_item">
                <NavLink
                    to="/login"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="bottom_nav_item_content">
                        <FaUserCircle className="h4 mb-0" />
                        Login
                    </div>
                </NavLink>
            </div>
            <div className="bottom_nav_item">
                <NavLink
                    to="/register"
                    activeStyle={activeStyle}
                    className="nav_color"
                >
                    <div className="bottom_nav_item_content">
                        <FaUserPlus className="h4 mb-0" />
                        Register
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default NotAuth;
