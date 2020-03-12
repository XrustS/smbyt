import React from "react"
import { Container } from "./atoms/Container"
import { Col, Row } from "./atoms/Grid"
import { Logo } from "./atoms/Logo"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <Logo />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
