export default {
  name: "defaultContent",
  title: "Content",
  type: "object",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Page title",
      description: "Title for this content block"
    },
    {
      name: "complementaryTitle",
      type: "localeString",
      title: "Complementary Title",
      description: "Complemenetary title."
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Short and sweet introduction of the content."
    }
  ]
};
