import { defineField, defineType } from "sanity";

export const documentViewType = defineType({
  name: "documentView",
  title: "Document View",
  type: "document",
  fields: [
    defineField({
      name: "documentId",
      title: "Document ID",
      type: "string",
      description: "The ID of the viewed document",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
      description: "When the document was viewed",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userAgent",
      title: "User Agent",
      type: "string",
      description: "Browser/device information of the viewer",
    }),
    defineField({
      name: "referrer",
      title: "Referrer",
      type: "string",
      description: "The referring URL",
    }),
  ],
  preview: {
    select: {
      title: "documentId",
      subtitle: "timestamp",
    },
  },
});
