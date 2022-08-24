import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "./reglog";
import request_register from "./request_register";
import register from "./register";
import login from "./login";
import recovery_password from "./recovery_password";

// user
import user from "../reducers/user/user";
import userObjects from "../reducers/user/userObjects";
import userReservs from "../reducers/user/userReservs";
import userCabinetSetting from "../reducers/user/userCabinetSetting";

// objects_new
import objects_new from "./objects_new/objects_new";
import objects_new_modals from "./objects_new/objects_new_modals";

export const rootReducer = combineReducers({
	reglog,
	request_register,
	register,
	login,
	recovery_password,
	user, userObjects, userReservs, userCabinetSetting,
	objects_new, objects_new_modals,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
