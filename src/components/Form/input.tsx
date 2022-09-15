import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className='w-[408] bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
        />
    )
}