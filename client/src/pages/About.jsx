import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>
          About Us
        </title>
        <meta
          name="description"
          content="Description for Tutorial for React Helmet"
        />
      </Helmet>
      
    </div>

  )
}

export default About