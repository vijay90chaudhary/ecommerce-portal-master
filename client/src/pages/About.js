import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <img
        src="/images/b2.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"} />
        <h1>About Page</h1>
    </Layout>
  )
}

export default About