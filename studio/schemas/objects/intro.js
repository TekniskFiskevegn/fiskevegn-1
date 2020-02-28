export default {
  name: "intro",
  type: "object",
  title: "Default Page",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Main title",
      description: "Title showing at the top of the page."
    },
    {
      name: "complementaryTitle",
      type: "localeString",
      title: "Complementary title",
      description: "Optional. Just a small title showing above the main title."
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Short and sweet introduction."
    }
  ]
};
