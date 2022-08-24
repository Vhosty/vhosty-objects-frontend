import { IObjectsNewServicesGroup } from '../../models/IObjectsNew/IObjectsNewServices'

export interface ObjectsNewState {
	services: IObjectsNewServicesGroup[],
	isLoadedServices: boolean,

	itemById: any,
	isLoadedItemById: boolean,

	itemByIdTerms: any,
	isLoadedItemByIdTerms: boolean,

	itemByIdRooms: any,
	isLoadedItemByIdRooms: boolean,

	itemByIdServices: any,
	isLoadedItemByIdServices: boolean,

	itemByIdFaqs: any,
	isLoadedItemByIdFaqs: boolean,

	itemByIdDocuments: any,
	isLoadedItemByIdDocuments: boolean,
}

export enum ObjectsNewActionTypes {
	SET_OBJECTS_NEW_SERVICES = "SET_OBJECTS_NEW_SERVICES",

	SET_OBJECT_NEW_ITEM_BY_ID = "SET_OBJECT_NEW_ITEM_BY_ID",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED",

	SET_OBJECT_NEW_ITEM_BY_ID_TERMS = "SET_OBJECT_NEW_ITEM_BY_ID_TERMS",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_TERMS = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_TERMS",

	SET_OBJECT_NEW_ITEM_BY_ID_ROOMS = "SET_OBJECT_NEW_ITEM_BY_ID_ROOMS",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_ROOMS = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_ROOMS",

	SET_OBJECT_NEW_ITEM_BY_ID_SERVICES = "SET_OBJECT_NEW_ITEM_BY_ID_SERVICES",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_SERVICES = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_SERVICES",

	SET_OBJECT_NEW_ITEM_BY_ID_FAQS = "SET_OBJECT_NEW_ITEM_BY_ID_FAQS",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_FAQS = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_FAQS",

	SET_OBJECT_NEW_ITEM_BY_ID_DOCUMENTS = "SET_OBJECT_NEW_ITEM_BY_ID_DOCUMENTS",
	SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_DOCUMENTS = "SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_DOCUMENTS"
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

interface setObjectNewItemByIdTerms {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_TERMS,
	payload: any
}

interface setObjectNewItemByIdIsLoadedTerms {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_TERMS,
	payload: boolean
}

interface setObjectNewItemByIdRooms {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_ROOMS,
	payload: any
}

interface setObjectNewItemByIdIsLoadedRooms {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_ROOMS,
	payload: boolean
}

interface setObjectNewItemByIdServices {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_SERVICES,
	payload: any
}

interface setObjectNewItemByIdIsLoadedServices {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_SERVICES,
	payload: boolean
}

interface setObjectNewItemByIdFaqs {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_FAQS,
	payload: any
}

interface setObjectNewItemByIdIsLoadedFaqs {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_FAQS,
	payload: boolean
}

interface setObjectNewItemByIdDocuments {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_DOCUMENTS,
	payload: any
}

interface setObjectNewItemByIdIsLoadedDocuments {
	type: ObjectsNewActionTypes.SET_OBJECT_NEW_ITEM_BY_ID_IS_LOADED_DOCUMENTS,
	payload: boolean
}

export type ObjectsNewActions = setObjectsNewServices | setObjectNewItemById | setObjectNewItemByIdIsLoaded | setObjectNewItemByIdTerms | setObjectNewItemByIdIsLoadedTerms | setObjectNewItemByIdRooms | setObjectNewItemByIdIsLoadedRooms | setObjectNewItemByIdServices | setObjectNewItemByIdIsLoadedServices | setObjectNewItemByIdFaqs | setObjectNewItemByIdIsLoadedFaqs | setObjectNewItemByIdDocuments | setObjectNewItemByIdIsLoadedDocuments