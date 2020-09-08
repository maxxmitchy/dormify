import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "users",
    initialState: { loading: false },
    reducers: {
        getUsersStart(state) {
            state.loading = true;
            state.user = "";
        },
        getUsersSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },
        getUsersFail(state, action) {
            state.loading = false;
            state.userError = action.payload;
        }
    }
});

export function getUsers() {
    return dispatch => {
        dispatch(getUserStart());
        axios
            .get("/api/user")
            .then(res => {
                dispatch(getUsersSuccess(res.data));
            })
            .catch(error => getUsersFail(error.response.data));
    };
}

export const {
    getUsersStart,
    getUserSuccess,
    getUserFail,
} = userSlice.actions;

export default userSlice.reducer;
