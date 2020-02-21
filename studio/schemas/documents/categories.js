export default {
  name: "categories",
  type: "document",
  title: "Edit: Product categories",
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
      description: "Category title"
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      description: "Just click generate",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "complementaryTitle",
      title: "Complementary title",
      type: "string",
      description: "A small title shown above the page title"
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "string",
      description: "Teaser text showing only in navigation"
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      description: "A short introduction"
    },
    {
      name: "sceneryImage",
      title: "Scenery image",
      type: "figure"
    }
  ]
};
