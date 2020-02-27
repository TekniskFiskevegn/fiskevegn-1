export default {
  name: "standardTextContent",
  title: "Content",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
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
      type: "text",
      title: "Text",
      description: "Text for this content block"
    }
  ]
};
