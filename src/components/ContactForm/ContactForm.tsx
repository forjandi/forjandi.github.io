import * as React from "react"
import { InputForm } from "@/components/ui/inputForm"
import { ButtonForm } from "@/components/ui/buttonForm"
import type { FormData } from './ContactForm.types'
import { formPatterns, initialFormData } from './ContactForm.config'
import { validateInput, getEmptyRequiredFields } from './ContactForm.utils'
import ChannelInformation from "./ChannelInformation"
import Form from "./Form"

const ContactForm = () => {
    const [isSending, setIsSending] = React.useState<boolean>(false)
    const [isSent, setIsSent] = React.useState<boolean>(false)
    const [emptyFields, setEmptyFields] = React.useState<string[]>([])
    const [formData, setFormData] = React.useState<FormData>(initialFormData)

    const channels = [
        {
            name_channel: "Correo de soporte",
            description: "Nos comunicaremos en un plazo máximo de 24 horas.",
            name_link: "contact@forjandi.com",
            link: "mailto:contact@forjandi.com"
        },
        {
            name_channel: "WhatsApp",
            description: "Estaremos encantados de atenderte.",
            name_link: "+51 988652374",
            link: "tel:+51988652374"
        },
        {
            name_channel: "Chat support",
            description: "Chatee con nuestro soporte de chat, disponible 24/7.",
            name_link: "Empezar a chatear",
            link: "#show-chat"
        }
    ]


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
        console.log('Enviando...', formData)

        setTimeout(() => {
            setIsSent(true)
            setIsSending(false)

            setTimeout(() => {
                setIsSent(false)
                setEmptyFields([])

                setFormData({
                    user_name: '',
                    company_name: '',
                    user_email: '',
                    user_phone: '',
                    message: ''
                })
            }, 2000)
        }, 3000)
    }

    return (
        <div className="w-full space-y-5 md:space-x-0 flex flex-col md:flex-row items-center md:items-end md:justify-between">
            <div className='space-y-5 md:space-y-10 w-full md:w-4/6'>
                <h2 className='uppercase text-slate-900 dark:text-slate-100 text-center title-mobile md:title-tablet md:text-left lg:title-desktop'>Contáctanos</h2>
                <p className='text-slate-900 dark:text-slate-100 body-mobile text-left md:body-tablet lg:body-desktop'>
                    Nos comunicaremos contigo lo más pronto posible.
                </p>
                <ChannelInformation channels={channels}/>
            </div>
            <div className='text-center w-full md:w-1/6 hidden md:block'>
                <Form />
            </div>
        </div>
        

        // <div className="w-full max-h-screen mx-auto p-4 md:p-6">
        //     <div className="space-y-2 text-4xl sm:text-5xl md:text-6xl font-light text-center md:text-left">
        //         <h2>¿Tienes <span className="text-blue-500">preguntas?</span></h2>
        //         <h2>¿Estás <span className="text-blue-500">listo?</span></h2>
        //     </div>
        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 sm:mt-0 py-5 sm:py-8 md:py-16">
        //         <div className="space-y-2">

        //         </div>
        //         <div className="space-y-5">
        //             <InputForm
        //                 id="user_name"
        //                 type="text"
        //                 placeholder="Ingrese su nombre"
        //                 textSize="text-sm md:text-base"
        //                 onChange={handleChange}
        //                 value={formData.user_name}
        //                 required={formPatterns.user_name.required}
        //                 emptyFields={emptyFields}
        //             />
        //             <InputForm
        //                 id="company_name"
        //                 type="text"
        //                 placeholder="Ingrese nombre de la compañía"
        //                 textSize="text-sm md:text-base"
        //                 onChange={handleChange}
        //                 value={formData.company_name}
        //                 required={formPatterns.company_name.required}
        //                 emptyFields={emptyFields}
        //             />
        //             <InputForm
        //                 id="user_email"
        //                 type="email"
        //                 placeholder="Ingrese su correo"
        //                 textSize="text-sm md:text-base"
        //                 onChange={handleChange}
        //                 value={formData.user_email}
        //                 required={formPatterns.user_email.required}
        //                 emptyFields={emptyFields}
        //             />
        //             <InputForm
        //                 id="user_phone"
        //                 type="text"
        //                 placeholder="Teléfono"
        //                 textSize="text-sm md:text-base"
        //                 onChange={handleChange}
        //                 value={formData.user_phone}
        //                 required={formPatterns.user_phone.required}
        //                 emptyFields={emptyFields}
        //             />
        //         </div>
        //     </div>

        //     <div className="flex justify-center md:justify-end">
        //         <ButtonForm
        //             isSending={isSending}
        //             isSent={isSent}
        //             handleSubmit={handleSubmit}
        //         />
        //     </div>
        // </div>
    )
}

export default ContactForm

