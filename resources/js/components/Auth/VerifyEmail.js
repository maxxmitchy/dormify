import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    resendEmail,
    verified,
    userLogout
} from "../../Redux/features/auth/authSlice";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";

const VerifyEmail = () => {
    let {
        loading,
        isVerified,
        resendEmailSuccess,
        user,
        resendError
    } = useSelector(({ auth }) => auth);

    console.log(resendEmailSuccess);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isVerified === "") {
            dispatch(verified());
        }
    }, []);

    if (user === null) {
        localStorage.removeItem("token");
        dispatch(userLogout());
    }

    const redirect = <Redirect to="/dashboard" />;

    // const containerVariants = {
    //     hidden: {
    //         opacity: 0
    //     },
    //     visible: {
    //         opacity: 1,
    //         transition: { delay: 0.5, duration: 0.5 }
    //     },
    //     exit: {
    //         x: "-100vw",
    //         transition: { ease: "easeInOut" }
    //     }
    // };

    return (
        <React.Fragment>
            {isVerified ? (
                redirect
            ) : (
                <motion.div
                    // variants={containerVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
                    className="container h-100"
                >
                    <div className="row pt-3 px-2">
                        <div className="col-md-4 offset-md-4">
                            <div className="mt-4 d-flex justify-content-center">
                                <img
                                    src="img/emailsent.svg"
                                    className="img-fluid"
                                    style={{
                                        width: "100px",
                                        height: "100px"
                                    }}
                                    alt=""
                                />
                            </div>
                            <p className="text-success text-center font-weight-bolder">
                                {resendEmailSuccess}
                            </p>
                            {resendError && (
                                <p className="text-danger text-center font-weight-bolder">
                                    {resendError +
                                        ". Please check your connection and try again later. "}
                                </p>
                            )}
                            <h5 className="font-weight-bolder text-center mt-3 mb-3">
                                Verify your Email
                            </h5>
                            <p className="text-center">
                                Thanks for signing up with Dormify, we take care
                                of all your accomodation needs and more. We have
                                sent a verification email to the email address
                                you provided. Please click on the confirmation
                                link to complete your registeration. Alos, check
                                your spam folder in case the email got delivered
                                there.
                            </p>
                            <button
                                disabled={loading}
                                style={{ boxShadow: "0px 0px 10px #e3342f" }}
                                onClick={() => dispatch(resendEmail())}
                                className={
                                    "mt-4 btn btn-block btn-danger font-weight-bolder text-white mb-3 mr-3 px-3 " +
                                    (loading ? "py-0" : "")
                                }
                            >
                                Resend Email
                                {loading && (
                                    <Loader
                                        type="TailSpin"
                                        color="#FFF"
                                        height={22}
                                        width={22}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
            <br />
            <br />
            <br />
        </React.Fragment>
    );
};

export default VerifyEmail;
