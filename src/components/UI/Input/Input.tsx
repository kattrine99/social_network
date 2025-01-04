import { InputHTMLAttributes } from "react"

interface InputComponents extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ type }: InputComponents, { placeholder }: InputComponents) => {
    return (
        <input type={type} placeholder={placeholder}/>
    )
}
