import { type ComponentPropsWithoutRef } from "react"

// return either an Anchor/Link or a button
// achieved with a discriminated union

type ButtonProps = {
  el: 'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
  el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props
  if (props.el === 'anchor') {
    return <a className="button" {...props}></a>
  }

  return <button className="button" {...props}></button>
}