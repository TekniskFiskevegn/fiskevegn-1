import { FiPlus } from "react-icons/fi";

export default {
  name: "templateProduct",
  title: "Product",
  type: "document",
  icon: FiPlus,
  fields: [
    {
      name: "sanityDocumentTitle",
      type: "string",
      title: "Document title",
      description: "Not showing on page."
    },
    {
      name: "basicTemplate",
      type: "basicTemplate",
      title: "Content"
    },
    {
      name: "belongsToCategory",
      title: "Assign product to a category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "templateProductCategory" }]
        }
      ]
    },
    {
      name: "extraContentBlocks",
      title: "Add more content",
      type: "array",
      of: [{ type: "blockPresentation" }]
    }
  ]
};
