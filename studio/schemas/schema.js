// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
// import category from "./documents/category";
import siteSettings from "./documents/siteSettings";
import pageHome from "./documents/pageHome";
import pageAbout from "./documents/pageAbout";
import pageProducts from "./documents/pageProducts";
import pageServices from "./documents/pageServices";
import pageContact from "./documents/pageContact";

import products from "./documents/products";
import categories from "./documents/categories";
import services from "./documents/services";
import person from "./documents/person";
import news from "./documents/news";

// Object types
import pdf from "./objects/pdf";
import feature from "./objects/feature";
import intro from "./objects/intro";
import bioPortableText from "./objects/bioPortableText";
import figure from "./objects/figure";
import projectMember from "./objects/projectMember";
import projectPortableText from "./objects/projectPortableText";
import simplePortableText from "./objects/simplePortableText";
import promotedBlock from "./objects/promotedBlock";
import department from "./objects/department";
import productModel from "./objects/productModel";
import presentation from "./objects/presentation";
import standardContent from "./objects/standardContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "portfolio",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    projectPortableText,
    simplePortableText,
    promotedBlock,
    department,
    intro,
    productModel,
    presentation,
    standardContent,
    feature,
    pdf,
    // The following are document types which will appear
    // in the studio.
    // category,
    person,
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
