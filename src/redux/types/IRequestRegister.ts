export interface RequestRegisterState {
	isPending: boolean;
}

export enum RequestRegisterActionTypes {
	SET_REQUEST_REGISTER_IS_PENDING = "SET_REQUEST_REGISTER_IS_PENDING",
}

interface setRequestRegisterIsPending {
	type: RequestRegisterActionTypes.SET_REQUEST_REGISTER_IS_PENDING;
	payload: boolean;
}

export type RequestRegisterActions = setRequestRegisterIsPending