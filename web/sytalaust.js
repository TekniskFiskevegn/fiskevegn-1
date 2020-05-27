// Default language for the site
const DEFAULT_LOCALE = 'en'

// For logging props in every page, default is false
const LOG_IS_ACTIVE = true

// Site name
const SITE_NAME = ''

// Other languages for the site
const extraLanguages = ['no']

// Function used throughout the solution to generate correct locale
function getLocale (pageContext) {
  if (pageContext.locale) {
    return pageContext.locale
  }
  return DEFAULT_LOCALE
}

// Sytalaust Gatsby page mapping
function getPageStructure () {
  return [
    {
      name: 'about',
      localeName: 'om-oss',
      nav: {
        showInMenu: true,
        en: {
          displayName: 'About',
          url: '/about'
        },
        no: {
          displayName: 'Om oss',
          url: '/no/om-oss'
        }
      }
    },
    {
      name: 'products',
      localeName: 'produkter',
      nav: {
        showInMenu: true,
        en: {
          displayName: 'Products',
          url: '/products'
        },
        no: {
          displayName: 'Produkter',
          url: '/no/produkter'
        }
      }
    },
    {
      name: 'services',
      localeName: 'tjenester',
      nav: {
        showInMenu: true,
        en: {
          displayName: 'Services',
          url: '/services'
        },
        no: {
          displayName: 'Tjenester',
          url: '/no/tjenester'
        }
      }
    },
    {
      name: 'contact',
      localeName: 'kontakt',
      nav: {
        showInMenu: true,
        en: {
          displayName: 'Contact',
          url: '/contact'
        },
        no: {
          displayName: 'Kontakt',
          url: '/no/kontakt'
        }
      }
    },
    {
      name: 'archive',
      localeName: 'arkiv',
      nav: {
        showInMenu: false,
        en: {
          displayName: 'Archive',
          url: '/archive'
        },
        no: {
          displayName: 'Arkiv',
          url: '/no/arkiv'
        }
      }
    },
    {
      name: 'news',
      localeName: 'nyheter',
      nav: {
        showInMenu: false,
        en: {
          displayName: 'News',
          url: '/news'
        },
        no: {
          displayName: 'Nyheter',
          url: '/no/nyheter'
        }
      }
    },
    {
      name: 'shop',
      localeName: 'shop',
      nav: {
        showInMenu: false,
        en: {
          displayName: 'shop',
          url: '/shop'
        },
        no: {
          displayName: 'shop',
          url: '/no/shop'
        }
      }
    },
    {
      name: '404',
      localeName: '404',
      nav: {
        showInMenu: false,
        en: {
          displayName: '404',
          url: '/404'
        },
        no: {
          displayName: '404',
          url: '/no/404'
        }
      }
    }
  ]
}

// Function used to generate correct name and path for pages in other languages
function getlocalePageName (gatsbyPage) {
  const pageStructure = getPageStructure()
  let localePageName
  pageStructure.map(page => {
    if (gatsbyPage.path.includes(page.name)) {
      localePageName = page.localeName
    }
  })
  return localePageName
}

module.exports.LOG_IS_ACTIVE = LOG_IS_ACTIVE
module.exports.getPageStructure = getPageStructure
module.exports.getLocale = getLocale
module.exports.extraLanguages = extraLanguages
module.exports.getlocalePageName = getlocalePageName
