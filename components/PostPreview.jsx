import React from 'react'
import { MediaPreview } from "../components/MediaPreview"

export const PostPreview = ({post}) => {
  return (
    <MediaPreview
      title={post.title}
      description={post.description}
      url={`/blog/${post.slug}`}
      image={post.image}
    />
  )
}
