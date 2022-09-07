export interface validateValues {
	name?: string;
	surname?: string;

	email?: string;
	phone?: string;

	password?: string;
	repeat_password?: string;

	policyCheckbox?: string;
}

interface validateErrors {
	name?: string;
	surname?: string;

	email?: string;
	phone?: string;

	password?: string;
	repeat_password?: string;

	policyCheckbox?: string;
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

	if (!values.surname) {
		errors.surname = "Поле не может быть пустым";
	} else if (values.surname.length > max) {
		errors.surname = `Не более ${max} символов`;
	} else if (values.surname.length < min) {
		errors.surname = `Не менее ${min} символов`;
	}

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Ваш электронный адрес неверен";
	} else if (values.email.length > max) {
		errors.email = `Не более ${max} символов`;
	} else if (values.email.length < min) {
		errors.email = `Не менее ${min} символов`;
	}

	if (!values.phone) {
		errors.phone = "Поле не может быть пустым";
	} else if (values.phone.length > max) {
		errors.phone = `Не более ${max} символов`;
	} else if (values.phone.length < min) {
		errors.phone = `Не менее ${min} символов`;
	}

	if (!values.password) {
		errors.password = "Поле не может быть пустым";
	} else if (values.password.length > max) {
		errors.password = `Не более ${max} символов`;
	} else if (values.password.length < min) {
		errors.password = `Не менее ${min} символов`;
	}

	if (!values.repeat_password) {
		errors.repeat_password = "Поле не может быть пустым";
	} else if (values.repeat_password.length > max) {
		errors.repeat_password = `Не более ${max} символов`;
	} else if (values.repeat_password.length < min) {
		errors.repeat_password = `Не менее ${min} символов`;
	} else if (values.repeat_password !== values.password) {
		errors.repeat_password = `Не совпадают`;
	}

	if (!values.policyCheckbox) {
		errors.policyCheckbox = "Поле не может быть пустым";
	}

	return errors;
};
