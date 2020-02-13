export default {
  name: "promotedBlock",
  title: "Promoted Block",
  type: "object",
  fields: [
    {
      name: "intro",
      title: "Block intro",
      type: "intro"
    },
    {
      name: "title",
      title: "Block title",
      type: "string"
    },
    {
      name: "text",
      title: "Block text",
      type: "text"
    },
    {
      name: "image",
      title: "Block image",
      type: "figure"
    },
    {
      name: "browseMoreHref",
      title: "Link (leave empty if no link)",
      type: "string"
    },
    {
      name: "browseMoreText",
      title: "Link text (leave empty if no link)",
      type: "string"
    }
  ]
};
