export interface UserObjectsState {
	isLoadedObjects: boolean,
	objects: [],

	isSendDelete: boolean,
	deleteIds: {
		[key: string]: {
			hotel_id: number,
			room_category_id: string
		}
	},
}

export enum UserObjectsActionTypes {
	SET_USER_OBJECTS_IS_LOADED_OBJECTS = "SET_USER_OBJECTS_IS_LOADED_OBJECTS",
	SET_USER_OBJECTS = "SET_USER_OBJECTS",
	SET_OBJECTS_DELETE_IDS = "SET_OBJECTS_DELETE_IDS",
	SET_FILL_OBJECTS_DELETE_IDS = "SET_FILL_OBJECTS_DELETE_IDS",
	SET_OBJECTS_IS_SEND_DELETE = "SET_OBJECTS_IS_SEND_DELETE"
}

interface setUserObjectsIsLoadedObjects {
	type: UserObjectsActionTypes.SET_USER_OBJECTS_IS_LOADED_OBJECTS
	payload: boolean
}

interface setObjects {
	type: UserObjectsActionTypes.SET_USER_OBJECTS
	payload: any
}

interface setObjectsDeleteIds {
	type: UserObjectsActionTypes.SET_OBJECTS_DELETE_IDS
	payload: {
		hotel_id: number,
		room_category_id: string
	}
}

interface setFillObjectsDeleteIds {
	type: UserObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS
	payload: {
		[key: string]: {
			hotel_id: number,
			room_category_id: string
		}
	}
}

interface setObjectsIsSendDelete {
	type: UserObjectsActionTypes.SET_OBJECTS_IS_SEND_DELETE
	payload: boolean
}

export type UserObjectsActions = setUserObjectsIsLoadedObjects | setObjects | setObjectsDeleteIds | setFillObjectsDeleteIds | setObjectsIsSendDelete