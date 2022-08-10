import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "./reglog";
import request_register from "./request_register";
import register from "./register";
import login from "./login";
import recovery_password from "./recovery_password";
import objects_new_modals from "./objects_new_modals";

// user
import user from "../reducers/user/user";
import userCabinetSetting from "../reducers/user/userCabinetSetting";

export const rootReducer = combineReducers({
	reglog,
	request_register,
	register,
	login,
	recovery_password,
	objects_new_modals,
	user, userCabinetSetting,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
