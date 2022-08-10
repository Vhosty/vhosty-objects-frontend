export enum ObjectsNewModalsStateTypes {
	COVER = "cover",
	ABOUT = "about",
	ROOMS = "rooms",
	SERVICES = "services",
	TERMS = "terms",
	FAQ = "faq",
}

export interface ObjectsNewModalsState {
	open: boolean;
	closeAnimation: boolean;

	type: ObjectsNewModalsStateTypes;
}

export enum ObjectsNewModalsActionTypes {
	SET_OBJECTS_NEW_MODALS_OPEN = "SET_OBJECTS_NEW_MODALS_OPEN",
	SET_OBJECTS_NEW_MODALS_CLOSE_ANIMATION = "SET_OBJECTS_NEW_MODALS_CLOSE_ANIMATION",
	SET_OBJECTS_NEW_MODALS_TYPE = "SET_OBJECTS_NEW_MODALS_TYPE",
}

interface setObjectsNewModalsOpen {
	type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_OPEN;
	payload: boolean;
}

interface setObjectsNewModalsCloseAnimation {
	type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_CLOSE_ANIMATION;
	payload: boolean;
}

interface setObjectsNewModalsType {
	type: ObjectsNewModalsActionTypes.SET_OBJECTS_NEW_MODALS_TYPE;
	payload: string;
}

export type ObjectsNewModalsActions =
	| setObjectsNewModalsOpen
	| setObjectsNewModalsCloseAnimation
	| setObjectsNewModalsType