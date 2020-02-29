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
      name: "templateStarter",
      type: "templateStarter",
      title: "Content"
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