export default {
  name: "frontpage",
  type: "document",
  title: "Frontpage",
  // __experimental_actions: [
  //   // 'create',
  //   "update",
  //   // 'delete',
  //   "publish"
  // ],
  fields: [
    {
      name: "frontpageImage",
      title: "Top image on frontpage",
      type: "figure"
    },
    {
      name: "promotedBlock",
      title: "Products block on frontpage",
      type: "promotedBlock"
    },
    {
      name: "fullWidthBlock",
      title: "Full width block frontpage",
      type: "fullWidthBlock"
    }
  ]
};
