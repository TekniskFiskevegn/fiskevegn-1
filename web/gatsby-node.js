const { isFuture } = require("date-fns");
let sytalaust = require("./sytalaust");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const extraLanguages = sytalaust.extraLanguages;
const createLocalePage = (page, createPage) => {
  console.log("log we are here", page);
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
      console.log("and then we are here");
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
      allSanityNews(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const newsEdges = (result.data.allSanityNews || {}).edges || [];

  newsEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/news/${slug}/`;

      reporter.info(`Creating news page: ${path}`);

      // createPage({
      //   path,
      //   component: require.resolve("./src/templates/news.js"),
      //   context: { id }
      // });
      page = {
        path,
        component: require.resolve("./src/templates/news.js"),
        context: { id }
      };

      createLocalePage(page, createPage);
    });
}

async function createProductPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProducts(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const productEdges = (result.data.allSanityProducts || {}).edges || [];

  productEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/product/${slug}/`;

    reporter.info(`Creating product page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/product.js"),
      context: { id }
    });
  });
}

async function createServicePages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityServices(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const serviceEdges = (result.data.allSanityServices || {}).edges || [];

  serviceEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/service/${slug}/`;
    const localePath = `/tjenester/${slug}/`;

    reporter.info(`Creating service page: ${path}`);

    // createPage({
    //   path,
    //   component: require.resolve("./src/templates/service.js"),
    //   context: { id }
    // });
    page = {
      path,
      localePath,
      component: require.resolve("./src/templates/service.js"),
      context: { id }
    };

    createLocalePage(page, createPage);
  });
}

async function createCategoryPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCategories(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const categoryEdges = (result.data.allSanityCategories || {}).edges || [];

  categoryEdges.forEach(edge => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/category/${slug}/`;

    reporter.info(`Creating service page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/category.js"),
      context: { id }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // console.log("log in createPages", graphql, actions);
  // await createNewsPages(graphql, actions, reporter);
  // await createProductPages(graphql, actions, reporter);
  // await createServicePages(graphql, actions, reporter);
  // await createCategoryPages(graphql, actions, reporter);
};

// Creating pages in /pages folder
exports.onCreatePage = ({ page, actions }) => {
  console.log("yiha! log page in onCreatePage", page);
  // Custom solution to find correct mapping for a locale path
  // Since we dont have any data upon this function being called
  const localePageName = sytalaust.getlocalePageName(page);
  const localePath = "/" + localePageName;
  const { createPage, deletePage } = actions;
  deletePage(page);
  createLocalePage({ ...page, localePath }, createPage);
};
