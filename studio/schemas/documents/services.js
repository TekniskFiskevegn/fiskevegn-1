import { format } from "date-fns";

export default {
  name: "services",
  title: "Add: Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Service name",
      type: "string",
      description: "Shown in navigation and as title on product page"
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      description: "Just click generate",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "string",
      description: "Just some teaser text. Shown only in navigation."
    },
    {
      name: "text",
      title: "Service text",
      type: "text",
      description: "Only the most important. Please keep it short and sweet."
    }
  ]
};
