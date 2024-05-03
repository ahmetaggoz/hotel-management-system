import { defineField } from "sanity";

const user = {
  name: "user",
  title: "Kullanıcı",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Yönetici",
      type: "boolean",
      description: "Kullanıcının yönetici olup olmadığını kontrol edin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      // readOnly: true
      // hidden: true
    }),
    defineField({
      name: "name",
      title: "İsim",
      type: "string",
      description: "Kullanıcının ismi",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Fotoğraf",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "Hakkında",
      type: "text",
      description: "Kullanıcı hakkında kısa bir açıklama",
    }),
  ],
};

export default user;