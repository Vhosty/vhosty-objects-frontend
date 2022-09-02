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
				payload: { data: data.results, countCreated: data.aggregated.created_count }
			})
		})
	}
}

export const sendConfirmUserReservById = (id: string | null) => {
	return async (dispatch: Dispatch<UserReservsActions>) => {
		$api.post(`/hotels/employee/bookings/${id}`, {
			status: "approved"
		}).then(() => {
			dispatch(fetchUserReservs() as any)
		})
	}
}

export const sendRejectUserReservById = (id: string | null) => {
	return async (dispatch: Dispatch<UserReservsActions>) => {
		$api.post(`/hotels/employee/bookings/${id}`, {
			status: "rejected"
		}).then(() => {
			dispatch(fetchUserReservs() as any)
		})
	}
}