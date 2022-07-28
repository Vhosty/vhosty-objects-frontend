import { Dispatch } from "react"

import $api from '../../../http';

export const fetchUserAboutMe = () => {
	return async (dispatch: Dispatch<any>) => {
		$api.get("/companies/my-company").then(({data}) => {
			console.log(data)
		})
	}
}