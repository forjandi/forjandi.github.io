import * as React from "react"
import iconWhatsapp from '../../assets/icon/whatsapp.svg';
import iconLinkedin from '../../assets/icon/linkedin.svg';
import iconGithub from '../../assets/icon/github.svg';
const Footer = () => {
    return (
        <div className="w-full max-h-screen mx-auto p-4 md:p-6 bg-black">
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-10 lg:gap-4 justify-between py-10 border-b border-gray-400">
                    <div className="w-full md:w-1/2">
                        <h2 className="uppercase font-medium text-base tracking-widest py-10 text-gray-100">Forjandi</h2>
                        <div className="flex flex-row gap-16 sm:gap-32 text-gray-300">
                            <div className="flex flex-col space-y-2">
                                <a href="#">Servicios</a>
                                <a href="#">Nosotros</a>
                                <a href="#">Blog</a>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <a href="#">Términos de uso</a>
                                <a href="#">Políticas de privacidad</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="uppercase font-medium text-base tracking-widest py-10 text-gray-100">Contacto</h2>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                            <a href="#">contact@forjandi.com</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col-reverse md:flex-row items-center md:justify-between mt-10 sm:mt-16 pb-10">
                    <div className="text-sm sm:text-base mt-5 md:mt-0 font-extralight">
                        <p>Diseñado por Forjandi - 2025 ©</p>
                    </div>
                    <div className="flex space-x-7 text-gray-300">
                        <a href="">
                            <img src={iconWhatsapp.src} alt="WhatsApp Icon" className="h-5 w-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                        </a>
                        <a href="">
                            <img src={iconLinkedin.src} alt="WhatsApp Icon" className="h-5 w-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                        </a>
                        <a href="">
                            <img src={iconGithub.src} alt="WhatsApp Icon" className="h-5 w-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer