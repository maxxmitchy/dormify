import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verified, userLogout } from "../../Redux/features/auth/authSlice";

const ProtectedRoutes = ({ component: Component, isAdmin, ...rest }) => {
    let dispatch = useDispatch();

    let { isVerified, role, user } = useSelector(({ auth }) => auth);

    useEffect(() => {
        if (isVerified === "") {
            dispatch(verified());
            setInterval(() => {
                dispatch(verified());
            }, 300000);
        }
    }, []);

    if (user === null && localStorage.getItem("token")) {
        localStorage.removeItem("token");
        dispatch(userLogout());
    }

    if (isAdmin !== undefined && isVerified !== "") {
        //isAdmin means the user is an Admin. Role can either be user,admin, or agent
        if (isAdmin != role) {
            return <Redirect to="/dashboard" />;
        }
    }

    return (
        <Route
            {...rest}
            render={props => {
                if (
                    !isVerified &&
                    (!localStorage.getItem("token") ||
                        !localStorage.getItem("token").length === 244)
                ) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }

                if (isVerified !== "") {
                    switch (isVerified) {
                        case true:
                            return <Component {...props} />;
                        case false:
                            return <Redirect to="/verifyEmail" />;
                        default:
                            dispatch(userLogout());
                            break;
                    }
                }
            }}
        />
    );
};

export default ProtectedRoutes;
