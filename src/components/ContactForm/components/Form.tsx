import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Button from "../../global/Button";
import {
  validateInput,
  getEmptyRequiredFields,
  validateFormat,
  sendMail,
} from "../utils/Form.utils";
import type { FormData } from "../types/Form.types";
import { formFieldsPatterns, initialFormData } from "../config/Form.config";

const FormComponent: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [getErrorsFields, setErrorsFields] = React.useState<string[]>([]);
  const [sendStatus, setSendStatus] = React.useState<
    "sending" | "sent" | "error" | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (validateInput(value, id as keyof FormData)) {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async () => {
    setErrorsFields([]);
    const emptyFields = getEmptyRequiredFields(formData);
    const invalidFormatFields = validateFormat(formData);
    const errorsFields = [...emptyFields, ...invalidFormatFields];

    if (errorsFields.length > 0) {
      setErrorsFields(errorsFields);
      return;
    }

    setSendStatus("sending");
    const response = await sendMail(formData);
    if (response.ok) {
      setSendStatus("sent");
      setFormData({
        user_name: "",
        user_email: "",
        company_name: "",
        user_phone: "",
        message: "",
      });
    } else {
      setSendStatus("error");
    }

    setTimeout(() => {
      setSendStatus(null);
    }, 3000);
  };

  return (
    <div className="w-full p-5 flex flex-col gap-4 shadow-lg md:shadow-none rounded-xl backdrop-blur-xs bg-stone-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-100">
      <div className="grid w-full items-center gap-1.5">
        {Object.keys(initialFormData).map((key) => (
          <div className="grid w-full items-center gap-1.5" key={key}>
            <Label
              htmlFor={key}
              className="text-base lg:text-xl font-normal text-slate-900 dark:text-zinc-300"
            >
              {formFieldsPatterns[key as keyof FormData].label}
              {formFieldsPatterns[key as keyof FormData].required && "*"}
            </Label>
            {key === "message" ? (
              <Textarea
                id={key}
                className="border-stone-300 dark:border-slate-300 shadow-none bg-transparent"
                onChange={handleChange}
                value={formData[key as keyof FormData]}
                required={formFieldsPatterns[key as keyof FormData].required}
              />
            ) : (
              <Input
                type={key === "user_email" ? "email" : "text"}
                id={key}
                className="border-stone-300 dark:border-slate-300 shadow-none bg-transparent"
                onChange={handleChange}
                value={formData[key as keyof FormData]}
                required={formFieldsPatterns[key as keyof FormData].required}
              />
            )}
            <p
              className={`transition-opacity duration-150 text-xs text-muted-foreground text-red-500 dark:text-red-400 ${
                getErrorsFields.indexOf(key) != -1 ? "opacity-100" : "opacity-0"
              }`}
            >
              {formFieldsPatterns[key as keyof FormData].errorMessage}
            </p>
          </div>
        ))}
      </div>
      <div className="text-right w-full">
        <Button
          onClick={handleSubmit}
          className={`text-base lg:text-xl px-4 py-2 w-32 relative overflow-hidden ${sendStatus != null && "pointer-events-none"}`}
        >
          <span
            className={`transition ${sendStatus != null ? "opacity-0 duration-100" : "opacity-100 duration-500"}`}
          >
            Enviar
          </span>
          <span
            className={`left-0 top-0 absolute flex items-center animate-spin justify-center w-full h-full ${sendStatus == "sending" ? "opacity-100" : "opacity-0"}`}
          >
            <svg
              className={`w-6 h-6  opacity-100 scale-100 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
          <span className="text-zinc-300 dark:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className={`stroke-current w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 transition-all duration-300 ${
                sendStatus === "sent"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span className="text-zinc-300 dark:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                sendStatus === "error"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </Button>
        <div
          className={`mt-5 ${sendStatus === "error" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        >
          <p className="text-red-400 text-center">
            Ups! Hubo un error, vuelve a intentarlo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
