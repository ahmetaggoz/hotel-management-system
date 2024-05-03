import { defineField } from "sanity";

const review = {
  name: "review",
  title: "Yorumlar",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "Kullanıcı",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hotelRoom",
      title: "Otel Odası",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Yorumu",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userRating",
      title: "Kullanıcı Puanı",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5).error("Puanlama 1 ile 5 arasında olmalıdır."),
    }),
  ],
};

export default review;