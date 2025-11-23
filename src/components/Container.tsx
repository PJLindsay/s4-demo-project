import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react'

// A polymorphic wrapper component - won't know which component it will wrap

// as receives the identifier of the component that should be returned
type ContainerProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div'
  return <Component {...props}>{children}</Component>
}
