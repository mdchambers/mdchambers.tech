import React from 'react'

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
    </div>
  )
}

export default Layout
