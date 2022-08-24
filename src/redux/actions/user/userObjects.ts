import { Dispatch } from 'redux'

import {
	UserObjectsActionTypes,
	UserObjectsActions,
} from "../../types/IUserObjects";

import $api from '../../../http';

export const fetchUserObjects = () => {
	return async (dispatch: Dispatch<UserObjectsActions>) => {
		dispatch({
			type: UserObjectsActionTypes.SET_USER_OBJECTS_IS_LOADED_OBJECTS,
			payload: false
		})

		$api.get("/hotels/employee/catalog").then(({ data }) => {
			dispatch({
				type: UserObjectsActionTypes.SET_USER_OBJECTS_IS_LOADED_OBJECTS,
				payload: true
			})

			dispatch({
				type: UserObjectsActionTypes.SET_USER_OBJECTS,
				payload: data.results
			})
		})
	}
}

export const setObjectsDeleteIds = (id: {
	hotel_id: number,
	room_category_id: string
}) => ({
	type: UserObjectsActionTypes.SET_OBJECTS_DELETE_IDS,
	payload: id
})

export const setFillObjectsDeleteIds = (ids: {
	[key: string]: {
		hotel_id: number,
		room_category_id: string
	}
}) => ({
	type: UserObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS,
	payload: ids
})

export const sendDeleteObjects = (ids: {
	[key: string]: {
		hotel_id: number,
		room_category_id: string
	}
}) => {
	return async (dispatch: Dispatch<UserObjectsActions>) => {
		dispatch({
			type: UserObjectsActionTypes.SET_OBJECTS_IS_SEND_DELETE,
			payload: true
		})

		const to_delete: {
			hotel_id: number,
			room_category_id: string
		}[] = []

		Object.keys(ids).map((key) => {
			to_delete.push(ids[key])
		})


		$api.delete("/hotels/employee/catalog", {
			data: { to_delete }
		}).then(({ data }) => {
			dispatch({
				type: UserObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS,
				payload: {}
			})

			dispatch(fetchUserObjects() as any)
		})
	}
}