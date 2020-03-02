import S from "@sanity/desk-tool/structure-builder";
// import MdSettings from "react-icons/lib/md/settings";
import { FiSettings, FiFile } from "react-icons/fi";

const hiddenDocTypes = listItem =>
  ![
    "siteSettings",
    "pageServices",
    "pageProducts",
    "pageHome",
    "pageAbout",
    "pageContact"
  ].includes(listItem.getId());

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
      S.divider(),
      S.listItem()
        .title("Page Services")
        .child(
          S.editor()
            .id("pageServices")
            .schemaType("pageServices")
            .documentId("pageServices")
        )
        .icon(FiFile),
      S.listItem()
        .title("Page Products")
        .child(
          S.editor()
            .id("pageProducts")
            .schemaType("pageProducts")
            .documentId("pageProducts")
        )
        .icon(FiFile),
      S.listItem()
        .title("Page Home")
        .child(
          S.editor()
            .id("pageHome")
            .schemaType("pageHome")
            .documentId("pageHome")
        )
        .icon(FiFile),
      S.listItem()
        .title("Page About")
        .child(
          S.editor()
            .id("pageAbout")
            .schemaType("pageAbout")
            .documentId("pageAbout")
        )
        .icon(FiFile),
      S.listItem()
        .title("Page Contact")
        .child(
          S.editor()
            .id("pageContact")
            .schemaType("pageContact")
            .documentId("pageContact")
        )
        .icon(FiFile),

      S.divider(),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
