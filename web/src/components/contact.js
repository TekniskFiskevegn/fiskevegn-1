import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {buildImageObj, cn} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Intro from './intro'

import styles from './contact.module.css'

const Contact = ({intro, address, phone, email, map, image, reverseFlow, locale}) => {
  const {title, complementaryTitle, text} = intro

  // console.log('log address', address)

  return (
    <div className={styles.root}>
      <Intro title={title} complementaryTitle={complementaryTitle} text={text} marginBottom />
      <div className={cn(styles.wrapper, reverseFlow ? styles.reverseFlow : '')}>
        <div className={styles.visuals}>
          {image && (
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(800)
                .height(Math.floor((9 / 16) * 1000))
                .fit('crop')
                .url()}
              alt={image.alt}
            />
          )}
        </div>
        <div className={cn(styles.content)}>
          <div>
            <h3 className={styles.contentTitle}>
              {locale == 'en' ? 'Contact information' : 'Kontaktinformasjon'}
            </h3>
            {address && <p>{address}</p>}
            <ul className={styles.list}>
              {phone && (
                <li>
                  <a className={styles.link} href={'tel:' + phone}>
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a className={styles.link} href={'mailto:' + email}>
                    {email}
                  </a>
                </li>
              )}
              {map && (
                <li>
                  <a target='_blank' className={styles.mapLink} href={map}>
                    Google maps
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
  browseMoreHref: PropTypes.string,
  browseMoreText: PropTypes.string,
  reverseFlow: PropTypes.bool
}

export default Contact
