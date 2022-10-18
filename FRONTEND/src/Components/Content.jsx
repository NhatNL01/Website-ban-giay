import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'todos', 'users']

const Content = () => {
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type])
  console.log(tabs);
  return (
    <>
      {
        tabs.map((tab, index) => {
          return (
            <button
              key={index}
              style={type === tab ? {
                color: '#fff',
                backgroundColor: '#333',
                margin: '0 10px'
              } : {margin: '0 10px'}}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          )
        })
      }
      <ul>
        {
          posts.map((post, index) => {
            return (
              <li key={post.id}>{post.title || post.name}</li>
            )
          })
        }

      </ul>
    </>
  )
}

export default Content;
