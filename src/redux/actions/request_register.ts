import { Dispatch } from 'redux'

import $api from '../../http'

import { RequestRegisterActionTypes, RequestRegisterActions } from '../types/IRequestRegister';

export const sendRequestRegister = ({ email, phone }: { email: string, phone: string }) => {
	return async (dispatch: Dispatch<RequestRegisterActions>) => {
		dispatch({
			type: RequestRegisterActionTypes.SET_REQUEST_REGISTER_IS_PENDING,
			payload: true
		})

		$api.post("/support/help", { email, phone, type: "register" }).then(({ data }) => {
			dispatch({
				type: RequestRegisterActionTypes.SET_REQUEST_REGISTER_IS_PENDING,
				payload: false
			})

			window.location.hash = "request_register_success"
		})
	}
}

export const sendRequestRegisterSupport = ({ email, phone }: { email: string, phone: string }) => {
	return async (dispatch: Dispatch<RequestRegisterActions>) => {
		dispatch({
			type: RequestRegisterActionTypes.SET_REQUEST_REGISTER_IS_PENDING,
			payload: true
		})

		$api.post("/support/help", { email, phone, type: "support" }).then(({ data }) => {
			dispatch({
				type: RequestRegisterActionTypes.SET_REQUEST_REGISTER_IS_PENDING,
				payload: false
			})
		})
	}
}