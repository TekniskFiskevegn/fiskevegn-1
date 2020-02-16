export default {
  name: "presentationPartners",
  title: "Presentation of Partners",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "text",
      title: "Text",
      type: "text"
    },
    {
      name: "partnerList",
      type: "array",
      title: "Partner list",
      of: [{ type: "partner" }],
      description: "Shows a list of partners"
    }
  ]
};
