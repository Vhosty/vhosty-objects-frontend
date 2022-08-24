import { ObjectsNewState, ObjectsNewActions, ObjectsNewActionTypes } from '../../types/IObjectsNew'

const initialState: ObjectsNewState = {
	services: [],
	isLoadedServices: false,

	itemById: {},
	isLoadedItemById: false,

	itemByIdTerms: {},
	isLoadedItemByIdTerms: false,

	itemByIdRooms: [],
	isLoadedItemByIdRooms: false,

	itemByIdServices: [],
	isLoadedItemByIdServices: false,

	itemByIdFaqs: [],
	isLoadedItemByIdFaqs: false,

	itemByIdDocuments: {},
	isLoadedItemByIdDocuments: false
}

const objects_new = (state = initialState, action: ObjectsNewActions) => {
	if (action.type === ObjectsNewActionTypes.SET_OBJECTS_NEW_SERVICES) {
		return {
			...state,
			services: action.payload,
			isLoadedServices: true
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID) {
		return {
			...state,
			itemById: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED) {
		return {
			...state,
			isLoadedItemById: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_TERMS) {
		return {
			...state,
			itemByIdTerms: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_TERMS) {
		return {
			...state,
			isLoadedItemByIdTerms: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_ROOMS) {
		return {
			...state,
			itemByIdRooms: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_ROOMS) {
		return {
			...state,
			isLoadedItemByIdRooms: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_SERVICES) {
		return {
			...state,
			itemByIdServices: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_SERVICES) {
		return {
			...state,
			isLoadedItemByIdServices: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_FAQS) {
		return {
			...state,
			itemByIdFaqs: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_FAQS) {
		return {
			...state,
			isLoadedItemByIdFaqs: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_DOCUMENTS) {
		return {
			...state,
			itemByIdDocuments: action.payload
		}
	}

	if (action.type === ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_DOCUMENTS) {
		return {
			...state,
			isLoadedItemByIdDocuments: action.payload
		}
	}

	return state
}

export default objects_new