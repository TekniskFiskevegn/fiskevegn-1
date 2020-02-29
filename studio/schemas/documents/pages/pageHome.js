export default {
  name: "pageHome",
  type: "document",
  title: "Home",
  // __experimental_actions: [
  //   // 'create',
  //   "update",
  //   // 'delete',
  //   "publish"
  // ],
  fields: [
    {
      name: "sanityDocumentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "heroImage",
      type: "heroImage",
      title: "Add hero Image"
    },
    {
      name: "promotedBlocks",
      type: "array",
      title: "Add Content Blocks",
      of: [{ type: "blockPromoted" }]
    }
  ]
};
