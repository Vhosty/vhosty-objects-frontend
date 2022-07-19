import { RequestRegisterState, RequestRegisterActionTypes, RequestRegisterActions } from '../types/IRequestRegister';

const initialState: RequestRegisterState = {
	isPending: false
}

const request_register = (state = initialState, action: RequestRegisterActions) => {
	if (action.type === RequestRegisterActionTypes.SET_REQUEST_REGISTER_IS_PENDING) {
		return {
			...state,
			isPending: action.payload
		}
	}

	return state
}

export default request_register