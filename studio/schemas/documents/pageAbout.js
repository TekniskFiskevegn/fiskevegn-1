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
      description: "A small title shown above the page title"
    },
    {
      name: "text",
      type: "text",
      title: "Text",
      description: "A short text about the company"
    },
    {
      name: "sceneryImage",
      type: "figure",
      title: "Scenery image"
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [{ type: "feature" }],
      description: "This feature will show on top of the scenery image"
    },
    {
      name: "career",
      type: "presentation",
      title: "Career at Fiskevegn",
      description: "Content block"
    },
    {
      name: "partners",
      type: "presentation",
      title: "Our partners",
      description: "Content block"
    }
  ]
};
