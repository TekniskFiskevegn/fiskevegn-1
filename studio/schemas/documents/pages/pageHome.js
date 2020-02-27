export default {
  name: "pageHome",
  type: "document",
  title: "Page: Home",
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
      name: "topImage",
      title: "Top image",
      type: "figure"
    },
    {
      name: "firstPromotedBlock",
      title: "Promoted content",
      type: "promotedBlock"
    },
    {
      name: "secondPromotedBlock",
      title: "Second promoted content",
      type: "promotedBlock"
    }
  ]
};
