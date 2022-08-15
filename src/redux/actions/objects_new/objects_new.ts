import { Dispatch } from "react";

import $api from '../../../http/'

import { ObjectsNewActionTypes } from '../../types/IObjectsNew';

export const sendCreateObjectNew = (data: any) => {
	return async (dispatch: Dispatch<any>) => {
		$api.post("/hotels/employee/hotels", data).then(({ data }) => {
			console.log(data)
		})
	}
}

export const fetchObjectsServicesList = () => {
	return async (dispatch: Dispatch<any>) => {
		$api.get("/hotels/employee/available-services").then(({ data }) => {
			const { results } = data

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECTS_NEW_SERVICES,
				payload: results
			})
		})
	}
}