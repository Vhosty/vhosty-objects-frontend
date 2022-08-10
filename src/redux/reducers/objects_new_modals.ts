import React from 'react'

import {
	ObjectsNewModalsStateTypes,
	ObjectsNewModalsState,
	ObjectsNewModalsActionTypes,
	ObjectsNewModalsActions
} from "../types/IObjectsNewModals"

const initialState: ObjectsNewModalsState = {
	open: false,
	closeAnimation: false,

	type: ObjectsNewModalsStateTypes.COVER,
}

const objects_new_modals = (state = initialState, action: ObjectsNewModalsActions) => {
	if (action.type === ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_OPEN) {
		return {
			...state,
			open: action.payload,
		};
	}

	if (action.type === ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_CLOSE_ANIMATION) {
		return {
			...state,
			closeAnimation: action.payload,
		};
	}

	if (action.type === ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_TYPE) {
		return {
			...state,
			type: action.payload,
		};
	}

	return state
}

export default objects_new_modals