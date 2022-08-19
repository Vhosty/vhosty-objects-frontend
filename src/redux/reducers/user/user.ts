import { UserState, UserActionTypes, UserActions } from '../../types/IUser';

const initialState: UserState = {
	isLoadedUser: false,

	user: {
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		id: 0,
		phone_is_verified: false,
		email_is_verified: false
	},

	isLoadedUserDocuments: false,
	userDocuments: {},

	isLoadedUserObjects: false,
	userObjects: {}
}

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER) {
		return {
			...state,
			isLoadedUser: true,
			user: action.payload
		}
	}

	if (action.type === UserActionTypes.SET_IS_LOADED_USER_OBJECTS) {
		return {
			...state,
			isLoadedUserObjects: action.payload
		}
	}

	if (action.type === UserActionTypes.SET_USER_OBJECTS) {
		return {
			...state,
			userObjects: action.payload
		}
	}

	if (action.type === UserActionTypes.SET_USER_DOCUMENTS) {
		return {
			...state,
			isLoadedUserDocuments: true,
			userDocuments: action.payload
		}
	}

	return state
}

export default user