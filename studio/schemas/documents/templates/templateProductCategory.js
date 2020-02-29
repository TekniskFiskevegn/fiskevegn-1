import { format } from "date-fns";
import { FiPlus } from "react-icons/fi";

export default {
  name: "templateProductCategory",
  title: "Product category",
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
      name: "templateStarter",
      type: "templateStarter",
      title: "Content"
    }
  ]
};
