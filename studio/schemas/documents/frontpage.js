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
      title: "Frontpage Image",
      type: "figure"
    },
    {
      name: "frontpagePromotedBlock",
      title: "Promoted block for products on frontpage",
      type: "promotedBlock"
    }
  ]
};
