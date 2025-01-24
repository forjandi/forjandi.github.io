import * as React from "react"
import { cn } from "@/lib/utils"

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    textSize?: string
    textColor?: string
    emptyFields?: string[]
}

const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
    ({ className = "transition-colors", textSize = "text-base", emptyFields = [], ...props }, ref) => {
        return (
            <div className="relative h-16">
                <input
                    type={props.type || "text"}
                    className={cn(
                        "flex w-full border-b border-gray-500 bg-transparent px-3 py-2 text-gray-400",
                        "focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-blue-500",
                        "peer placeholder-transparent",
                        textSize,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <label
                    className={cn(
                        "absolute left-0 -top-6 text-xs sm:text-xs transition-all pointer-events-none text-gray-400",
                        "peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2",
                        "peer-focus:left-0 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-foreground"
                    )}
                >
                    <span className={cn(
                        "text-current transition-colors",
                        emptyFields.includes(props.id || "") && props.required ? "text-red-700" : ""
                    )}>
                        {props.placeholder} {props.required ? "*" : ""}
                    </span>
                </label>
            </div>
        )
    }
)

InputForm.displayName = "InputForm"

export { InputForm }
