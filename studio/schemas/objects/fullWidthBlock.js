export default {
  name: "fullWidthBlock",
  title: "Full width block",
  type: "object",
  fields: [
    {
      title: "Type of content",
      name: "typeOfContent",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Image and text", value: "default" },
          { title: "List", value: "list" },
          { title: "Image", value: "image" }
        ]
      }
    },
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
      name: "image",
      title: "Image",
      type: "figure"
    }
  ]
};
