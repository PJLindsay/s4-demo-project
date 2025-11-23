import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'

// should describe object returned from useImperativeHandle
// (the value of the ref here)
export type FormHandle = {
  clear: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null)

  // used if you want to expose callable functions to another component
  // only works in a component that receives forwardedRef
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING')
        form.current?.reset()
      },
    }
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // get all values entered into any input field (as long as it has a name property)
    const formData = new FormData(event.currentTarget)
    // convert formData to a simpler object
    const data = Object.fromEntries(formData)
    // pass data to form that's handling the save
    onSave(data)

    form.current?.reset()
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  )
})

export default Form
