import React, { useState } from 'react'

const ChangeContent = () => {
  const [content, setContent] = useState('HIT CLUB')
  const handleText = () => {
    setContent('Zooooo zooooo zoooo')
  }
  return (
    <div>
      <h1>{content}</h1>
      <button onClick={handleText}>Change Content</button>
    </div>
  )
}

export default ChangeContent;