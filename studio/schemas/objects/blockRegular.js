export default {
  name: "blockRegular",
  title: "Content block",
  type: "object",
  fields: [
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
      name: "listOfImages",
      type: "array",
      title: "List of images",
      of: [{ type: "figure" }],
      description: "Add multiple images instead of a single image"
    }
  ]
};
