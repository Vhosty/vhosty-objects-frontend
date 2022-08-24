export interface validateValues {
	about?: string;
}

interface validateErrors {
	about?: string;
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const min = process.env.REACT_APP_MIN_INPUT_SYMBOLS
		? parseInt(process.env.REACT_APP_MIN_INPUT_SYMBOLS)
		: 0;
	const max = 5000;

	if (!values.about) {
		errors.about = "Поле не может быть пустым";
	} else if (values.about.length > max) {
		errors.about = `Не более ${max} символов`;
	} else if (values.about.length < min) {
		errors.about = `Не менее ${min} символов`;
	}

	return errors;
};
