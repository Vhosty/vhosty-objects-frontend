export interface validateValues {
	rooms?: {
		name: string
		bookingPercent: string
		price: string

		bookingType: string

		options: {
			bookingPercent: string
			price: string
			bookingType: string
		}[]
	}[];
}

interface validateErrors {
	rooms?: {
		name: string
		bookingPercent: string
		price: string

		options: {
			bookingPercent: string
			price: string
		}[]
	}[];
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
		: 0;
	const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
		: 0;

	const roomsArrayErrors: any = []

	if (values.rooms) {
		values.rooms.forEach((room, index) => {
			const roomErrors: {
				name?: string
				bookingPercent?: string
				price?: string

				options?: {
					bookingPercent?: string
					price?: string
				}[]
			} = {}

			if (!room.name) {
				roomErrors.name = "Поле не может быть пустым";
				roomsArrayErrors[index] = roomErrors
			} else if (room.name.length > max) {
				roomErrors.name = `Не более ${max} символов`;
				roomsArrayErrors[index] = roomErrors
			} else if (room.name.length < min) {
				roomErrors.name = `Не менее ${min} символов`;
				roomsArrayErrors[index] = roomErrors
			}




			if (room.bookingType !== "booking-without-prepayment") {
				if (!room.bookingPercent) {
					roomErrors.bookingPercent = "Поле не может быть пустым";
					roomsArrayErrors[index] = roomErrors
				} else if (parseInt(room.bookingPercent) > 100) {
					roomErrors.bookingPercent = `Не более 100`;
					roomsArrayErrors[index] = roomErrors
				} else if (parseInt(room.bookingPercent) < min) {
					roomErrors.bookingPercent = `Не менее 1`;
					roomsArrayErrors[index] = roomErrors
				}
			}


			if (!room.price) {
				roomErrors.price = "Поле не может быть пустым";
				roomsArrayErrors[index] = roomErrors
			} else if (room.price.length > max) {
				roomErrors.price = `Не более ${max} символов`;
				roomsArrayErrors[index] = roomErrors
			} else if (room.price.length < min) {
				roomErrors.price = `Не менее ${min} символов`;
				roomsArrayErrors[index] = roomErrors
			}

			if (room.options) {
				const optionArrayErrors: any = []

				room.options.forEach((option, optionIndex) => {
					const roomOptionErrors: {
						bookingPercent?: string
						price?: string
					} = {}

					if (option.bookingType !== "booking-without-prepayment") {
						if (!option.bookingPercent) {
							roomOptionErrors.bookingPercent = "Поле не может быть пустым";
							optionArrayErrors[optionIndex] = roomOptionErrors
						} else if (parseInt(option.bookingPercent) > 100) {
							roomOptionErrors.bookingPercent = `Не более 100`;
							optionArrayErrors[optionIndex] = roomOptionErrors
						} else if (parseInt(option.bookingPercent) < min) {
							roomOptionErrors.bookingPercent = `Не менее 1`;
							optionArrayErrors[optionIndex] = roomOptionErrors
						}
					}

					if (!option.price) {
						roomOptionErrors.price = "Поле не может быть пустым";
						optionArrayErrors[optionIndex] = roomOptionErrors
					} else if (option.price.length > max) {
						roomOptionErrors.price = `Не более ${max} символов`;
						optionArrayErrors[optionIndex] = roomOptionErrors
					} else if (option.price.length < min) {
						roomOptionErrors.price = `Не менее ${min} символов`;
						optionArrayErrors[optionIndex] = roomOptionErrors
					}
				})

				if (optionArrayErrors.length) {
					roomErrors.options = optionArrayErrors
					optionArrayErrors[index] = roomErrors
				}
			}

			if (roomsArrayErrors.length) {
				errors.rooms = roomsArrayErrors
			}
		})
	}

	return errors;
};
