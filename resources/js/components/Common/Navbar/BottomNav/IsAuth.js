import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaInbox } from "react-icons/fa";
import { BsPlusSquare, BsEnvelope} from 'react-icons/bs'
import { RiDashboardLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { activeStyle } from "../../Constants";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../../../Redux/features/auth/authSlice";
import Backdrop from "../../Backdrop/Backdrop";

const IsAuth = () => {
    const authUser = useSelector(({ auth }) => auth);

    const [profile, setProfile] = useState(false);

    const dispatch = useDispatch();

    let agent = authUser && authUser.role;

    return (
        <React.Fragment>
            {profile ? (
                <React.Fragment>
                    <Backdrop click={() => setProfile(!profile)} />
                    <div className="profile_container">
                        <div className="profile_bottom shadow pt-5">
                            <ul>
                                <li onClick={() => setProfile(!profile)}>
                                    <NavLink
                                        to="/yourtrips"
                                        exact
                                        activeStyle={activeStyle}
                                    >
                                        Trips
                                    </NavLink>
                                </li>
                                <li onClick={() => setProfile(!profile)}>
                                    <NavLink
                                        to="/explore"
                                        exact
                                        activeStyle={activeStyle}
                                    >
                                        Explore
                                    </NavLink>
                                </li>

                                <hr />
                                <li onClick={() => setProfile(!profile)}>
                                    <NavLink
                                        to={
                                            "/userprofile/" + authUser.user.id
                                        }
                                        activeStyle={activeStyle}
                                    >
                                        Manage Listings
                                    </NavLink>
                                </li>
                                <li onClick={() => setProfile(!profile)}>
                                    <NavLink
                                        to="/messages"
                                        activeStyle={activeStyle}
                                    >
                                        Recent Listings{" "}
                                    </NavLink>
                                </li>
                                <li onClick={() => setProfile(!profile)}>
                                    <NavLink
                                        to="/"
                                        className="py-0 "
                                    >
                                        Go Home
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>{" "}
                </React.Fragment>
            ) : (
                ""
            )}
            <nav className="mobile-bottom-nav shadow">
                <div className="mobile-bottom-nav__item">
                    <NavLink
                        to="/dashboard"
                        activeStyle={activeStyle}
                        className="nav_color"
                    >
                        <div className="mobile-bottom-nav__item-content">
                            <RiDashboardLine className="h4 mb-0" />
                            Dashboard
                        </div>
                    </NavLink>
                </div>

                <div className="mobile-bottom-nav__item">
                    <NavLink
                        to="/messages"
                        activeStyle={activeStyle}
                        className="nav_color"
                    >
                        <div className="mobile-bottom-nav__item-content">
                            <BsEnvelope className="h4 mb-0" />
                            <p
                                className="bg-danger text-white"
                                style={{
                                    position: "absolute",
                                    top: ".2rem",
                                    width: "15px",
                                    height: "15px",
                                    zIndex: "99",
                                    borderRadius: "50%"
                                }}
                            >
                                1
                            </p>
                            Messages
                        </div>
                    </NavLink>
                </div>

                <div className="mobile-bottom-nav__item">
                    <a
                        className="nav_color"
                        onClick={() => setProfile(!profile)}
                    >
                        <div className="mobile-bottom-nav__item-content">
                            <FiUser className="h4 mb-0" />
                            Profile
                        </div>
                    </a>
                </div>
                {agent === "Agent" ? (
                    <div className="mobile-bottom-nav__item">
                        <NavLink
                            to="/upload"
                            activeStyle={activeStyle}
                            className="nav_color"
                        >
                            <div className="mobile-bottom-nav__item-content">
                                <BsPlusSquare className="h4 mb-0" />
                                Upload
                            </div>
                        </NavLink>
                    </div>
                ) : (
                    <div className="mobile-bottom-nav__item">
                        <NavLink
                            to="/recommended"
                            activeStyle={activeStyle}
                            className="nav_color"
                        >
                            <div className="mobile-bottom-nav__item-content">
                                <FaInbox className="h4 mb-0" />
                                Recommended
                            </div>
                        </NavLink>
                    </div>
                )}
                <div className="mobile-bottom-nav__item mobile-bottom-nav__item--active">
                    <a
                        onClick={() => dispatch(userLogout())}
                        className="text-dark"
                    >
                        <div className="mobile-bottom-nav__item-content">
                            <IoMdLogOut className="h4 mb-0" />
                            Logout
                        </div>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default IsAuth;
