export default {
  name: "blockPromoted",
  title: "Content block",
  type: "object",
  fieldsets: [
    {
      name: "content",
      title: "Content",
      options: { collapsible: false }
    }
  ],
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
      title: "Block Intro"
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
      description: "Title beside the image.",
      fieldset: "content"
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Text beside the image.",
      fieldset: "content"
    },
    {
      name: "image",
      type: "figure",
      title: "Image",
      fieldset: "content"
    },
    {
      name: "browseMoreHref",
      type: "localeString",
      title: "Optional: add 'read more' link",
      fieldset: "content"
    },
    {
      name: "browseMoreText",
      type: "localeString",
      title: "Optional: text for the link",
      fieldset: "content"
    }
  ]
};
