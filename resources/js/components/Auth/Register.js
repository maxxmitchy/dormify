import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { userRegister } from "../../Redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../Common/Forms/TextInput";
import SelectInput from "../Common/Forms/SelectInput";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";

const Register = ({}) => {
    const dispatch = useDispatch();

    const { errors } = useSelector(({ auth }) => auth);

    const [started, setStarted] = useState(false);

    const gender = [];

    const [register, setRegister] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        date_of_birth: "",
        phone: "",
        gender: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = event => {
        const value = event.target.value;
        setRegister({
            ...register,
            [event.target.name]: value
        });
    };

    const handleAgentSubmit = e => {
        e.preventDefault();
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(userRegister(register));
        setStarted(!started);

        setTimeout(() => {
            setStarted(!started);
            location.href = "/verifyEmail";
        }, 60000);
    };

    return (
        <div className="container-fluid bg-white">
            <div className="container mt-md-5">
                <div className="row">
                    <div className="col-md-6 bg-white p-3">
                        <div className="px-md">
                            <div className="d-flex mt-3">
                                <FaRegUserCircle className="h4 mr-2 text-secondary" />
                                <h4 className="mb-4">Register On Dormify</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextInput
                                            type="text"
                                            id="first_name"
                                            label="First Name"
                                            name="first_name"
                                            value={register.first_name}
                                            onChange={handleChange}
                                        />
                                        <p className="text-danger errorCss">
                                            {errors && errors.first_name}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput
                                            type="text"
                                            id="last_name"
                                            label="Last Name"
                                            name="last_name"
                                            value={register.last_name}
                                            onChange={handleChange}
                                        />
                                        <p className="text-danger errorCss">
                                            {errors && errors.last_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextInput
                                            autoComplete="username"
                                            type="text"
                                            id="username"
                                            label="userName"
                                            name="username"
                                            value={register.username}
                                            onChange={handleChange}
                                        />
                                        <p className="text-danger errorCss">
                                            {errors && errors.username}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput
                                            type="email"
                                            label="Email Address"
                                            id="email"
                                            value={register.email}
                                            onChange={handleChange}
                                            name="email"
                                            required
                                        />
                                        <p className="text-danger errorCss">
                                            {errors && errors.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextInput
                                            type="date"
                                            label="Date of Birth"
                                            id="dateOfBirth"
                                            value={register.date_of_birth}
                                            onChange={handleChange}
                                            name="date_of_birth"
                                        />
                                        <p className="text-danger errorCss">
                                            {errors && errors.date_of_birth}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput
                                            type="number"
                                            label="Phone"
                                            id="phone"
                                            value={register.phone}
                                            onChange={handleChange}
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                <SelectInput
                                    name="gender"
                                    label="Gender"
                                    defaultOption="Select Gender"
                                    options={gender?.map(item => ({
                                        value: item.id,
                                        text: item.name
                                    }))}
                                    onChange={handleChange}
                                />
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <TextInput
                                            type="password"
                                            label="Password"
                                            id="password"
                                            value={register.password}
                                            onChange={handleChange}
                                            name="password"
                                            autoComplete="current-password"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput
                                            autoComplete="new-password"
                                            type="password"
                                            label="Confirm Password"
                                            id="password_confirmation"
                                            value={
                                                register.password_confirmation
                                            }
                                            onChange={handleChange}
                                            name="password_confirmation"
                                        />
                                        <p className="text-danger errorCss">
                                            {errors && errors.password}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={started}
                                    className="btn btn-block btn-danger mb-3 mr-3 px-3 py-2"
                                >
                                    {started ? (
                                        <Loader
                                            type="TailSpin"
                                            color="#FFF"
                                            height={22}
                                            width={22}
                                        />
                                    ) : (
                                        "Register Account"
                                    )}
                                </button>
                            </form>
                            <div className="">
                                <p>
                                    Already a user on Dormify ?
                                    <NavLink to="/login">&nbsp; Login</NavLink>
                                </p>
                                <p className="mt-4">
                                    By signing up and login in, you agree to
                                    Dormify's &nbsp;
                                    <NavLink to="">
                                        Terms and Conditions
                                    </NavLink>
                                    &nbsp; & &nbsp;
                                    <NavLink to="">Privacy Policy</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="mt-md-5">Step 1 of 3</h5>
                        <div className="card border-0 bg-light p-3 p-md-4 mb-5 mt-4">
                            <h6 className="">Hello,</h6>
                            <p className="">
                                My name is Dorm. I will be helping you while you
                                complete your registeration on this platform.
                                Don't worry, all your Information is secure
                            </p>
                        </div>
                        <br />
                        <br />
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Register;
