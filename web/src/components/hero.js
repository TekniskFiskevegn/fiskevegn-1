import React from 'react'
import PropTypes from 'prop-types'
import {buildImageObj, cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './hero.module.css'

const Hero = ({image = null, locale}) => {
  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <img
        src={imageUrlFor(buildImageObj(image))
          .width(1800)
          .height(Math.floor((9 / 16) * 1800))
          .fit('crop')
          .url()}
        alt={image.alt}
      />
      <div className={styles.caption}>
        <h2 className={styles.captionTitle}>
          {locale == 'en'
            ? 'World leading manufacturer of longline systems and fishing gear'
            : 'Verdensledende produsent av linesystem og fiskeredskaper'}
        </h2>
      </div>
    </div>
  )
}

Hero.propTypes = {
  image: PropTypes.object.isRequired
}

export default Hero
