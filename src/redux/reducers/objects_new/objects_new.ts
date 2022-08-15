import { ObjectsNewState, ObjectsNewActions, ObjectsNewActionTypes } from '../../types/IObjectsNew'

const initialState: ObjectsNewState = {
	services: [],
	isLoadedServices: false
}

const objects_new = (state = initialState, action: ObjectsNewActions) => {
	if (action.type === ObjectsNewActionTypes.SET_OBJECTS_NEW_SERVICES) {
		return {
			...state,
			services: action.payload,
			isLoadedServices: true
		}
	}

	return state
}

export default objects_new