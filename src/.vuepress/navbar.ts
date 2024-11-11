import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Publicações",
    icon: "edit",
    link: "/article/",
  },
  {
    text: "Categoria",
    icon: "list",
    link: "/category/",
  },
  {
    text: "Tag",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "Exercícios",
    icon: "book",
    link: "/category/exercicio/",
  },
  {
    text: "Para Entrega",
    icon: "book",
    link: "/category/entrega/",
  },
  {
    text: "Timeline",
    icon: "clock",
    link: "/timeline/",
  },
]);
