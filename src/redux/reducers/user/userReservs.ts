import { UserReservsState, UserReservsActionTypes, UserReservsActions } from "../../types/IUserReservs"

const initialState: UserReservsState = {
	isLoadedReservs: false,
	reservs: [],
}

const userReservs = (state = initialState, action: UserReservsActions) => {
	if (action.type === UserReservsActionTypes.SET_USER_RESERVS_IS_LOADED_RESERVS) {
		return {
			...state,
			isLoadedReservs: action.payload
		}
	}

	if (action.type === UserReservsActionTypes.SET_USER_RESERVS) {
		return {
			...state,
			reservs: action.payload
		}
	}

	return state
}

export default userReservs