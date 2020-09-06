import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "auth",
    initialState: { isVerified: "", token: null },
    reducers: {
        authStart(state) {
            state.loading = true;
        },
        authSuccess(state, action) {
            state.loading = false;
            state.token = action.payload;
            state.user = "";
        },
        authFail(state, action) {
            state.loading = false;
            state.errors = action.payload;
        },
        logout(state) {
            state.token = null;
            state.error = null;
            state.loading = false;
            state.isVerified = null;
        },
        registerSuccess(state) {
            state.loading = false;
        },
        registerFail(state, action) {
            state.loading = false;
            state.errorsReg = action.payload;
        },
        verify(state, action) {
            const {
                verified,
                user,
                role,
                plan,
                referral_link
            } = action.payload;
            return {
                ...state,
                loading: false,
                isVerified: verified,
                user,
                plan,
                role,
                referral_link
            };
        },
        resendComplete(state, action) {
            state.loading = false;
            state.resendEmailSuccess = action.payload;
        },
        resendEmailError(state, action) {
            state.loading = false;
            state.resendError = action.payload;
        },
        updatePassword(state, action) {
            state.loading = false;
            state.update = action.payload;
        },
        updateUserDetails(state, action) {
            state.loading = false;
            state.update = action.payload;
        },
        verifyBankStart(state) {
            state.verifyBankLoading = true;
        },
        verifyBankSuccess(state, action) {
            state.verifyBankLoading = false;
            state.verifyBankResponse = action.payload;
        },
        verifyBankFail(state, action) {
            state.verifyBankLoading = false;
            state.verifyBankError = action.payload;
        }
    }
});

export const userLogin = login => {
    return dispatch => {
        dispatch(authStart());
        axios.get("/sanctum/csrf-cookie").then(response => {
            axios
                .post("/api/login", { ...login })
                .then(res => {
                    localStorage.setItem(
                        "token",
                        res.config.headers["X-XSRF-TOKEN"]
                    );
                    dispatch(authSuccess(res.config.headers["X-XSRF-TOKEN"]));
                })
                .catch(errors => {
                    dispatch(authFail(errors.response.data));
                });
        });
    };
};

export const userRegister = data => {
    return dispatch => {
        dispatch(authStart());
        axios.get("/sanctum/csrf-cookie").then(response => {
            axios
                .post("/api/register", data)
                .then(res => {
                    dispatch(registerSuccess());
                    location.href = "/verifyEmail";
                })
                .catch(errors => {
                    dispatch(registerFail(errors.response.data.errors));
                });
        });
    };
};

export const userLogout = () => {
    return dispatch => {
        dispatch(authStart());
        axios.get("/sanctum/csrf-cookie").then(response => {
            axios
                .post("/api/logout")
                .then(res => {
                    localStorage.removeItem("token");
                    dispatch(logout(res.data));
                    location.href = "/login";
                })
                .catch(errors => {
                    dispatch(authFail(errors.response));
                });
        });
    };
};

export const verified = () => {
    return dispatch => {
        axios.get("/api/email/verify").then(res => {
            dispatch(verify(res.data));
        });
    };
};

export const verifyBank = (account_number, bank_code) => {
    return dispatch => {
        dispatch(verifyBankStart());
        axios
            .post("/api/verifyBank", { account_number, bank_code })
            .then(res => {
                dispatch(verifyBankSuccess(res.data));
            })
            .catch(err => {
                dispatch(verifyBankFail(err.response.data));
            });
    };
};

export const resendEmail = () => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post("/api/email/resend")
            .then(res => {
                dispatch(resendComplete("Email sent successfully"));
            })
            .catch(error =>
                dispatch(
                    resendEmailError(
                        error?.response?.data.message.substr(0, 45)
                    )
                )
            );
    };
};

export const passwordUpdate = (password, userId) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post("/api/password/" + userId, { ...password, _method: "patch" })
            .then(res => {
                dispatch(updatePassword(res.data.update));
            });
    };
};

export const userDetailsUpdate = (details, userId) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post("/api/user/" + userId, { ...details, _method: "patch" })
            .then(res => {
                dispatch(updateUserDetails(res.data.update));
            });
    };
};

export const {
    authStart,
    authSuccess,
    authFail,
    logout,
    registerSuccess,
    registerFail,
    verify,
    updatePassword,
    updateUserDetails,
    resendEmailError,
    resendComplete,
    verifyBankStart,
    verifyBankSuccess,
    verifyBankFail
} = authSlice.actions;

export default authSlice.reducer;
