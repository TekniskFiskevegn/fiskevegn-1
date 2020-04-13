import React from 'react'
import {buildImageObj, cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Svg from './svg'

import styles from './design.module.css'

const Design = ({
  svg,
  children,
  backgroundImage,
  darkOverlay,
  lightOverlay,
  split,
  flex,
  light,
  gradient,
  isStatic
}) => {
  if (backgroundImage) {
    let img
    if (backgroundImage.asset) {
      img = imageUrlFor(buildImageObj(backgroundImage))
        .width(1800)
        .height(Math.floor((9 / 16) * 1800))
        .fit('crop')
        .url()
    } else {
      img = backgroundImage
    }

    const inlineStyle = {
      backgroundImage: `url(${img})`
    }
    return (
      <div
        className={cn(
          styles.root,
          styles.backgroundImage,
          darkOverlay ? styles.darkOverlay : '',
          lightOverlay ? styles.lightOverlay : '',
          flex ? styles.flex : ''
        )}
        style={inlineStyle}
      >
        {split && <div className={styles.splitLeft} />}
        {split && <div className={styles.splitRight} />}
        {svg && <Svg {...svg} />}
        {children}
      </div>
    )
  }

  return (
    <div className={cn(styles.root, light ? styles.light : '', gradient ? styles.gradient : '')}>
      {svg && <Svg {...svg} />}
      {children}
    </div>
  )
}

Design.DefaultProps = {
  backgroundImage: false
}

export default Design
