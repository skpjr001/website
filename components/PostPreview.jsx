import React from 'react'
import { MediaPreview } from "../components/MediaPreview"

export const PostPreview = ({post}) => {
  return (
    <MediaPreview
      title={post.title}
      text={post.text}
      url={`/blog/${post.slug}`}
      image={post.image}
    />
  )
}
