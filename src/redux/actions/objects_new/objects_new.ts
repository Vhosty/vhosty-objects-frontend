import { Dispatch } from "react";

import $api from '../../../http/'

import { ObjectsNewActions, ObjectsNewActionTypes } from '../../types/IObjectsNew';

import { setObjectsNewModalsClose } from '../../actions/objects_new/objects_new_modals';

export const sendCreateObjectNew = (data: any) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post("/hotels/employee/hotels", data).then(({ data }) => {
			window.location.href = `/objects/new/${data.id}`
		})
	}
}

export const fetchObjectsServicesList = () => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
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
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
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

export const fetchObjectByIdRooms = (id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		dispatch({
			type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_ROOMS,
			payload: false
		})

		$api.get(`/hotels/employee/${id}/room-categories`).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_ROOMS,
				payload: data.results
			})

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_ROOMS,
				payload: true
			})
		})
	}
}

export const fetchObjectByIdTerms = (id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		dispatch({
			type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_TERMS,
			payload: false
		})

		$api.get(`/hotels/employee/hotels/${id}/settings`).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_TERMS,
				payload: data
			})

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_TERMS,
				payload: true
			})
		})
	}
}

export const fetchObjectByIdDocuments = (id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		dispatch({
			type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_DOCUMENTS,
			payload: false
		})

		$api.get(`/hotels/employee/${id}/verification-documents`).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_DOCUMENTS,
				payload: data
			})

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_DOCUMENTS,
				payload: true
			})
		})
	}
}

export const uploadObjectByIdDocumentsEnterpriseCard = (data: any, id: string) => {
	// $api.post(`/hotels/employee/upload`, data).then(({ data }) => {
	// })
}

export const updateObjectByIdCoverText = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/hotels/${id}`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})

			dispatch(setObjectsNewModalsClose() as any)

			window.location.hash = ""
		})
	}
}

export const uploadObjectByIdCoverImage = (files: any, object: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		const images: { id: string }[] = []

		await Promise.all(Object.keys(files).map(async (key: any) => {
			const data = new FormData()

			data.append("uploading_file", files[key]);

			await $api.post(`/hotels/employee/upload`, data).then(({ data }) => images.push({ id: data.id }))
		}))

		$api.post(`/hotels/employee/hotels/${id}`, { ...object, background_images: [...object.background_images, ...images] }).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})
		})
	}
}

export const updateObjectByIdCoverImage = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/hotels/${id}`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})
		})
	}
}

export const uploadObjectByIdAdditionalImage = (files: any, object: any, id: string,) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		const images: { id: string }[] = []

		await Promise.all(Object.keys(files).map(async (key: any) => {
			const data = new FormData()

			data.append("uploading_file", files[key]);

			await $api.post(`/hotels/employee/upload`, data).then(({ data }) => images.push({ id: data.id }))
		}))

		$api.post(`/hotels/employee/hotels/${id}`, { ...object, images: [...object.images, ...images] }).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})
		})
	}
}

export const updateObjectByIdAdditionalImage = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/hotels/${id}`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})
		})
	}
}

export const updateObjectByIdAbout = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/hotels/${id}`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
				payload: data
			})

			dispatch(setObjectsNewModalsClose() as any)

			window.location.hash = ""
		})
	}
}

export const updateObjectByIdTerms = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/hotels/${id}/settings`, data).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_TERMS,
				payload: data
			})

			dispatch(setObjectsNewModalsClose() as any)

			window.location.hash = ""
		})
	}
}

export const createObjectByIdRoom = (data: any, id: string, idObject: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		const images: { id: string }[] = []

		const newData = { ...data }

		await Promise.all(data.images.map(async (image: any, index: number) => {
			if (image.name) {
				const formData = new FormData()

				formData.append("uploading_file", image)

				await $api.post(`/hotels/employee/upload`, formData).then(({ data }) => {
					images.push({ id: data.id })

				})
			} else {
				images.push(image)
			}
		}))

		newData.images = images

		$api.post(`/hotels/employee/${id}/room-categories`, newData).then(({ data }) => {
			dispatch(fetchObjectByIdRooms(idObject) as any)

			dispatch(setObjectsNewModalsClose() as any)

			window.location.hash = ""
		})
	}
}

export const updateObjectByIdRoom = (data: any, id: string, idObject: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		const images: { id: string }[] = []

		const newData = { ...data }

		await Promise.all(data.images.map(async (image: any, index: number) => {
			if (image.name) {
				const formData = new FormData()

				formData.append("uploading_file", image)

				await $api.post(`/hotels/employee/upload`, formData).then(({ data }) => {
					images.push({ id: data.id })

				})
			} else {
				images.push(image)
			}
		}))

		newData.images = images

		$api.post(`/hotels/employee/room-categories/${id}`, newData).then(({ data }) => {
			dispatch(fetchObjectByIdRooms(idObject) as any)

			dispatch(setObjectsNewModalsClose() as any)

			window.location.hash = ""
		})
	}
}

export const fetchObjectByIdServices = (id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		dispatch({
			type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_SERVICES,
			payload: false
		})

		$api.get(`/hotels/employee/hotels/${id}/services`).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_SERVICES,
				payload: data.results
			})

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_SERVICES,
				payload: true
			})
		})
	}
}

export const updateObjectByIdServices = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/hotels/${id}/services`, { services: data }).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_SERVICES,
				payload: data.results
			})

			dispatch(setObjectsNewModalsClose() as any)

			window.location.hash = ""
		})
	}
}

export const fetchObjectByIdFaqs = (id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		dispatch({
			type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_FAQS,
			payload: false
		})

		$api.get(`/hotels/employee/${id}/faqs`).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_FAQS,
				payload: data.results
			})

			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_FAQS,
				payload: true
			})
		})
	}
}

export const updateObjectByIdFaqs = (data: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		$api.post(`/hotels/employee/${id}/faqs`, { faqs: data }).then(({ data }) => {
			dispatch({
				type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_FAQS,
				payload: data.results
			})
		})
	}
}

export const uploadObjectDocs = (data: any, itemById: any, id: string) => {
	return async (dispatch: Dispatch<ObjectsNewActions>) => {
		const data2 = new FormData()

		data2.append("uploading_file", data);


		$api.post(`/hotels/employee/upload`, data2).then(({ data }) => {
			$api.post(`/hotels/employee/hotels/${id}`, { ...itemById, docs: data.id }).then(({ data }) => {
				console.log(data)
			})
		})
	}
}