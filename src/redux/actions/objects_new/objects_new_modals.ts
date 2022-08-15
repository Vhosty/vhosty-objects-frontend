import React, { Dispatch } from "react";

import { ObjectsNewModalsActionTypes, ObjectsNewModalsActions } from "../../types/IObjectsNewModals";

export const setObjectsNewModalsOpen = () => {
	document.body.style.overflowY = "hidden";

	return {
		type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_OPEN,
		payload: true,
	};
};

export const setObjectsNewModalsClose = () => {
	return async (dispatch: Dispatch<ObjectsNewModalsActions>) => {
		dispatch({
			type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_CLOSE_ANIMATION,
			payload: true,
		});

		setTimeout(() => {
			document.body.style.overflowY = "visible";

			dispatch({
				type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_OPEN,
				payload: false,
			});

			dispatch({
				type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_CLOSE_ANIMATION,
				payload: false,
			});
		}, 180);
	}
};

export const setObjectsNewModalsType =
	(type: string) => {
		return async (dispatch: Dispatch<ObjectsNewModalsActions>) => {
			dispatch({
				type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_TYPE,
				payload: type,
			});
		}
	};