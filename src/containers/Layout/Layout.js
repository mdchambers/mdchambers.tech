import React from 'react'

import styles from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div className={styles.main} style={{background: `url('img/waves.png') top center no-repeat`} }>
      {props.children}
    </div>
  )
}

export default Layout
