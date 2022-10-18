import React, { useState } from 'react'

const ChangeColor = () => {
  const [color, setColor] = useState('green')

  const changeColor = () => {
    setColor('red')
  }
  return (
    <div>
      <h1 style={{color}}>Click phía dưới để đổi màu chữ</h1>
      <button onClick={changeColor}>Change</button>
    </div>
  )
}

export default ChangeColor;
