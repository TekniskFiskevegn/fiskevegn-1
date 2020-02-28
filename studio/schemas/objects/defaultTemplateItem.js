export default {
  name: "defaultTemplateItem",
  type: "object",
  title: "Default content for template items",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Main title",
      description: "Title showing at the top of the page."
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      description: "Just click generate",
      options: {
        source: "intro.title",
        maxLength: 96
      }
    },
    {
      name: "complementaryTitle",
      type: "localeString",
      title: "Complementary title",
      description: "Optional. Just a small title showing above the main title."
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Short and sweet introduction."
    },
    {
      name: "navigationTeaser",
      type: "localeString",
      title: "Navigation teaser",
      description: "A sneak peak of what this is about. Showing only in navigation menu."
    }
  ]
};
