import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "../reducers/reglog";
import request_register from "../reducers/request_register";
import register from "../reducers/register";
import login from "../reducers/login";
import recovery_password from "../reducers/recovery_password";

export const rootReducer = combineReducers({
	reglog,
	request_register,
	register,
	login,
	recovery_password,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
