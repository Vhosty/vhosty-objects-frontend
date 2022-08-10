import { User } from '../../models/IUser';

export interface UserState {
	isLoadedUser: boolean
	user: User,

	isLoadedUserDocuments: boolean,
	userDocuments: any,

	isLoadedUserObjects: false,
	userObjects: {}
}

export enum UserActionTypes {
	SET_IS_LOADED_USER = "SET_IS_LOADED_USER",
	SET_USER = "SET_USER",

	SET_IS_LOADED_USER_DOCUMENTS = "SET_IS_LOADED_USER_DOCUMENTS",
	SET_USER_DOCUMENTS = "SET_USER_DOCUMENTS",

	SET_IS_LOADED_USER_OBJECTS = "SET_IS_LOADED_USER_OBJECTS",
	SET_USER_OBJECTS = "SET_USER_OBJECTS",
}

interface setIsLoadedUser {
	type: UserActionTypes.SET_IS_LOADED_USER
	payload: boolean
}

interface setUser {
	type: UserActionTypes.SET_USER
	payload: User
}

interface setUserDocuments {
	type: UserActionTypes.SET_USER_DOCUMENTS
	payload: any
}

interface setUserObjects {
	type: UserActionTypes.SET_USER_OBJECTS
	payload: any
}

export type UserActions = setUser | setIsLoadedUser | setUserDocuments | setUserObjects