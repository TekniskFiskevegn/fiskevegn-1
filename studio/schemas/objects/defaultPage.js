export default {
  name: "defaultPage",
  type: "object",
  title: "Default Page",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Page title",
      description: "Page title showing at the top of the page."
    },
    // {
    //   name: "title",
    //   type: "string",
    //   title: "Page title",
    //   description: "Page title showing at the top of the page."
    // },
    {
      name: "complementaryTitle",
      type: "localeString",
      title: "Complementary Title",
      description: "Optional. Just a small title showing above the page title."
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Short and sweet introduction text for this page."
    },
    {
      name: "heroImage",
      type: "heroImage",
      title: "Scenery Image"
    }
  ]
};
