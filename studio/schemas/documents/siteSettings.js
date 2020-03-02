export default {
  name: "siteSettings",
  type: "document",
  title: "SEO",
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
      title: "Title"
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your website for search engines and social media."
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your website.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    }
  ]
};
