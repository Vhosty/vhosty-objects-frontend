export interface UserReservsState {
	isLoadedReservs: boolean,
	reservs: [],
	reservsCreatedCount: number
}

export enum UserReservsActionTypes {
	SET_USER_RESERVS_IS_LOADED_RESERVS = "SET_USER_RESERVS_IS_LOADED_RESERVS",
	SET_USER_RESERVS = "SET_USER_RESERVS",
}

interface setUserReservsIsLoadedReservs {
	type: UserReservsActionTypes.SET_USER_RESERVS_IS_LOADED_RESERVS
	payload: boolean
}

interface setReservs {
	type: UserReservsActionTypes.SET_USER_RESERVS
	payload: { data: any, countCreated: any }
}

export type UserReservsActions = setUserReservsIsLoadedReservs | setReservs