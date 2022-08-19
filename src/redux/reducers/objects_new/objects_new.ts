import { ObjectsNewState, ObjectsNewActions, ObjectsNewActionTypes } from '../../types/IObjectsNew'

const initialState: ObjectsNewState = {
	services: [],
	isLoadedServices: false,

	itemById: {},
	isLoadedItemById: false
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

	return state
}

export default objects_new