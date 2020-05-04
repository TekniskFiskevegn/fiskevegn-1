import React from 'react'
import propTypes from 'prop-types'
import {buildImageObj, cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import List from './list'

import styles from './presentation.module.css'

const Presentation = props => {
  const {title, text, image, listOfImages, attachedEmail, attachedFile, reverseFlow, locale} = props

  let nameForAttachedFile
  if (attachedFile) {
    // ?dl=<filename-of-your-choice.pdf>
    nameForAttachedFile = attachedFile.asset.url + `?dl=${title}+.pdf`
  }

  return (
    <div className={cn(styles.root, reverseFlow ? styles.reverseFlow : '')}>
      <div className={styles.text}>
        <div className={styles.textController}>
          <h2 className={styles.title}>{title}</h2>
          {text && <p>{text}</p>}
          {attachedEmail && (
            <a className={styles.link} href={'mailto:' + attachedEmail}>
              {attachedEmail}
            </a>
          )}
          {attachedFile && (
            <a className={styles.downloadLink} target='_blank' href={nameForAttachedFile}>
              {locale == 'en' ? 'Download Specification' : 'Last ned spesifikasjoner'}
            </a>
          )}
        </div>
      </div>
      <div className={styles.visuals}>{renderImages(image, listOfImages)}</div>
    </div>
  )
}

const renderImages = (image, listOfImages) => {
  if (image) {
    return (
      <img
        src={imageUrlFor(buildImageObj(image))
          .width(800)
          .height(Math.floor((9 / 16) * 1000))
          .fit('crop')
          .url()}
        alt={image.alt}
      />
    )
  } else if (listOfImages && listOfImages.length > 0) {
    return <List style='customListForPartners' listItem='ImageItem' nodes={listOfImages} />
  } else {
    return <p>Missing image</p>
  }
}

Presentation.propTypes = {}

export default Presentation
