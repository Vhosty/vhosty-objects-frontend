import { UserState, UserActionTypes, UserActions } from '../../types/IUser';

const initialState: UserState = {
	isLoadedUser: false,
	isPendingUser: true,

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
}

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER) {
		return {
			...state,
			isLoadedUser: true,
			user: action.payload
		}
	}
	
	if (action.type === UserActionTypes.SET_USER_IS_PENDING) {
		return {
			...state,
			isPendingUser: action.payload,
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