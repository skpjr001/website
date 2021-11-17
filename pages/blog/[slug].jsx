import React from 'react'
import { Client } from "@notionhq/client"

import { getPostsFromNotionObject } from '../../lib/notionHelpers'

const Post = ({post}) => {
  console.log(post[0].paragraph.text[0].plain_text);
  return (
    <div>
      <h1>{post[0].paragraph.text[0].plain_text}</h1>
      <p>{post[1].paragraph.text[0].plain_text}</p>
    </div>
  )
}

export default Post


// This function gets called at build time
export async function getStaticPaths() {
  const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET });
  // Call an external API endpoint to get posts
  const notionBlogs = await notion.databases.query({ database_id: process.env.NotionBlogsDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}] });
  //const res = await fetch('https://.../posts')
  //const posts = await res.json()
  const posts = notionBlogs.results.map(getPostsFromNotionObject);

  //console.log(posts);
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
    
  }))


  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({params}) {
  // params contains the post `slug`.
  // If the route is like /posts/1, then params.slug is 1
  console.log(params)
  const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET });

  const blockId = '70dccce7-3f5c-4868-867c-01830982d8b9';
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  //console.log(response);
  
  //const res = await fetch(`https://.../posts/${params.id}`)
  //const post = await res.json()

  // Pass post data to the page via props
  return { props: { post: response.results } }
}