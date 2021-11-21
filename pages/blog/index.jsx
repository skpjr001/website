import React from 'react'
import { Client } from "@notionhq/client"

import { Layout } from '../../components/Layout'
import { PostPreview } from '../../components/PostPreview'
import { getPostsFromNotionObject } from '../../lib/notionHelpers'


export default function BlogPage({response}) {

  const posts = response.results.map(getPostsFromNotionObject);
  //1920x960

  return (
    <Layout>
      <div className="container px-4 mx-auto mt-24">
        <h1 className="text-4xl font-extrabold text-gray-800">Blog</h1>
        <h4 className="mt-2 text-gray-500">
          {`Thoughts on what I'm building and learning.`}
        </h4>
        <div className="mt-8 space-y-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="mt-6 sm:grid sm:grid-cols-2 sm:gap-10"
            >
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET });
  const response = await notion.databases.query({ database_id: process.env.NotionBlogsDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}] });
  
  return {
    props: {response}, // will be passed to the page component as props
    revalidate: 3500,
  }
}
