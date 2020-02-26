// Default language for the site
const DEFAULT_LOCALE = "en";

// Site name
const SITE_NAME = "";

// Other languages for the site
export const extraLanguages = ["no"];

// Function used throughout the solution to generate correct locale
export function getLocale(pageContext) {
  if (pageContext.locale) {
    return pageContext.locale;
  }
  return DEFAULT_LOCALE;
}

// Sytalaust Gatsby page mapping
export function getPageStructure() {
  return [
    {
      name: "about",
      localeName: "om-oss",
      nav: {
        en: {
          displayName: "About us",
          url: "/about"
        },
        no: {
          displayName: "Om oss",
          url: "/om-oss"
        }
      }
    },
    {
      name: "products",
      localeName: "produkter",
      nav: {
        en: {
          displayName: "Products",
          url: "/products"
        },
        no: {
          displayName: "Produkter",
          url: "/produkter"
        }
      }
    },
    {
      name: "services",
      localeName: "tjenester",
      nav: {
        en: {
          displayName: "Services",
          url: "/services"
        },
        no: {
          displayName: "Tjenester",
          url: "/tjenester"
        }
      }
    },
    {
      name: "contact",
      localeName: "kontakt",
      nav: {
        en: {
          displayName: "Contact",
          url: "/contact"
        },
        no: {
          displayName: "Kontakt",
          url: "/kontakt"
        }
      }
    },
    {
      name: "shop",
      localeName: "shop",
      nav: {
        en: {
          displayName: "Shop",
          url: "/shop"
        },
        no: {
          displayName: "Shop",
          url: "/shop"
        }
      }
    }
  ];
}

// Function used to generate correct name and path for pages in other languages
export function getlocalePageName(gatsbyPage) {
  const pageStructure = getPageStructure();
  let localePageName;
  pageStructure.map(page => {
    if (gatsbyPage.path.includes(page.name)) {
      localePageName = page.localeName;
    }
  });
  return localePageName;
}
