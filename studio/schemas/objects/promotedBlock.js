export default {
  name: "promotedBlock",
  title: "Promoted Block",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "complementaryTitle",
      type: "string",
      title: "Complementary title",
      description: "A small title shown above the main title."
    },
    {
      name: "text",
      type: "text",
      title: "Text"
    },
    {
      name: "secondaryTitle",
      type: "string",
      title: "Second title",
      description: "Smaller title beside the image"
    },
    {
      name: "secondaryText",
      type: "text",
      title: "Second text",
      description: "Text beside the image"
    },
    {
      name: "image",
      type: "figure",
      title: "Image"
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
