import { UserObjectsState, UserObjectsActionTypes, UserObjectsActions } from '../../types/IUserObjects';

const initialState: UserObjectsState = {
	isLoadedObjects: false,
	objects: [],

	isSendDelete: false,
	deleteIds: {},
}

const userObjects = (state = initialState, action: UserObjectsActions) => {
	if (action.type === UserObjectsActionTypes.SET_USER_OBJECTS_IS_LOADED_OBJECTS) {
		return {
			...state,
			isLoadedObjects: action.payload
		}
	}

	if (action.type === UserObjectsActionTypes.SET_USER_OBJECTS) {
		return {
			...state,
			objects: action.payload
		}
	}

	if (action.type === UserObjectsActionTypes.SET_OBJECTS_DELETE_IDS) {
		const newObjects = { ...state.deleteIds }

		if (state.deleteIds[action.payload.hotel_id]) {
			delete newObjects[action.payload.hotel_id]
		} else {
			newObjects[action.payload.hotel_id] = action.payload
		}

		return {
			...state,
			deleteIds: newObjects
		}
	}

	if (action.type === UserObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS) {
		return {
			...state,
			deleteIds: action.payload
		}
	}

	if (action.type === UserObjectsActionTypes.SET_OBJECTS_IS_SEND_DELETE) {
		return {
			...state,
			isSendDelete: action.payload
		}
	}

	return state
}

export default userObjects