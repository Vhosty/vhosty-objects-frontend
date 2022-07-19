import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "../reducers/reglog";
import request_register from "../reducers/request_register";

export const rootReducer = combineReducers({
	reglog,
	request_register,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
