import { IObjectsNewServicesGroup } from '../../models/IObjectsNew/IObjectsNewServices'

export interface ObjectsNewState {
	services: IObjectsNewServicesGroup[],
	isLoadedServices: boolean,

	itemById: any,
	isLoadedItemById: boolean
}

export enum ObjectsNewActionTypes {
	SET_OBJECTS_NEW_SERVICES = "SET_OBJECTS_NEW_SERVICES",
	SET_OBJECT_NEW_ITEM_BY_ID = "SET_OBJECT_NEW_ITEM_BY_ID",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED"
}

interface setObjectsNewServices {
	type: ObjectsNewActionTypes.SET_OBJECTS_NEW_SERVICES,
	payload: IObjectsNewServicesGroup[]
}

interface setObjectNewItemById {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID,
	payload: any
}

interface setObjectNewItemByIdIsLoaded {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED,
	payload: boolean
}

export type ObjectsNewActions = setObjectsNewServices | setObjectNewItemById | setObjectNewItemByIdIsLoaded