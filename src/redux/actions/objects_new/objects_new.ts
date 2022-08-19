import { Dispatch } from "react";

import $api from '../../../http/'

import { ObjectsNewActionTypes } from '../../types/IObjectsNew';

import { setObjectsNewModalsClose } from '../../actions/objects_new/objects_new_modals';

export const sendCreateObjectNew = (data: any) => {
	return async (dispatch: Dispatch<any>) => {
		$api.post("/hotels/employee/hotels", data).then(({ data }) => {
			window.location.href = `/objects/new/${data.id}`
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

export const fetchObjectById = (id: string) => {
	return async (dispatch: Dispatch<any>) => {
		dispatch({
			type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED,
			payload: false
		})

		$api.get(`/hotels/employee/hotels/${id}`).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED,
				payload: true
			})
		})
	}
}

export const fetchObjectByIdDocuments = (id: string) => {
	return async (dispatch: Dispatch<any>) => {
		$api.get(`/hotels/employee/${id}/verification-documents`).then(({ data }) => {
			console.log(data)
		})
	}
}

export const updateObjectsCoverText = (data: any, id: string) => {
	return async (dispatch: Dispatch<any>) => {
		$api.post(`/hotels/employee/hotels/${id}`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})

			dispatch(setObjectsNewModalsClose())

			window.location.hash = ""
		})
	}
}

export const updateObjectsAbout = (data: any, id: string) => {
	return async (dispatch: Dispatch<any>) => {
		$api.post(`/hotels/employee/hotels/${id}`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})

			dispatch(setObjectsNewModalsClose())

			window.location.hash = ""
		})
	}
}