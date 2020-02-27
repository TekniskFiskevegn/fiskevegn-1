export default {
  name: "pageProducts",
  type: "document",
  title: "Page: Products",
  // __experimental_actions: [
  //   // 'create',
  //   "update",
  //   // 'delete',
  //   "publish"
  // ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Page title."
    },
    {
      name: "complementaryTitle",
      type: "string",
      title: "Complementary title",
      description: "A small title shown above the page title"
    },
    {
      name: "text",
      type: "text",
      title: "Text",
      description: "A short introduction to our products"
    },
    {
      name: "sceneryImage",
      title: "Scenery image",
      type: "figure"
    }
  ]
};
