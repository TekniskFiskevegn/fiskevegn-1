function getMappingForPages() {
  return [
    {
      path: "about",
      pathLocale: "om-oss"
    },
    {
      path: "products",
      pathLocale: "produkter"
    },
    {
      path: "services",
      pathLocale: "tjenester"
    },
    {
      path: "contact",
      pathLocale: "kontakt"
    },
    {
      path: "shop",
      pathLocale: "shop"
    }
  ];
}

function getLocalePathForPage(gatsbyPage) {
  const path = gatsbyPage.path;
  return "string";
}

module.exports.getLocalePathForPage = getLocalePathForPage;
module.exports.getMappingForPages = getMappingForPages;
