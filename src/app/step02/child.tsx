import Image from 'next/image'

type HeaderProps = {
  title: string
}

export const Header = (props: HeaderProps) => {
  //console.log(props)
  return (
    <div>
      <h1>This is Header title={props.title}</h1>
    </div>
  )
}

export const Footer = () => {
  return (
    <div>
      <h1>This is Footer</h1>
    </div>
  )
}
