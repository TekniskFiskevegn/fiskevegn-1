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
      title: "Add department",
      of: [{ type: "department" }],
      description: "Add contact information for our departments"
    }
  ]
};
