import { Dispatch } from 'redux'

import {
	UserActionTypes,
	UserActions,
} from "../../types/IUser";

import { UserInfo } from '../../../models/IUser'

import $api from '../../../http';

export const fetchUserAboutMe = () => {
	return async (dispatch: Dispatch<any>) => {
		$api.get("/companies/about-me").then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER,
				payload: data
			})
		})
	}
}

export const sendUserUpdateAboutMe = (data: UserInfo) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.post("/companies/about-me", data).then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER,
				payload: data
			})
		})
	}
}

export const sendRepeatUserConfirmedEmail = (email: string) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.post("/users/verification/resend-email", { email })
	}
}

export const fetchUserDocuments = () => {
	return async (dispatch: Dispatch<any>) => {
		$api.get("/companies/documents").then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER_DOCUMENTS,
				payload: data.results
			})
		})
	}
}

export const fetchUserObjects = () => {
	return async (dispatch: Dispatch<any>) => {
		$api.get("/hotels/employee/hotels").then(({ data }) => {
			console.log(data)
			// dispatch({
			// 	type: UserActionTypes.SET_USER_OBJECTS,
			// 	payload: data.results
			// })
		})
	}
}