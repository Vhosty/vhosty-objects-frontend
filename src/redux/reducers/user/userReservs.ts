import { UserReservsState, UserReservsActionTypes, UserReservsActions } from "../../types/IUserReservs"

const initialState: UserReservsState = {
	isLoadedReservs: false,
	reservs: [],
	reservsCreatedCount: 0,
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
			reservs: action.payload.data,
			reservsCreatedCount: action.payload.countCreated
		}
	}

	return state
}

export default userReservs