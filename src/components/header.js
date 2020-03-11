import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className="container">
        <div className="logo">
          <div className="flex center">
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            <span className="logo__main"> Строй</span>{" "}
            <span className="logo__second">Модуль</span>{" "}
            <span className="logo__gray">Быт </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
