import React from "react"

export const Container = ({ children }) => (
  <div className="container">{children}</div>
)
export const FluidContainer = ({ children }) => (
  <div className="container-fluid">{children}</div>
)
export const BreakPointContainer = ({ bp = "md", children }) => (
  <div className={`container-${bp}`}>{children}</div>
)
