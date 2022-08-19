export interface validateValues {
	description?: string;
}

interface validateErrors {
	description?: string;
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
		: 0;
	const max = process.env.REACT_APP_MAX_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MAX_INPUT_SYMBOLS)
		: 0;

	if (!values.description) {
		errors.description = "Поле не может быть пустым";
	} else if (values.description.length > max) {
		errors.description = `Не более ${max} символов`;
	} else if (values.description.length < min) {
		errors.description = `Не менее ${min} символов`;
	}

	return errors;
};
