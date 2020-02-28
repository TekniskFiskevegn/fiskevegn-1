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
    // {
    //   name: "featureArray",
    //   type: "array",
    //   title: "Feature text",
    //   description:
    //     "For example: New Zealand - Antarctic Fishery. PS! Shown on top of scenery image.",
    //   of: [
    //     {
    //       name: "feature",
    //       type: "object",
    //       fields: [
    //         {
    //           name: "title",
    //           type: "string",
    //           title: "Title"
    //         },
    //         {
    //           name: "text",
    //           type: "string",
    //           title: "Text"
    //         }
    //       ]
    //     }
    //   ]
    // },
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
    },
    {
      name: "partners1",
      type: "standardContent",
      title: "Our partners",
      description: "Content block"
    }
  ]
};
