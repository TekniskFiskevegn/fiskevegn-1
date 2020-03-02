const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "no", title: "Norsk" }
];
export default {
  name: "localeSlug",
  type: "object",
  description: "Just click generate, and the system will collect the names you entered above.",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(item => ({
    name: item.id,
    type: "slug",
    title: item.title,
    options: {
      source: (doc, options) => {
        // console.log("log localeSlug!", doc);
        if (doc.basicTemplate) return doc.basicTemplate.name[item.id];
        if (doc.title && doc.title[item.id]) return doc.title[item.id];
        return;
      }
    },
    fieldset: item.isDefault ? null : "translations"
  }))
};
