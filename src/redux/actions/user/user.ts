import { Dispatch } from 'redux'

import {
	UserActionTypes,
	UserActions,
} from "../../types/IUser";

import { UserInfo, UserContact } from '../../../models/IUser'

import $api from '../../../http';

export const fetchUserAboutMe = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		dispatch({
			type: UserActionTypes.SET_USER_IS_PENDING,
			payload: true
		})

		$api.get("/companies/about-me").then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER,
				payload: data
			})

			dispatch({
				type: UserActionTypes.SET_USER_IS_PENDING,
				payload: false
			})
		}).catch(() => {
			dispatch({
				type: UserActionTypes.SET_USER_IS_PENDING,
				payload: false
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

export const sendUserUpdateContactMe = (data: UserContact) => {
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
		$api.post("/companies/verification/resend-email", { email })
	}
}

export const fetchUserDocuments = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.get("/companies/verification-documents").then(({ data }) => {
			dispatch({
				type: UserActionTypes.SET_USER_DOCUMENTS,
				payload: data.results
			})
		})
	}
}

export const setUserIsPending = (status: boolean) => ({
	type: UserActionTypes.SET_USER_IS_PENDING,
	payload: status
})