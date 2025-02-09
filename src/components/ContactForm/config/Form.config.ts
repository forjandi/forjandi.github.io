import type { PatternConfig, FormData } from "../types/Form.types";

export const formFieldsPatterns: { [key in keyof FormData]: PatternConfig } = {
  user_name: {
    regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/,
    errorMessage: "Campo obligatorio",
    required: true,
    label: "Nombre",
  },
  user_email: {
    regex: /^[a-zA-Z0-9._@\-]*$/,
    regex_format: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    errorMessage: "Ingrese un email válido",
    required: true,
    label: "Correo",
  },
  company_name: {
    regex: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ'\s]*$/,
    errorMessage: "Ingrese nombre de compañía",
    required: false,
    label: "Nombre de empresa",
  },
  user_phone: {
    regex: /^[0-9+\-\s]*$/,
    errorMessage: "Ingrese un teléfono válido",
    required: false,
    label: "Teléfono",
  },
  message: {
    regex: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!¡¿?@#&*_+()\-]*$/,
    errorMessage: "Campo obligatorio",
    required: true,
    label: "Mensaje",
  },
};

export const initialFormData: FormData = {
  user_name: "",
  user_email: "",
  company_name: "",
  user_phone: "",
  message: "",
};
