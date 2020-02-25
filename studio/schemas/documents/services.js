import { format } from "date-fns";

export default {
  name: "services",
  title: "Edit: Services",
  type: "document",
  fields: [
    {
      type: "localeString",
      name: "title",
      description: "Title of the service"
    },
    {
      type: "localeSlug",
      name: "slug",
      title: "URL"
    },
    // {
    //   name: "title",
    //   title: "Service name",
    //   type: "string",
    //   description: "Shown in navigation and as title on service page"
    // },
    // {
    //   name: "slug",
    //   title: "URL",
    //   type: "slug",
    //   description: "Just click generate",
    //   options: {
    //     source: "title.en",
    //     maxLength: 96
    //   }
    // },
    {
      name: "teaser",
      title: "Teaser",
      type: "string",
      description: "Teaser text showing only in navigation"
    },
    {
      name: "text",
      title: "Service text",
      type: "text",
      description: "Only the most important. Please keep it short and sweet."
    },
    {
      name: "firstImage",
      title: "First service image",
      type: "figure"
    },
    {
      name: "secondText",
      title: "Second service text",
      type: "text",
      description: "Only the most important. Please keep it short and sweet."
    },
    {
      name: "secondImage",
      title: "Second service image",
      type: "figure"
    }
  ]
};
