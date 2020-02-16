export default {
  name: "presentation",
  title: "Presentation",
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
      title: "E-mail",
      type: "string",
      description: "Leave empty if no e-mail"
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      description: "Leave empty if no link"
    },
    {
      name: "attachment",
      title: "PDF for download",
      type: "string",
      description: "Leave empty if no PDF"
    }
  ]
};
