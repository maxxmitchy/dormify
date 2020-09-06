import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const locationSlice = createSlice({
    name: "dorm",
    initialState: { city: [], state: [], locationLoading: false },
    reducers: {}
});

export default locationSlice.reducer;
