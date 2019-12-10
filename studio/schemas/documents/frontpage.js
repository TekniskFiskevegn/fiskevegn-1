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
      name: "frontpagePromotedBlock",
      title: "Products block on frontpage",
      type: "promotedBlock"
    },
    {
      name: "promotedBlockLarge",
      title: "Promoted block for services on frontpage",
      type: "promotedBlockLarge"
    }
  ]
};
