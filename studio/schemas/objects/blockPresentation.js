export default {
  name: "blockPresentation",
  title: "Content block",
  type: "object",
  fields: [
    {
      name: "sanityDocumentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "title",
      type: "localeString",
      title: "Block title"
    },
    {
      name: "text",
      type: "localeText",
      title: "Block text"
    },
    {
      name: "image",
      type: "figure",
      title: "Block image"
    },
    {
      name: "attachedEmail",
      type: "string",
      title: "Attach e-mail adress"
    },
    {
      name: "attachedLink",
      type: "string",
      title: "Attach link"
    },
    {
      name: "attachedFile",
      type: "file",
      title: "Attach PDF"
    }
  ]
};
