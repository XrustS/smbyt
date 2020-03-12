import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row } from "../Grid"
import "./logo.scss"

export const Logo = () => {
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
    <Row className="row align-items-center logo">
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      <span className="logo__first">Быт</span>
      <span className="logo__second">Строй</span>
      <span className="logo__three">Сервис</span>
    </Row>
  )
}
