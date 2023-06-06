import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h1>This is Footer</h1>
    </div>
  )
}

export default function DemoPage() {
  return (
    <div>
      <Header />
      <h1>Develop. Preview. Ship. 🚀</h1>
      <Footer />
    </div>
  )
}
