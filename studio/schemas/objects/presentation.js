export default {
  name: "presentation",
  title: "Presentation",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title for this content block"
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      description: "Text for this content block"
    },
    {
      name: "image",
      type: "figure",
      title: "Image",
      description: "Add single image."
    },
    {
      name: "listOfImages",
      type: "array",
      title: "List of images",
      of: [{ type: "figure" }],
      description: "Add multiple images instead of a single image"
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
      name: "pdf",
      type: "file",
      title: "Attached PDF",
      description: "If no PDF, leave empty"
    }
  ]
};
