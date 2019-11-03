const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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

      createPage({
        path,
        component: require.resolve("./src/templates/news.js"),
        context: { id }
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // console.log("log in createPages", graphql, actions);
  await createNewsPages(graphql, actions, reporter);
};
