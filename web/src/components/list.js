import React from 'react'
import {cn} from '../lib/helpers'
import NewsTeaser from './news-teaser'
import ImageItem from './image-item'
import LogoItem from './logo-item'

import styles from './list.module.css'

// Improvements:
// 1. Add support for browseMoreHref
// 2. Add more types of items

function List (props) {
  const {style, listItem, nodes, locale} = props
  // console.log('log locale in list', locale)
  return (
    <div className={styles.root}>
      <ul className={cn(styles.default, getCustomStyle(style))}>
        {nodes &&
          nodes.map((node, i) => {
            return (
              <li key={i}>
                <RenderListItem typeOfListItem={listItem} node={node} locale={locale} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

const RenderListItem = props => {
  const {node, typeOfListItem, locale} = props
  // console.log('log locale in renderlistitem', locale)
  switch (typeOfListItem) {
    case 'NewsTeaser':
      return <NewsTeaser {...node} locale={locale} />
    case 'ImageItem':
      return <ImageItem {...node} />
    case 'LogoItem':
      return <LogoItem {...node} />
    default:
      return <p>Missing type of list item</p>
  }
}

const getCustomStyle = style => {
  if (!style) {
    return
  }
  return cn(
    style == 'gridFix' ? styles.gridFix : '',
    style == 'oneHalf' ? styles.oneHalf : '',
    style == 'oneHalfAllTheWay' ? styles.oneHalfAllTheWay : '',
    style == 'oneHalfWithGapAndGridFix' ? styles.oneHalfWithGapAndGridFix : '',
    style == 'oneThird' ? styles.oneThird : '',
    style == 'oneWhole' ? styles.oneWhole : '',
    style == 'customListForPartners' ? styles.customListForPartners : ''
  )
}

List.defaultProps = {}

export default List
