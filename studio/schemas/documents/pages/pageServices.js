export default {
  name: "pageServices",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "sanityDocumentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "intro",
      type: "intro",
      title: "Intro"
    },
    {
      name: "heroImage",
      type: "heroImage",
      title: "Scenery image"
    }
  ]
};
