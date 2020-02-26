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
    // {
    //   name: "slug",
    //   title: "URL",
    //   type: "slug",
    //   description: "Some frontend will require a slug to be set to be able to show the project",
    //   options: {
    //     source: "title",
    //     maxLength: 96
    //   }
    // },
    {
      name: "slugLocale",
      title: "URL",
      type: "localeSlug",
      description: "Translation of URL above",
      options: {
        maxLength: 96
      }
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
