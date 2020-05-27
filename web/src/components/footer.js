import React from 'react'
import {Link} from 'gatsby'
import Disclaimer from './disclaimer'
import InnerContainer from './inner-container'

import styles from './footer.module.css'

function Footer ({locale}) {
  return (
    <footer className={styles.root}>
      <InnerContainer>
        <div className={styles.wrapper}>
          <div className={styles.siteInfo}>
            <h4 className={styles.title}>AS Fiskevegn</h4>
            <p>Pernesvegen 35, 6717 Flatraket</p>
            <p>
              +47 57 85 84 00
              <br />
              facebook.com/fiskevegn
              <br />
              <a className={styles.link} href='mailto:sales@fiskevegn.no'>
                sales@fiskevegn.no
              </a>
            </p>
            <p>
              <Link to={locale == 'en' ? '/no' : '/'} className={styles.linkColor}>
                {locale == 'en' && <>Visit our Norwegian website</>}
                {locale == 'no' && <>Visit our English website</>}
              </Link>
            </p>
            {/* <Disclaimer /> */}
          </div>
        </div>
      </InnerContainer>
    </footer>
  )
}

export default Footer
