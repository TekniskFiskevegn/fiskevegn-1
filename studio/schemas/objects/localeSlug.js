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
        if (doc.templateStarter) {
          return doc.templateStarter.name[item.id];
        }
        return;
      }
    },
    fieldset: item.isDefault ? null : "translations"
  }))
};
