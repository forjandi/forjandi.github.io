import type { FormData } from '../types/Form.types';
import { formFieldsPatterns } from '../config/Form.config';

export const validateInput = (value: string, fieldId: keyof FormData): boolean => {
    const pattern = formFieldsPatterns[fieldId];
    return pattern.regex.test(value);
};

export const getEmptyRequiredFields = (formData: FormData): string[] => {
    return Object.entries(formFieldsPatterns)
        .filter(([_, pattern]) => pattern.required)
        .filter(([key, _]) => !formData[key as keyof FormData].trim())
        .map(([key, _]) => key);
};

export const validateFormat = (formData: FormData): string[] => {
    return Object.entries(formFieldsPatterns)
        .filter(([key, pattern]) => pattern.regex_format && !pattern.regex_format.test(formData[key as keyof FormData]))
        .map(([key, _]) => key);
};
