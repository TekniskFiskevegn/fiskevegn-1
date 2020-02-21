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
      title: "Attached e-mail",
      type: "string",
      description: "If no e-mail, leave empty"
    },
    {
      name: "link",
      title: "Attached link",
      type: "string",
      description: "If no link, leave empty"
    },
    {
      name: "attachment",
      title: "Attached PDF",
      type: "file",
      description: "If no PDF, leave empty"
    }
  ]
};
