import * as React from "react"
import { InputForm } from "@/components/ui/inputForm"
import { ButtonForm } from "../ui/buttonForm"

const ContactForm = () => {

    const [isSending, setIsSending] = React.useState<boolean>(false)
    const [isSent, setIsSent] = React.useState<boolean>(false)
    const [emptyFields, setEmptyFields] = React.useState<string[]>([])
    const [formData, setFormData] = React.useState({
        user_name: '',
        company_name: '',
        user_email: '',
        user_phone: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = () => {
        // Validación formulario
        const requiredFields = {
            user_name: !formData.user_name,
            user_email: !formData.user_email
        }
        const emptyFields: string[] = Object.keys(requiredFields).filter(key => requiredFields[key as keyof typeof requiredFields])

        if (emptyFields.length > 0) {
            setEmptyFields(emptyFields)
            return
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
        <div className="w-full max-h-screen max-w-7xl mx-auto p-4 md:p-6">
            <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-light">¿Tienes <span className="text-blue-500">preguntas?</span></h2>
                <h2 className="text-4xl md:text-6xl font-light">¿Estas <span className="text-blue-500">listo?</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
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
                        required
                        emptyFields={emptyFields}
                    />
                    <InputForm
                        id="company_name"
                        type="text"
                        placeholder="Ingrese nombre de la compañía"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.company_name}
                    />
                    <InputForm
                        id="user_email"
                        type="email"
                        placeholder="Ingrese su correo"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.user_email}
                        required
                        emptyFields={emptyFields}
                    />
                    <InputForm
                        id="user_phone"
                        type="text"
                        placeholder="Teléfono"
                        textSize="text-sm md:text-base"
                        onChange={handleChange}
                        value={formData.user_phone}
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

