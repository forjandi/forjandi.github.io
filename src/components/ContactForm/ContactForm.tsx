import * as React from "react"
import { InputForm } from "@/components/ui/inputForm"
import { ButtonForm } from "@/components/ui/buttonForm"
import type { FormData } from './ContactForm.types'
import { formPatterns, initialFormData } from './ContactForm.config'
import { validateInput, getEmptyRequiredFields } from './ContactForm.utils'

const ContactForm = () => {
    const [isSending, setIsSending] = React.useState<boolean>(false)
    const [isSent, setIsSent] = React.useState<boolean>(false)
    const [emptyFields, setEmptyFields] = React.useState<string[]>([])
    const [formData, setFormData] = React.useState<FormData>(initialFormData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        
        if (validateInput(value, id as keyof FormData)) {
            setFormData({
                ...formData,
                [id]: value
            });
        }
    }

    const handleSubmit = () => {
        const emptyRequiredFields = getEmptyRequiredFields(formData);

        if (emptyRequiredFields.length > 0) {
            setEmptyFields(emptyRequiredFields);
            return;
        }

        setIsSending(true)
        // Lógica de envío real
        console.log('Enviando...', formData)

        setTimeout(() => {
            // Indicar que se esta enviando
            setIsSent(true)
            setIsSending(false)



            setTimeout(() => {
                // Indicar que se envió correctamente
                setIsSent(false)
                setEmptyFields([])

                // Resetear el formulario después del envío
                setFormData({
                    user_name: '',
                    company_name: '',
                    user_email: '',
                    user_phone: ''
                })
            }, 2000)
        }, 3000)
    }

    return (
        <div className="w-full max-h-screen mx-auto p-4 md:p-6">
            <div className="space-y-2 text-4xl sm:text-5xl md:text-6xl font-light text-center md:text-left">
                <h2>¿Tienes <span className="text-blue-500">preguntas?</span></h2>
                <h2>¿Estás <span className="text-blue-500">listo?</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 sm:mt-0 py-5 sm:py-8 md:py-16">
                <div className="space-y-2">

                </div>
                <div className="space-y-5">
                    <InputForm
                        id="user_name"
                        type="text"
                        placeholder="Ingrese su nombre"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.user_name}
                        required={formPatterns.user_name.required}
                        emptyFields={emptyFields}
                    />
                    <InputForm
                        id="company_name"
                        type="text"
                        placeholder="Ingrese nombre de la compañía"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.company_name}
                        required={formPatterns.company_name.required}
                        emptyFields={emptyFields}
                    />
                    <InputForm
                        id="user_email"
                        type="email"
                        placeholder="Ingrese su correo"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.user_email}
                        required={formPatterns.user_email.required}
                        emptyFields={emptyFields}
                    />
                    <InputForm
                        id="user_phone"
                        type="text"
                        placeholder="Teléfono"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.user_phone}
                        required={formPatterns.user_phone.required}
                        emptyFields={emptyFields}
                    />
                </div>
            </div>

            <div className="flex justify-center md:justify-end">
                <ButtonForm
                    isSending={isSending}
                    isSent={isSent}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default ContactForm

