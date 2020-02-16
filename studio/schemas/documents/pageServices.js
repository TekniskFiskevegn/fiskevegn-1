export default {
  name: "pageServices",
  type: "document",
  title: "Page: Services",
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
      description: "A small title shown above the page title."
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "A short description."
    },
    {
      name: "sceneryImage",
      title: "Scenery image",
      type: "figure"
    }
  ]
};
