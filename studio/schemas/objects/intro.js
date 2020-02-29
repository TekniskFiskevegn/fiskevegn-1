export default {
  name: "intro",
  type: "object",
  title: "Default Page",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Main title",
      description: "Main title"
    },
    {
      name: "complementaryTitle",
      type: "localeString",
      title: "Complementary title",
      description: "Small title showing above the main title."
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Short and sweet text."
    }
  ]
};
