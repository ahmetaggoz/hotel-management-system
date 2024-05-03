import { defineField } from "sanity";

const roomTypes = [
  { title: "Temel", value: "temel" },
  { title: "Lüks", value: "lüks" },
  { title: "Süit", value: "süit" },
];

const hotelRoom = {
  name: "hotelRoom",
  title: "Otel Odası",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "İsim",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("En fazla 50 Karakter"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("En az 100 Karakter"),
    }),
    defineField({
      name: "price",
      title: "Fiyat",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(100).error("En az 100 Karakter"),
    }),
    defineField({
      name: "discount",
      title: "İndirim",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Fotoğraf",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "Dosya" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("En az 3 fotoğraf gerekli"),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Fotoğrafı",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "Dosya" },
      ],
      validation: (Rule) => Rule.required().error("Kapak fotoğrafı gerekli"),
    }),
    defineField({
      name: "type",
      title: "Oda Türü",
      type: "string",
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "temel",
    }),
    defineField({
      name: "specialNote",
      title: "Özel Not",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Giriş saati 00:01, çıkış saati 12:00, eğer bu saatler dışında giriş çıkış yaparsanız lütfen resepsiyona bilgi verin.",
    }),
    defineField({
      name: "dimension",
      title: "Boyut",
      type: "string",
    }),
    defineField({
      name: "numberOfBeds",
      title: "Yatak Sayısı",
      type: "number",
      validation: (Rule) => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: "offeredAmenities",
      title: "Sunulan Olanaklar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "ikon", type: "string" },
            { name: "amenity", title: "Olanak", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "isBooked",
      title: "Rezerve Edildi Mi",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Özellikli Mi",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reviews",
      title: "Yorumlar",
      type: "array",
      of: [{type: "review"}]
    }),
  ],
};
export default hotelRoom;   