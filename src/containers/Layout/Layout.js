import React from 'react'

const Layout = (props) => {
  return (
    <div>
      <p>This is a layout</p>
      {props.children}
    </div>
  )
}

export default Layout
