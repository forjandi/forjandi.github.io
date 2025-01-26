import type { FormData } from './ContactForm.types';
import { formPatterns } from './ContactForm.config';

export const validateInput = (value: string, fieldId: keyof FormData): boolean => {
    const pattern = formPatterns[fieldId];
    return pattern.regex.test(value);
};

export const getEmptyRequiredFields = (formData: FormData): string[] => {
    return Object.entries(formPatterns)
        .filter(([_, pattern]) => pattern.required)
        .filter(([key, _]) => !formData[key as keyof FormData].trim())
        .map(([key, _]) => key);
};