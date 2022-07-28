export interface RegisterState {
	isPending: boolean;
	errorMessage: string
}

export enum RegisterErrorMessageTypes {
	IS_EMAIL_USED = "Данная почта уже используется"
}

export enum RegisterActionTypes {
	SET_REGISTER_IS_PENDING = "SET_REGISTER_IS_PENDING",
	SET_REGISTER_ERROR_MESSAGE = "SET_REGISTER_ERROR_MESSAGE",
}

interface setRegisterIsPending {
	type: RegisterActionTypes.SET_REGISTER_IS_PENDING;
	payload: boolean;
}

interface setRegisterErrorMessage {
	type: RegisterActionTypes.SET_REGISTER_ERROR_MESSAGE;
	payload: RegisterErrorMessageTypes;
}


export type RegisterActions = setRegisterIsPending | setRegisterErrorMessage