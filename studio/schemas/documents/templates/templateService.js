import { format } from "date-fns";
import { FiPlus } from "react-icons/fi";

export default {
  name: "templateService",
  title: "Service",
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
      name: "extraContentBlocks",
      type: "array",
      title: "Add more content blocks",
      of: [{ type: "blockPresentation" }]
    }
  ]
};
