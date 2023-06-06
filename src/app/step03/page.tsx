'use client';
import Image from 'next/image'
import { Header, Footer } from './child'
import { useState } from 'react'

export default function DemoPage() {
  const names = ["Taro", "Jiro", "saburo"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log("increment like count")
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title={"React"}/>
      <h1>Develop. Preview. Ship. 🚀</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
      <Footer />
    </div>
  )
}
