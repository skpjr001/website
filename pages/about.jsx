import React from 'react'
import { Layout } from '../components/Layout'

export const about = () => {

  
  return (
    <Layout>
      <div className="container px-4 mx-auto mt-24">
        <h1 className="text-4xl font-extrabold text-gray-800">About Me</h1>
        <h4 className="mt-2 text-gray-500">
          {`A little about myself.`}
        </h4>
      </div>
    </Layout>
  )
}

export default about;
