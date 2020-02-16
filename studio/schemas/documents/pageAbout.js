export default {
  name: "pageAbout",
  type: "document",
  title: "Page: About",
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
      name: "scenery",
      type: "figure",
      title: "Scenery image"
    },
    {
      name: "sceneryFeatures",
      type: "array",
      title: "Features",
      of: [{ type: "product" }],
      description: "This feature will show on top of the scenery image"
    },
    {
      name: "career",
      type: "presentation",
      title: "Career at Fiskevegn"
    },
    {
      name: "partnersTitle",
      type: "string",
      title: "Partners",
      description: "Presentation of our partners"
    },
    {
      name: "partnersText",
      type: "text",
      title: "Partners introduction",
      description: "Presentation of our partners"
    }
  ]
};
