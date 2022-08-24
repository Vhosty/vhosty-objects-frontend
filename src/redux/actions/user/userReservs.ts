import { Dispatch } from 'redux'

import {
	UserReservsActionTypes,
	UserReservsActions,
} from "../../types/IUserReservs";

import $api from '../../../http';

export const fetchUserReservs = () => {
	return async (dispatch: Dispatch<UserReservsActions>) => {
		dispatch({
			type: UserReservsActionTypes.SET_USER_RESERVS_IS_LOADED_RESERVS,
			payload: false
		})

		$api.get("/hotels/employee/bookings").then(({ data }) => {
			dispatch({
				type: UserReservsActionTypes.SET_USER_RESERVS_IS_LOADED_RESERVS,
				payload: true
			})

			dispatch({
				type: UserReservsActionTypes.SET_USER_RESERVS,
				payload: data.results
			})
		})
	}
}