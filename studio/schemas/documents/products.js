import { format } from "date-fns";

export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "text",
      title: "Introduction text",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Just click generate",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      title: "Belongs in category",
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
      name: "productComponents",
      title: "Product models/components",
      type: "array",
      of: [{ type: "product" }]
    }
  ]
};
