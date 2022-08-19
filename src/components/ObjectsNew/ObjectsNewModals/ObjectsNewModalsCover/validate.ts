export interface validateValues {
	name?: string;
	address?: string
}

interface validateErrors {
	name?: string;
	address?: string
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
		: 0;
	const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
		: 0;

	if (!values.name) {
		errors.name = "Поле не может быть пустым";
	} else if (values.name.length > max) {
		errors.name = `Не более ${max} символов`;
	} else if (values.name.length < min) {
		errors.name = `Не менее ${min} символов`;
	}

	if (!values.address) {
		errors.address = "Поле не может быть пустым";
	} else if (values.address.length > max) {
		errors.address = `Не более ${max} символов`;
	} else if (values.address.length < min) {
		errors.address = `Не менее ${min} символов`;
	}

	return errors;
};
