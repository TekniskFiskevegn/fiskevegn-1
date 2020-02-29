export default {
  name: "pageAbout",
  type: "document",
  title: "About",
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
      name: "heroImage",
      type: "heroImage",
      title: "Scenery image"
    },
    {
      name: "features",
      type: "array",
      title: "Add feature",
      of: [{ type: "blockFeature" }]
    },
    {
      name: "career",
      type: "blockPresentation",
      title: "Career at Fiskevegn",
      description: "Content block"
    },
    {
      name: "partners",
      type: "blockRegular",
      title: "Our partners",
      description: "Content block"
    }
  ]
};
