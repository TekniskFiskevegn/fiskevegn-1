export default {
  name: "pageServices",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "documentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "defaultContent",
      type: "defaultPage",
      title: "Content"
    }
  ]
};
