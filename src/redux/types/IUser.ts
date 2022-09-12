import { User } from '../../models/IUser';

export interface UserState {
	isLoadedUser: boolean
	isPendingUser: boolean

	user: User,

	isLoadedUserDocuments: boolean,
	userDocuments: any,
}

export enum UserActionTypes {
	SET_IS_LOADED_USER = "SET_IS_LOADED_USER",
	SET_USER = "SET_USER",
	SET_USER_IS_PENDING = "SET_USER_IS_PENDING",

	SET_IS_LOADED_USER_DOCUMENTS = "SET_IS_LOADED_USER_DOCUMENTS",
	SET_USER_DOCUMENTS = "SET_USER_DOCUMENTS",
}

interface setIsLoadedUser {
	type: UserActionTypes.SET_IS_LOADED_USER
	payload: boolean
}

interface setUser {
	type: UserActionTypes.SET_USER
	payload: User
}

interface setUserIsPending {
	type: UserActionTypes.SET_USER_IS_PENDING
	payload: boolean
}

interface setUserDocuments {
	type: UserActionTypes.SET_USER_DOCUMENTS
	payload: any
}

export type UserActions = setUser | setUserIsPending | setIsLoadedUser | setUserDocuments