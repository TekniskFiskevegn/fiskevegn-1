export default {
  name: "blockContact",
  title: "Department",
  type: "object",
  fields: [
    {
      name: "sanityDocumentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "intro",
      type: "intro",
      title: "Intro"
    },
    {
      name: "address",
      type: "string",
      title: "Address"
    },
    {
      name: "phone",
      type: "string",
      title: "Phone"
    },
    {
      name: "email",
      type: "string",
      title: "E-mail"
    },
    {
      name: "map",
      type: "string",
      title: "Map"
    },
    {
      name: "image",
      type: "figure",
      title: "Image"
    }
  ]
};
