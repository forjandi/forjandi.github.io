export interface PatternConfig {
    regex: RegExp;
    errorMessage?: string;
    required: boolean;
}

export interface FormData {
    user_name: string;
    company_name: string;
    user_email: string;
    user_phone: string;
}