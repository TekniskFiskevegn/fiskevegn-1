import React from 'react'
import {Link} from 'gatsby'
import Icon from './icon'
import {cn} from '../lib/helpers'
import {getPageStructure} from '../../sytalaust'

import styles from './header.module.css'
import utils from './utils.module.css'

const pageStructure = getPageStructure()
const menuLinks = pageStructure.filter((page, i) => {
  return page.nav.showInMenu
})

const Header = ({
  locale,
  location,
  currentPage,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  isCustomHeader
}) => {
  let path = location.pathname
  if (currentPage) {
    path = currentPage
  }

  return (
    <div className={cn(styles.root, isCustomHeader && styles.customHeader)}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to={locale == 'en' ? '/' : '/no'}>
            <img src='/logo.png' alt='Fiskevegn' />
            <h1 hidden>{siteTitle}</h1>
          </Link>
          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol={showNav ? 'close' : 'hamburger'} />
          </button>
        </div>
        <div>
          <nav className={cn(styles.nav, showNav && styles.showNav)}>
            <ul>
              {menuLinks.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={item.nav[locale].url}
                      className={path.includes(item.nav[locale].url) ? styles.activeLink : ''}
                    >
                      {item.nav[locale].displayName}
                    </Link>
                  </li>
                )
              })}
              <li className={styles.navLinkShop}>
                <a href='https://fiskevegn.myshopify.com'>Shop</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.shopButton}>
          <a href='https://fiskevegn.myshopify.com' className={utils.btn}>
            Shop
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header

// <div className={styles.branding}>
//           <Link to={locale == 'en' ? '/' : '/no'}>
//             <img src='/logo.png' alt='Fiskevegn' />
//             <h1 hidden>{siteTitle}</h1>
//           </Link>
//           <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
//             <Icon symbol={showNav ? 'close' : 'hamburger'} />
//           </button>
//         </div>

//         <nav className={cn(styles.nav, showNav && styles.showNav)}>
//           <ul>
//             {menuLinks.map((item, i) => {
//               return (
//                 <li key={i}>
//                   <Link
//                     to={item.nav[locale].url}
//                     className={path.includes(item.nav[locale].url) ? styles.activeLink : ''}
//                   >
//                     {item.nav[locale].displayName}
//                   </Link>
//                 </li>
//               )
//             })}
//           </ul>
//         </nav>
//         <div>
//           <a href='' className={utils.btn}>
//             Shop
//           </a>
//         </div>
