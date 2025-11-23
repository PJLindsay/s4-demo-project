import { ElementType } from 'react'

// A polymorphic wrapper component
// won't know which component it will wrap

// as receives the identifier of the component that should be returned
type ContainerProps = {
  as: ElementType
}

export default function Container({ as }: ContainerProps) {
  const Component = as
  return <Component />
}
