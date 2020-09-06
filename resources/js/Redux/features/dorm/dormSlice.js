import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dormSlice = createSlice({
    name: "dorm",
    initialState: { aroundYou: [], dormLoading: false },
    reducers: {
        
    }
});

export default dormSlice.reducer;
