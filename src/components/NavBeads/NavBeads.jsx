import React from "react"
import PropTypes from "prop-types"

import ScrollSpy from "react-scrollspy"

import styles from "./NavBeads.module.scss"

const NavBeads = props => {
  const navs = props.ids.map((name, idx) => {
    return (
      <li className={styles.navElement} key={name}>
        <a href={`#${name}`}>
          {props.names ? props.names[idx] : name}
        </a>
      </li>
    )
  })
  return (
    <ScrollSpy
      className={styles.navMenu}
      items={props.ids}
      currentClassName={styles.currentNav}
    >
      {navs}
    </ScrollSpy>
  )
}

NavBeads.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  names: PropTypes.arrayOf(PropTypes.string),
}

export default NavBeads
