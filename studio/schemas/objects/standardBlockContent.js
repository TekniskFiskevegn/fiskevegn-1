export default {
  name: "standardContent",
  title: "Content",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title for this content block"
    },
    {
      name: "complementaryTitle",
      type: "string",
      title: "Complementary title",
      description: "A small title shown above the main title."
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
    }
  ]
};
