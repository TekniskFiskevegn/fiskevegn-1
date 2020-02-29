// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
// pages
import siteSettings from "./documents/siteSettings";
import pageHome from "./documents/pages/pageHome";
import pageAbout from "./documents/pages/pageAbout";
import pageProducts from "./documents/pages/pageProducts";
import pageServices from "./documents/pages/pageServices";
import pageContact from "./documents/pages/pageContact";
// templates
import templateProduct from "./documents/templates/templateProduct";
import templateProductCategory from "./documents/templates/templateProductCategory";
import templateService from "./documents/templates/templateService";
import templateNews from "./documents/templates/templateNews";
// Object types
import localeSlug from "./objects/localeSlug";
import localeString from "./objects/localeString";
import localeText from "./objects/localeText";
import intro from "./objects/intro";
import figure from "./objects/figure";
import heroImage from "./objects/heroImage";
import articlePortableText from "./objects/articlePortableText";
import articleSimplePortableText from "./objects/articleSimplePortableText";

import blockFeature from "./objects/blockFeature";
import blockContact from "./objects/blockContact";
import blockPromoted from "./objects/blockPromoted";
import blockPresentation from "./objects/blockPresentation";
import blockRegular from "./objects/blockRegular";

import templateStarter from "./objects/templateStarter";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "portfolio",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockPromoted,
    blockPresentation,
    blockRegular,
    blockFeature,
    blockContact,
    templateStarter,
    intro,
    localeString,
    localeText,
    localeSlug,
    figure,
    heroImage,
    articlePortableText,
    articleSimplePortableText,
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    pageHome,
    pageAbout,
    pageProducts,
    pageServices,
    pageContact,
    templateProduct,
    templateProductCategory,
    templateService,
    templateNews
  ])
});
