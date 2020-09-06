import React, { useState, useEffect } from "react";
import TextInput from "../Common/Forms/TextInput";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../../Redux/features/auth/authSlice";
import Loader from "react-loader-spinner";

const Login = ({ location }) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState({ email: "", password: "" });

    const [started, setStarted] = useState(false);

    const { errors, isVerified } = useSelector(({ auth }) => auth);

    let redirectTo = location.state && location.state.from.pathname;

    const handleSubmit = e => {
        e.preventDefault();
        setStarted(!started);
        dispatch(userLogin(login));
    };

    useEffect(() => {
        if (errors) {
            setStarted(false);
        }
    }, [errors]);

    const handleChange = e => {
        let value = e.target.value;
        setLogin({
            ...login,
            [e.target.name]: value
        });
    };

    if (isVerified || localStorage.getItem("token")) {
        return (
            <Redirect
                to={
                    redirectTo !== undefined
                        ? redirectTo
                        : "/dashboard"
                }
            />
        );
    }

    return (
        <div className="container-fluid bg-white">
            <div className="container mt-md-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 bg-white p-3 px-md-5">
                        <div className="px-md-4">
                            <h5 className="mb-4 mt-4">DORMIFY</h5>
                            <div className="">
                                <h6 className="text-secondary my-3">
                                    Welcome To Dormify, Please Login To Your
                                    Account
                                </h6>
                                <NavLink to="" className="btn btn-primary mb-3">
                                    <FaFacebook /> Login with facebook
                                </NavLink>
                            </div>
                            <h5 className="my-3 text-center">-OR-</h5>
                            <p className="text-danger">
                                {errors?.errors?.email ||
                                    errors?.errors.message}
                            </p>
                            <form onSubmit={handleSubmit}>
                                <TextInput
                                    type="email"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                    value={login.email}
                                    autoComplete="email"
                                />
                                <TextInput
                                    type="password"
                                    id="pass"
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={login.password}
                                    autoComplete="current-password"
                                />

                                <div className="form-group row d-flex justify-content-between">
                                    <div className="col-md-6">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input rounded-0"
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="remember"
                                            >
                                                <b>Remember me</b>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <NavLink to="">
                                            Forgot your password?
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="">
                                        <button
                                            type="submit"
                                            disabled={started}
                                            className="btn btn-danger mb-3 mr-3 px-4 py-1"
                                        >
                                            {started ? (
                                                <Loader
                                                    type="TailSpin"
                                                    color="#FFF"
                                                    height={22}
                                                    width={22}
                                                />
                                            ) : (
                                                "Login"
                                            )}
                                        </button>
                                    </div>
                                    <div className="">
                                        <NavLink
                                            to="/register"
                                            className="btn btn-outline-secondary mb-3 px-4 py-1"
                                        >
                                            Sign Up
                                        </NavLink>
                                    </div>
                                </div>
                                <p className="mt-4">
                                    By signing up and login in, you agree to
                                    Dormify's &nbsp;
                                    <NavLink to="">
                                        Terms and Conditions
                                    </NavLink>
                                    &nbsp; & &nbsp;
                                    <NavLink to="">Privacy Policy</NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default Login;
