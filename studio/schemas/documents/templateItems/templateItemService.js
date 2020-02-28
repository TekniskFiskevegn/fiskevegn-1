import { format } from "date-fns";
import { FiPlus } from "react-icons/fi";

export default {
  name: "templateItemService",
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
      name: "defaultContent",
      type: "defaultTemplateItem",
      title: "Content"
    }
  ]
};
