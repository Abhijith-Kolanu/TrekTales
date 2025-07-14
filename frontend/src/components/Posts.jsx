import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

const Posts = () => {
  const { posts } = useSelector(store => store.post);
  console.log("📦 Redux posts:", posts);
  return (
    <div className="flex flex-col items-center w-full">
      {
        posts.map((post) => <Post key={post._id} post={post} />)
      }
    </div>
  )
}

export default Posts