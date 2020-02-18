export default {
  name: "pageContact",
  type: "document",
  title: "Page: Contact",
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
      description: "Page title"
    },
    {
      name: "topImage",
      title: "Top image",
      type: "figure"
    },
    {
      name: "departments",
      type: "array",
      title: "Our departments",
      of: [{ type: "contactBlock" }],
      description: "Add department"
    }
  ]
};