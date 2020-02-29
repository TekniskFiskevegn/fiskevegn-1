export default {
  name: "pageContact",
  type: "document",
  title: "Contact",
  fields: [
    {
      name: "sanityDocumentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "heroImage",
      type: "heroImage",
      title: "Scenery image"
    },
    {
      name: "departments",
      type: "array",
      title: "Add department",
      of: [{ type: "blockContact" }]
    }
  ]
};
