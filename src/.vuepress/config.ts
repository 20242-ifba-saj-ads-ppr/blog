import { defineUserConfig } from "vuepress";
import umlPlugin from 'markdown-it-plantuml';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "pt-BR",
  title: "20242 PPR",
  description: "Material das Aulas",

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {openMarker: '```plantuml', closeMarker: '```'})
  },


  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
