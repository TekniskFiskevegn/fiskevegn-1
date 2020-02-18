import { format } from "date-fns";

export default {
  name: "products",
  title: "Add: Products",
  type: "document",
  fields: [
    {
      name: "name",
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
        source: "name",
        maxLength: 96
      }
    },
    {
      title: "Product category",
      name: "category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Fishery", value: "fishery" },
          { title: "Aquaculture", value: "aquaculture" },
          { title: "Ropes", value: "ropes" },
          { title: "General supplies", value: "generalSupplies" }
        ]
      }
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "string",
      description: "Just some teaser text. Shown only in navigation."
    },
    {
      name: "description",
      title: "Product description",
      type: "text",
      description: "Only the most important. Please keep it short and sweet."
    },
    {
      name: "productComponents",
      title: "Product models/components",
      type: "array",
      of: [{ type: "product" }]
    }
  ]
};
