export default {
  name: "about",
  type: "document",
  title: "About",
  // __experimental_actions: [
  //   // 'create',
  //   "update",
  //   // 'delete',
  //   "publish"
  // ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "body",
      title: "Company introduction",
      type: "projectPortableText"
    },
    {
      name: "keyNumber",
      title: "Key number",
      type: "string"
    },
    {
      name: "keyNumberDescription",
      title: "Key number description",
      type: "string"
    }
    // {
    //   name: "frontpageImage",
    //   title: "Top image on frontpage",
    //   type: "figure"
    // },
    // {
    //   name: "promotedBlock",
    //   title: "Products block on frontpage",
    //   type: "promotedBlock"
    // },
    // {
    //   name: "fullWidthBlock",
    //   title: "Full width block frontpage",
    //   type: "fullWidthBlock"
    // }
  ]
};
