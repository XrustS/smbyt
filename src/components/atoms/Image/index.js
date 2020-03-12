import React from "react"
import { Img } from "gatsby-image"

export const Image = ({ data, imageType = "fluid", ...other }) => (
  <Img fluid={data.placeholderImage.childImageSharp[imageType]} {...other} />
)
