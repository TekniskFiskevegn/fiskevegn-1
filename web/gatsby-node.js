const { isFuture } = require("date-fns");
let sytalaust = require("./sytalaust");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const extraLanguages = sytalaust.extraLanguages;
const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page;
  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE
    }
  });
  if (extraLanguages.length) {
    extraLanguages.forEach(code => {
      const { path, localePath, context, ...rest } = page;
      createPage({
        ...rest,
        path: localePath ? `/${code}${localePath}` : `/${code}${path}`,
        // every page for each language gets the language code as a prefix
        // to its path: "/es/blog/<some-slug>" for example
        context: {
          ...context,
          locale: code
        }
      });
    });
  }
};

async function createNewsPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTemplateNews {
        edges {
          node {
            id
            publishedAt
            slug {
              _type
              en {
                current
              }
              no {
                current
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsEdges = (result.data.allSanityTemplateNews || {}).edges || [];

  newsEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id;
      const slug = edge.node.slug.en.current;
      const localeSlug = edge.node.slug.no ? edge.node.slug.no.current : slug;
      const path = `/news/${slug}/`;
      const localePath = `/nyheter/${localeSlug}/`;

      reporter.info(`Creating news page: ${path}`);

      page = {
        path,
        localePath,
        component: require.resolve("./src/templates/template-news.js"),
        context: { id }
      };

      createLocalePage(page, createPage);
    });
}

async function createProductPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTemplateProduct {
        edges {
          node {
            id
            basicTemplate {
              slug {
                _type
                en {
                  current
                }
                no {
                  current
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const productEdges = (result.data.allSanityTemplateProduct || {}).edges || [];

  productEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.basicTemplate.slug.en.current;
    const localeSlug = edge.node.basicTemplate.slug.no
      ? edge.node.basicTemplate.slug.no.current
      : slug;
    const path = `/product/${slug}/`;
    const localePath = `/produkt/${localeSlug}/`;

    reporter.info(`Creating product page: ${path}`);

    page = {
      path,
      localePath,
      component: require.resolve("./src/templates/template-product.js"),
      context: { id }
    };

    createLocalePage(page, createPage);
  });
}

async function createServicePages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTemplateService {
        edges {
          node {
            id
            basicTemplate {
              slug {
                _type
                en {
                  current
                }
                no {
                  current
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const serviceEdges = (result.data.allSanityTemplateService || {}).edges || [];

  serviceEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.basicTemplate.slug.en.current;
    const localeSlug = edge.node.basicTemplate.slug.no
      ? edge.node.basicTemplate.slug.no.current
      : slug;
    const path = `/services/${slug}/`;
    const localePath = `/tjenester/${localeSlug}/`;

    reporter.info(`Creating service page: ${path}`);

    page = {
      path,
      localePath,
      component: require.resolve("./src/templates/template-service.js"),
      context: { id }
    };

    createLocalePage(page, createPage);
  });
}

async function createProductCategoryPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTemplateProductCategory {
        edges {
          node {
            id
            basicTemplate {
              slug {
                _type
                en {
                  current
                }
                no {
                  current
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const categoryEdges = (result.data.allSanityTemplateProductCategory || {}).edges || [];

  categoryEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.basicTemplate.slug.en.current;
    const localeSlug = edge.node.basicTemplate.slug.no
      ? edge.node.basicTemplate.slug.no.current
      : slug;
    const path = `/products/${slug}/`;
    const localePath = `/produkter/${localeSlug}/`;

    reporter.info(`Creating product category: ${path}`);

    // createPage({
    //   path,
    //   component: require.resolve("./src/templates/products.js"),
    //   context: { id }
    // });
    page = {
      path,
      localePath,
      component: require.resolve("./src/templates/template-product-category.js"),
      context: { id }
    };

    createLocalePage(page, createPage);
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createNewsPages(graphql, actions, reporter);
  await createProductPages(graphql, actions, reporter);
  await createServicePages(graphql, actions, reporter);
  await createProductCategoryPages(graphql, actions, reporter);
};

// Creating pages in /pages folder
exports.onCreatePage = ({ page, actions }) => {
  // Skip index
  if (page.path !== "/") {
    page = { ...page, localePath: "/" + sytalaust.getlocalePageName(page) };
  }
  const { createPage, deletePage } = actions;
  deletePage(page);
  createLocalePage(page, createPage);
};
