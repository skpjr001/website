import React from 'react'
import { Client } from "@notionhq/client"

import { Layout } from '../../components/Layout';
import { ProjectPreview } from '../../components/ProjectPreview';
import {getProjectsFromNotionObject} from "../../lib/notionHelpers";

export default function ProjectsPage({response}) {

  const projects = response.results.map(getProjectsFromNotionObject);
  //1920x960
  return (
    <Layout>
      <div className="container px-4 mx-auto mt-24">
        <h1 className="text-4xl font-extrabold text-gray-800">Projects</h1>
        <h4 className="mt-2 text-gray-500">
          {`Thoughts on what I'm building, learning and Shipping.`}
        </h4>
        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="mt-6 sm:grid sm:grid-cols-2 sm:gap-10"
            >
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
    </Layout>
  )
}

export async function getStaticProps(context) {
  const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET });
  const databaseId = 'ee175407c20f47539212a8bdfff7f207';
  const response = await notion.databases.query({ database_id: process.env.NotionProjectsDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}] });
  return {
    props: {response}, // will be passed to the page component as props
    revalidate:3500,
  }
}
