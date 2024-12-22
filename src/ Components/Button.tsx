import React from 'react'
import Link from 'next/link'
interface Props{
    name: string,
    link: string,
}
const Button = (props: Props) => {
  return (
    <div>
      <Link href={`${props.link}`}>{props.name}</Link>
    </div>
  )
}

export default Button