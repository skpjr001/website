import React from 'react'
import { Client } from "@notionhq/client"
import { About } from '../components/About'
import { Layout } from '../components/Layout'
import { useTheme } from 'next-themes'
import { getPostsFromNotionObject, getProjectsFromNotionObject } from '../lib/notionHelpers'
import { getVideosFromNotionObject } from '../lib/notionHelpers'

import { MediaPreview } from '../components/MediaPreview'
import { PostPreview } from '../components/PostPreview'
import { ProjectPreview } from '../components/ProjectPreview'

export default function Home({response}) {
  const { theme, setTheme } = useTheme();

  const videos = response.videos.map(getVideosFromNotionObject);
  const posts = response.blogs.map(getPostsFromNotionObject);
  const projects = response.projects.map(getProjectsFromNotionObject);
  //1920x960 for projects/blogs images
  //1280x720 for youtube images


  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">

        <div id="about">
          <About/>
        </div>

        {/* <button
          className="mt-16 px-4 py-2 text-gray-50 dark:text-gray-800 bg-gray-800 dark:bg-gray-50 font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          Change Theme Now
        </button> */}

        <div id="reel">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50">Recent Videos</h2>
            <h4 className="mt-2 text-gray-500">
              {`Videos on what I'm building and learning.`}
            </h4>
            <div className="sm:grid sm:grid-cols-2 sm:gap-10">
              {videos.map((video) => (
                <div key={video.url} className="mt-10">
                  <MediaPreview
                    type="youtube"
                    url={video.url}
                    title={video.title}
                    description={video.description}
                    image={video.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="blog">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50">Recent Posts</h2>
            <h4 className="mt-2 text-gray-500">
              {`Thoughts on what I'm building and learning.`}
            </h4>

            <div className="sm:grid sm:grid-cols-2 sm:gap-10">
              {posts.map((post) => (
                <div key={post.slug} className="mt-10">
                  <PostPreview post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="projects">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50">Recent Projects</h2>
            <h4 className="mt-2 text-gray-500">
              {`Thoughts on what I'm building and learning.`}
            </h4>

            <div className="sm:grid sm:grid-cols-2 sm:gap-10">
              {projects.map((project) => (
                <div key={project.title} className="mt-10">
                  <ProjectPreview 
                    title={project.title} 
                    description={project.description} 
                    tags={project.tags}
                    techStack={project.techStack}
                    url={project.url}
                    image={project.image} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET });

  const notionYoutube = await notion.databases.query({ database_id: process.env.NotionYoutubeDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}], page_size:2 });
  const notionBlogs = await notion.databases.query({ database_id: process.env.NotionBlogsDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}], page_size:2 });
  const notionProjects = await notion.databases.query({ database_id: process.env.NotionProjectsDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}], page_size:2 });
  return {
    props: {
      response:{
        videos:notionYoutube.results,
        blogs:notionBlogs.results,
        projects:notionProjects.results
      }
    }, // will be passed to the page component as props
  }
}
