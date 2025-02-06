export interface PatternConfig {
    regex: RegExp;
    regex_format?: RegExp;
    errorMessage?: string;
    required: boolean;
    label: string;
}

export interface FormData {
    user_name: string;
    user_email: string;
    company_name: string;
    user_phone: string;
    message: string;
}