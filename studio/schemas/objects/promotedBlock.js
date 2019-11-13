export default {
  name: "promotedBlock",
  title: "Promoted Block",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Block title",
      type: "string"
    },
    {
      name: "description",
      type: "text",
      title: "Block description"
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    },
    {
      name: "text",
      type: "text",
      title: "Text"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    }
  ]
};
