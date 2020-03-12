import React from "react"

const getPrepareClassName = prop => (prop ? `-${prop}` : "")

export const Col = ({ children, screen, size }) => (
  <div
    className={`col${getPrepareClassName(screen)}${getPrepareClassName(size)}`}
  >
    {children}
  </div>
)

export const Row = ({ children, ...oherProps }) => (
  <div className="row" {...oherProps}>
    {children}
  </div>
)
