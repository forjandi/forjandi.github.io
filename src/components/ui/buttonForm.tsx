import * as React from "react"

interface ButtonFormProps {
    isSending: boolean
    isSent: boolean
    handleSubmit: () => void
}

export const ButtonForm: React.FC<ButtonFormProps> = ({
    isSending,
    isSent,
    handleSubmit
}) => {
    return (
        <button
            className={`${!isSent ? 'bg-gray-300' : 'bg-blue-500'} text-gray-900 w-full md:w-1/2 rounded-full mx-auto group relative overflow-hidden transition-all duration-300 h-10 md:h-14 font-normal ${isSending || isSent ? 'w-10 md:w-14 aspect-square' : 'w-full'}`}
            onClick={handleSubmit}
            disabled={isSending}
        >
            <span className={`text-lg md:text-2xl flex items-center justify-between transition-all duration-300 pl-5 pr-3 ${isSending || isSent ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                Enviar
                <span className="bg-gray-950 rounded-full p-2 md:p-3 w-8 h-8 md:w-12 md:h-12 text-gray-300">
                    <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M25.1437 12.5296C24.975 12.2343 24.7218 12.0233 24.4265 11.8546L4.97808 0.970223C4.64058 0.801473 4.26089 0.717098 3.8812 0.759286C3.50152 0.801473 3.16402 0.928036 2.8687 1.18116C2.57339 1.43429 2.36245 1.77179 2.27808 2.10929C2.15152 2.48897 2.1937 2.86866 2.32027 3.24835L5.94839 13.4999L2.32027 23.7515C2.1937 24.1312 2.1937 24.5108 2.27808 24.8483C2.36245 25.228 2.57339 25.5233 2.8687 25.7765C3.16402 26.0296 3.50152 26.1562 3.8812 26.1983C3.92339 26.1983 4.00777 26.1983 4.04995 26.1983C4.34527 26.1983 4.68277 26.114 4.97808 25.9452L24.4265 15.0608C24.7218 14.8921 24.975 14.6812 25.1437 14.3858C25.3125 14.0905 25.3968 13.753 25.3968 13.4577C25.3968 13.1624 25.3125 12.8249 25.1437 12.5296ZM4.13433 2.65772L21.7687 12.5296H7.63589L4.13433 2.65772ZM4.13433 24.3421L7.67808 14.4702H21.8109L4.13433 24.3421Z" fill="currentColor" />
                    </svg>
                </span>
            </span>
            <span className={`left-0 top-0 absolute flex items-center animate-spin justify-center w-full h-full ${isSending ? 'opacity-100' : 'opacity-0'}`}>
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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 transition-all duration-300 ${isSent ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </button>
    )
}