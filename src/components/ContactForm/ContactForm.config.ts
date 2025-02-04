import type { PatternConfig, FormData } from './ContactForm.types';

export const formPatterns: { [key in keyof FormData]: PatternConfig } = {
    user_name: {
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/,
        required: true
    },
    company_name: {
        regex: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]*$/,
        required: false
    },
    user_email: {
        regex: /^[a-zA-Z0-9._@\-]*$/,
        errorMessage: 'Email inválido',
        required: true
    },
    user_phone: {
        regex: /^[0-9+\-\s]*$/,
        required: false
    },
    message: {
        regex: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?@#&*()\-]*$/,
        required: true
    },
};

export const initialFormData: FormData = {
    user_name: '',
    user_email: '',
    company_name: '',
    user_phone: '',
    message: ''
};