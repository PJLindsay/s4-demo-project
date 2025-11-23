import { forwardRef, type ComponentPropsWithoutRef } from 'react'

// we merge our custom props with built-in props of input element with the &
type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref}></input>
    </p>
  )
})

export default Input
