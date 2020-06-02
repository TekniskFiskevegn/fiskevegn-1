import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import {cn} from '../lib/helpers'
import {TiArrowRight} from 'react-icons/ti'

import styles from './navigation.module.css'
import stylesItem from './navigation-item.module.css'
import utils from './utils.module.css'

const Navigation = ({nodes, template, locale}) => {
  return (
    <div className={styles.root}>
      <ul className={cn(styles.default, styles.custom, styles.boxShadow)}>
        {nodes &&
          nodes.map(node => {
            const {name, navigationText, slug, alternativeSlug} = node.basicTemplate
            const linkTo = () => {
              if (alternativeSlug) {
                if (locale === 'en') {
                  return `/${alternativeSlug}`
                } else {
                  return `/no/${alternativeSlug}`
                }
              } else {
                return `/${template[locale]}/${slug.current}`
              }
            }
            return (
              <li key={node.id}>
                <Link className={stylesItem.root} to={linkTo()}>
                  <div>
                    {name && (
                      <div className={utils.relative}>
                        <h3 className={cn(stylesItem.title, utils.relative)}>
                          {name}
                          <div className={stylesItem.iconContainer}>
                            <TiArrowRight className={stylesItem.icon} />
                          </div>
                        </h3>
                      </div>
                    )}
                    {navigationText && (
                      <div>
                        <span className={stylesItem.teaser}>{navigationText}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  nodes: PropTypes.array.isRequired
}

export default Navigation
