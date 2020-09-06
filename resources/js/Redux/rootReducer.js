import { combineReducers } from "redux";
import authReducer from "../Redux/features/auth/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
