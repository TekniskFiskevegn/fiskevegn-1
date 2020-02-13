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
      name: "topImage",
      title: "TOP IMAGE",
      type: "figure"
    },
    {
      name: "firstPromotedBlock",
      title: "OUR PRODUCTS",
      type: "promotedBlock"
    },
    {
      name: "secondPromotedBlock",
      title: "OUR SERVICES",
      type: "promotedBlock"
    }
  ]
};
