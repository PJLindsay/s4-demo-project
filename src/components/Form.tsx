import type { FormEvent, ComponentPropsWithoutRef } from 'react'

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // get all values entered into any input field (as long as it has a name property)
    const formData = new FormData(event.currentTarget)
    // convert formData to a simpler object
    const data = Object.fromEntries(formData)
    // pass data to form that's handling the save
    onSave(data)
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  )
}
