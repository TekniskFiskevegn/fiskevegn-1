import S from "@sanity/desk-tool/structure-builder";
// import MdSettings from "react-icons/lib/md/settings";
import { FiSettings, FiFile } from "react-icons/fi";

const hiddenDocTypes = listItem => !["siteSettings", "pageServices"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(FiSettings),
      S.listItem()
        .title("Page Services")
        .child(
          S.editor()
            .id("pageServices")
            .schemaType("pageServices")
            .documentId("pageServices")
        )
        .icon(FiFile),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
