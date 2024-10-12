import React from 'react'

export const PostCard = ({data:{title,body}}) => {
  return (
    <div className='card-post'>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}
