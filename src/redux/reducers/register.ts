import { RegisterState, RegisterActionTypes, RegisterActions } from '../types/IRegister';

const initialState: RegisterState = {
	isPending: false,
	errorMessage: ""
}

const register = (state = initialState, action: RegisterActions) => {
	if (action.type === RegisterActionTypes.SET_REGISTER_IS_PENDING) {
		return {
			...state,
			isPending: action.payload
		}
	}

	if (action.type === RegisterActionTypes.SET_REGISTER_ERROR_MESSAGE) {
		return {
			...state,
			errorMessage: action.payload
		}
	}

	return state
}

export default register