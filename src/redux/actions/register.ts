import { Dispatch } from 'redux'
import axios from 'axios'

import { SubmissionError } from "redux-form";

import {
	RegisterErrorMessageTypes, RegisterActionTypes, RegisterActions
} from '../types/IRegister';

interface sendRegisterData {
	first_name: string,
	last_name: string,

	email: string,
	phone: string,

	password: string,
	password2: string,

	legal_type: string
}

export const sendRegister = (data: sendRegisterData) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
			payload: true
		})

		axios.post(`${process.env.REACT_APP_API_DOMEN}/companies/employees/register`, data).then(({ data }) => {
			dispatch({
				type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
				payload: false
			})

			localStorage.setItem("accessToken", data.access_token);

			window.location.hash = "register_success"
		}).catch(({ response }) => {
			const errorMessage = response.data.detail

			dispatch({
				type: RegisterActionTypes.SET_REGISTER_IS_PENDING,
				payload: false,
			});

			if (errorMessage === "This email already is used") {
				dispatch({
					type: RegisterActionTypes.SET_REGISTER_ERROR_MESSAGE,
					payload: RegisterErrorMessageTypes.IS_EMAIL_USED
				})

				throw new SubmissionError({
					email: " ",
				});
			}
		});
	}
}