import Image from 'next/image'
import { Header } from './child'
import { Footer } from './child'

export default function DemoPage() {
  return (
    <div>
      <Header title={"React"}/>
      <h1>Develop. Preview. Ship. 🚀</h1>
      <Footer />
    </div>
  )
}
