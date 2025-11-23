import { ComponentPropsWithoutRef } from 'react'

// we merge our custom props with built-in props of input element with the &
type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props}></input>
    </p>
  )
}
