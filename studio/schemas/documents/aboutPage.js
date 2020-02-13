export default {
  name: "aboutPage",
  type: "document",
  title: "About Page",
  // __experimental_actions: [
  //   // 'create',
  //   "update",
  //   // 'delete',
  //   "publish"
  // ],
  fields: [
    {
      name: "intro",
      title: "Page intro",
      type: "intro"
    },
    {
      name: "partnersIntro",
      title: "Partners intro",
      type: "intro"
    },
    {
      title: "Our Partners",
      name: "partners",
      type: "array",
      of: [{ type: "partner" }],
      options: {
        layout: "partner"
      }
    }
  ]
};
