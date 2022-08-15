import { IObjectsNewServicesGroup } from '../../models/IObjectsNew/IObjectsNewServices'

export interface ObjectsNewState {
	services: IObjectsNewServicesGroup[],
	isLoadedServices: boolean
}

export enum ObjectsNewActionTypes {
	SET_OBJECTS_NEW_SERVICES = "SET_OBJECTS_NEW_SERVICES"
}

interface setObjectsNewServices {
	type: ObjectsNewActionTypes.SET_OBJECTS_NEW_SERVICES,
	payload: IObjectsNewServicesGroup[]
}

export type ObjectsNewActions = setObjectsNewServices