import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import styles from './navigation-item.module.css'

const NavigationItem = props => {
  const url = `/${props.template}/${props.slug.current}`
  return (
    <Link className={styles.root} to={url}>
      <div className={styles.content}>
        {props.title && <h3 className={styles.title}>{props.title}</h3>}
        {props.teaser && <span className={styles.teaser}>{props.teaser}</span>}
      </div>
    </Link>
  )
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  slug: PropTypes.object
}

export default NavigationItem
