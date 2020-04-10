import React from 'react'

import styles from './disclaimer.module.css'

const Disclaimer = props => {
  return (
    <div className={styles.root}>
      <p>Copyright 2020 AS Fiskevegn. </p>
      <p hidden>
        Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
        by WeBeyond
      </p>
    </div>
  )
}

Disclaimer.DefaultProps = {}

export default Disclaimer
