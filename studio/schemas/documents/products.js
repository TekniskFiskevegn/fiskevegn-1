import { format } from "date-fns";

export default {
  name: "products",
  title: "Edit: Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product name",
      type: "string",
      description: "Shown in navigation and as title on product page"
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      description: "Just click generate",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "categoryReference",
      title: "Product category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "categories" }]
        }
      ]
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "string",
      description: "Teaser text for product, shown only in navigation"
    },
    {
      name: "text",
      title: "Product text",
      type: "text",
      description: "Keep it short and sweet"
    },
    {
      name: "models",
      title: "Product models or components",
      type: "array",
      of: [{ type: "product" }]
    }
  ]
};
