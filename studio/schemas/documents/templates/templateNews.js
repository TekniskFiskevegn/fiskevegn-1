import { format } from "date-fns";
import { FiPlus } from "react-icons/fi";

export default {
  name: "templateNews",
  title: "News",
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
      name: "title",
      type: "localeString",
      title: "Main title",
      description: "Title showing at the top of the page."
    },
    {
      name: "slug",
      type: "localeSlug",
      title: "URL"
    },
    {
      name: "text",
      type: "localeText",
      title: "Text",
      description: "Short and sweet introduction."
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "articleSimplePortableText"
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime"
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "body",
      title: "Body",
      type: "articlePortableText"
    }
  ]
  // preview: {
  //   select: {
  //     title: "title",
  //     publishedAt: "publishedAt",
  //     slug: "slug",
  //     media: "image"
  //   },
  //   prepare({ title = "No title", publishedAt, slug = {}, media }) {
  //     const dateSegment = format(publishedAt, "YYYY/MM");
  //     const path = `/${dateSegment}/${slug.current}/`;
  //     return {
  //       title,
  //       media,
  //       subtitle: publishedAt ? path : "Missing publishing date"
  //     };
  //   }
  // }
};
