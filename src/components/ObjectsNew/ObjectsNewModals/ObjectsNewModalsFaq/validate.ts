export interface validateValues {
	faq?: {
		title: string
		text: string
	}[];
}

interface validateErrors {
	faq?: {
		title: string
		text: string
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

	const faqArrayErrors: any = []

	if (values.faq) {
		values.faq.forEach((faqItem, index) => {
			const faqErrors: {
				title?: string
				text?: string
			} = {}

			if (!faqItem.title) {
				faqErrors.title = "Поле не может быть пустым";
				faqArrayErrors[index] = faqErrors
			} else if (faqItem.title.length > max) {
				faqErrors.title = `Не более ${max} символов`;
				faqArrayErrors[index] = faqErrors
			} else if (faqItem.title.length < min) {
				faqErrors.title = `Не менее ${min} символов`;
				faqArrayErrors[index] = faqErrors
			}

			if (!faqItem.text) {
				faqErrors.text = "Поле не может быть пустым";
				faqArrayErrors[index] = faqErrors
			} else if (faqItem.text.length > 1000) {
				faqErrors.text = `Не более ${1000} символов`;
				faqArrayErrors[index] = faqErrors
			} else if (faqItem.text.length < min) {
				faqErrors.text = `Не менее ${min} символов`;
				faqArrayErrors[index] = faqErrors
			}

			if (faqArrayErrors.length) {
				errors.faq = faqArrayErrors
			}
		})
	}

	return errors;
};
