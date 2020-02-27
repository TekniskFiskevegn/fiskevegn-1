// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
// import category from "./documents/category";
import siteSettings from "./documents/siteSettings";
import pageHome from "./documents/pages/pageHome";
import pageAbout from "./documents/pages/pageAbout";
import pageProducts from "./documents/pages/pageProducts";
import pageServices from "./documents/pages/pageServices";
import pageContact from "./documents/pages/pageContact";

import products from "./documents/products";
import categories from "./documents/categories";
import services from "./documents/services";
import news from "./documents/news";

// Object types
import localeSlug from "./objects/localeSlug";
import localeString from "./objects/localeString";
import localeText from "./objects/localeText";

import defaultPage from "./objects/defaultPage";
import figure from "./objects/figure";
import heroImage from "./objects/heroImage";

import articlePortableText from "./objects/articlePortableText";
import simplePortableText from "./objects/simplePortableText";
import promotedBlock from "./objects/promotedBlock";
import department from "./objects/department";
import productModel from "./objects/productModel";
import presentation from "./objects/presentation";
import standardBlockContent from "./objects/standardBlockContent";
import standardTextContent from "./objects/standardTextContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "portfolio",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    figure,
    heroImage,
    articlePortableText,
    simplePortableText,
    promotedBlock,
    department,
    productModel,
    presentation,
    standardBlockContent,
    standardTextContent,
    defaultPage,
    localeString,
    localeText,
    localeSlug,
    // The following are document types which will appear
    // in the studio.
    products,
    categories,
    services,
    news,
    siteSettings,
    pageHome,
    pageAbout,
    pageProducts,
    pageServices,
    pageContact
  ])
});
