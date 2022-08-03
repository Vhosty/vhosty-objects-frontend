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