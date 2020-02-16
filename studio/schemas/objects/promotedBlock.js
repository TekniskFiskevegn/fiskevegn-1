export default {
  name: "promotedBlock",
  title: "Promoted Block",
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
      name: "secondTitle",
      title: "Second title",
      type: "string",
      description: "Smaller title beside the image"
    },
    {
      name: "secondText",
      title: "Second text",
      type: "text",
      description: "Text beside the image"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "browseMoreHref",
      title: "Read more link",
      type: "string",
      description: "Leave empty if no link"
    },
    {
      name: "browseMoreText",
      title: "Read more text",
      type: "string",
      description: "Leave empty if no link"
    }
  ]
};
