import { type ComponentPropsWithoutRef } from 'react'

// return either an Anchor/Link or a button
type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never }
type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string }

// we can use a Type predicate
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>
  }

  return <button className="button" {...props}></button>
}
