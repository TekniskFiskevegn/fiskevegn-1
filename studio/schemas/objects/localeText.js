const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "no", title: "Norsk" }
];
export default {
  name: "localeText",
  type: "object",
  fieldsets: [
    {
      name: "translations",
      options: { collapsible: false }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "text",
    fieldset: lang.isDefault ? null : "translations"
  }))
};
