export default {
  name: "pageServices",
  type: "document",
  title: "Page: Services",
  fields: [
    {
      type: "localeString",
      name: "title",
      description: "Title of the page"
    },
    // {
    //   name: "title",
    //   type: "string",
    //   title: "Title",
    //   description: "Page title."
    // },
    {
      name: "complementaryTitle",
      type: "string",
      title: "Complementary title",
      description: "A small title shown above the page title."
    },
    {
      name: "text",
      type: "text",
      title: "Text",
      description: "A short introduction to our services"
    },
    {
      name: "sceneryImage",
      title: "Scenery image",
      type: "figure"
    }
  ]
};
