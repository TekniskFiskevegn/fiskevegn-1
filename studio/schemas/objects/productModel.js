export default {
  name: "product",
  title: "Product Model or Component",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "text",
      title: "Text",
      type: "text"
    },
    {
      name: "image",
      type: "figure",
      title: "Image"
    },
    {
      name: "email",
      type: "string",
      title: "Attached e-mail",
      description: "If no e-mail, leave empty"
    },
    {
      name: "link",
      title: "Attached link",
      type: "string",
      description: "If no link, leave empty"
    },
    {
      name: "pdf",
      title: "PDF attachment",
      type: "file",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title"
        }
      ]
    }
  ]
};
