// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import umlPlugin from "markdown-it-plantuml";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  {
    text: "Publica\xE7\xF5es",
    icon: "edit",
    link: "/article/"
  },
  {
    text: "Categoria",
    icon: "list",
    link: "/category/"
  },
  {
    text: "Tag",
    icon: "tag",
    link: "/tag/"
  },
  {
    text: "Exerc\xEDcios",
    icon: "book",
    link: "/category/exercicio/"
  },
  {
    text: "Para Entrega",
    icon: "book",
    link: "/category/entrega/"
  },
  {
    text: "Timeline",
    icon: "clock",
    link: "/timeline/"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar(
  {
    "/posts/": "structure"
  }
);

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  //hostname: "https://20242-ifba-saj-ads-ppr.github.io",
  author: {
    name: "Leandro Souza",
    url: "https://github.com/leandro-costa"
  },
  lastUpdated: false,
  contributors: false,
  //iconAssets: "iconify",
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "20242-ifba-saj-ads-ppr/blog",
  docsDir: "src",
  //docsBranch: "main",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: "Material de aula IFBA SAJ",
  displayFooter: true,
  blog: {
    description: "Professor EBTT",
    //intro: "/intro.html",
    //roundAvatar:true,
    avatar: "/assets/icon/icon-512.png",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa"
    }
  },
  metaLocales: {
    editLink: "Edite esta p\xE1gina no GitHub",
    toc: "Nesta P\xE1gina"
  },
  // enable it to preview all changes in time
  hotReload: true,
  plugins: {
    blog: {
      excerpt: false
    },
    search: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    // These features are enabled for demo, only preserve features you need here
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true
    },
    markdownMath: {
      // install katex before enabling it
      //type: "katex",
      // or install mathjax-full before enabling it
      type: "mathjax"
    },
    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,
    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      gfm: true
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    }
    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/blog/",
  lang: "pt-BR",
  title: "20242 PPR Blog das Aulas",
  description: "Material das Aulas",
  extendsMarkdown: (md) => {
    md.use(umlPlugin, { openMarker: "```plantuml", closeMarker: "```" });
  },
  theme: theme_default,
  // Enable it with pwa
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9JRkJBLzIwMjQycHByL2Jsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSUZCQVxcXFwyMDI0MnBwclxcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9JRkJBLzIwMjQycHByL2Jsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB1bWxQbHVnaW4gZnJvbSAnbWFya2Rvd24taXQtcGxhbnR1bWwnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIGJhc2U6IFwiL2Jsb2cvXCIsXHJcblxyXG4gIGxhbmc6IFwicHQtQlJcIixcclxuICB0aXRsZTogXCIyMDI0MiBQUFIgQmxvZyBkYXMgQXVsYXNcIixcclxuICBkZXNjcmlwdGlvbjogXCJNYXRlcmlhbCBkYXMgQXVsYXNcIixcclxuXHJcbiAgZXh0ZW5kc01hcmtkb3duOiAobWQpID0+IHsgICAgXHJcbiAgICBtZC51c2UodW1sUGx1Z2luLCB7b3Blbk1hcmtlcjogJ2BgYHBsYW50dW1sJywgY2xvc2VNYXJrZXI6ICdgYGAnfSlcclxuICB9LFxyXG5cclxuXHJcbiAgdGhlbWUsXHJcblxyXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxyXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovSUZCQS8yMDI0MnBwci9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXElGQkFcXFxcMjAyNDJwcHJcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9JRkJBLzIwMjQycHByL2Jsb2cvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIC8vaG9zdG5hbWU6IFwiaHR0cHM6Ly8yMDI0Mi1pZmJhLXNhai1hZHMtcHByLmdpdGh1Yi5pb1wiLFxyXG5cclxuICBhdXRob3I6IHtcclxuICAgIG5hbWU6IFwiTGVhbmRybyBTb3V6YVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sZWFuZHJvLWNvc3RhXCIsXHJcbiAgfSxcclxuXHJcbiAgbGFzdFVwZGF0ZWQ6IGZhbHNlLFxyXG4gIGNvbnRyaWJ1dG9yczogZmFsc2UsXHJcblxyXG4gIC8vaWNvbkFzc2V0czogXCJpY29uaWZ5XCIsXHJcblxyXG4gIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcclxuXHJcbiAgbG9nbzogXCIvbG9nby5zdmdcIixcclxuXHJcbiAgcmVwbzogXCIyMDI0Mi1pZmJhLXNhai1hZHMtcHByL2Jsb2dcIixcclxuXHJcbiAgZG9jc0RpcjogXCJzcmNcIixcclxuXHJcbiAgLy9kb2NzQnJhbmNoOiBcIm1haW5cIixcclxuXHJcbiAgLy8gbmF2YmFyXHJcbiAgbmF2YmFyLFxyXG5cclxuICAvLyBzaWRlYmFyXHJcbiAgc2lkZWJhcixcclxuXHJcbiAgZm9vdGVyOiBcIk1hdGVyaWFsIGRlIGF1bGEgSUZCQSBTQUpcIixcclxuXHJcbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcclxuXHJcblxyXG5cclxuICBibG9nOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9mZXNzb3IgRUJUVFwiLFxyXG4gICAgLy9pbnRybzogXCIvaW50cm8uaHRtbFwiLFxyXG4gICAgXHJcbiAgICAvL3JvdW5kQXZhdGFyOnRydWUsXHJcbiAgICBcclxuICAgIGF2YXRhcjogXCIvYXNzZXRzL2ljb24vaWNvbi01MTIucG5nXCIsXHJcbiAgICBtZWRpYXM6IHtcclxuICAgICAgRW1haWw6IFwibWFpbHRvOmxlYW5kcm8uY29zdGFAaWZiYS5lZHUuYnJcIixcclxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sZWFuZHJvLWNvc3RhXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1ldGFMb2NhbGVzOiB7XHJcbiAgICBlZGl0TGluazogXCJFZGl0ZSBlc3RhIHBcdTAwRTFnaW5hIG5vIEdpdEh1YlwiLFxyXG4gICAgdG9jOiBcIk5lc3RhIFBcdTAwRTFnaW5hXCIsXHJcbiAgfSxcclxuXHJcbiAgLy8gZW5hYmxlIGl0IHRvIHByZXZpZXcgYWxsIGNoYW5nZXMgaW4gdGltZVxyXG4gIGhvdFJlbG9hZDogdHJ1ZSxcclxuXHJcbiAgcGx1Z2luczoge1xyXG4gICAgYmxvZzoge1xyXG4gICAgICBleGNlcnB0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNlYXJjaDogdHJ1ZSxcclxuXHJcblxyXG5cclxuICAgIC8vIEluc3RhbGwgQHdhbGluZS9jbGllbnQgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAvLyBOb3RlOiBUaGlzIGlzIGZvciB0ZXN0aW5nIE9OTFkhXHJcbiAgICAvLyBZb3UgTVVTVCBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbW1lbnQgc2VydmljZSBpbiBwcm9kdWN0aW9uLlxyXG4gICAgLy8gY29tbWVudDoge1xyXG4gICAgLy8gICBwcm92aWRlcjogXCJXYWxpbmVcIixcclxuICAgIC8vICAgc2VydmVyVVJMOiBcImh0dHBzOi8vd2FsaW5lLWNvbW1lbnQudnVlanMucHJlc3NcIixcclxuICAgIC8vIH0sXHJcblxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBjb21wb25lbnRzOiBbXCJCYWRnZVwiLCBcIlZQQ2FyZFwiXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVGhlc2UgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxyXG4gICAgbWFya2Rvd25JbWFnZToge1xyXG4gICAgICBmaWd1cmU6IHRydWUsXHJcbiAgICAgIGxhenlsb2FkOiB0cnVlLFxyXG4gICAgICBzaXplOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBtYXJrZG93bk1hdGg6IHtcclxuICAgICAgLy8gaW5zdGFsbCBrYXRleCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgLy90eXBlOiBcImthdGV4XCIsXHJcbiAgICAgIC8vIG9yIGluc3RhbGwgbWF0aGpheC1mdWxsIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICB0eXBlOiBcIm1hdGhqYXhcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVGhpcyBmZWF0dXJlcyBpcyBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGlmIHlvdSBuZWVkIGl0XHJcbiAgICBtYXJrZG93blRhYjogdHJ1ZSxcclxuXHJcbiAgICAvLyBUaGVzZSBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXHJcbiAgICBtZEVuaGFuY2U6IHtcclxuICAgICAgYWxpZ246IHRydWUsXHJcbiAgICAgIGF0dHJzOiB0cnVlLFxyXG4gICAgICBjb21wb25lbnQ6IHRydWUsXHJcbiAgICAgIGRlbW86IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IHRydWUsXHJcbiAgICAgIG1hcms6IHRydWUsXHJcbiAgICAgIHBsYW50dW1sOiB0cnVlLFxyXG4gICAgICBzcG9pbGVyOiB0cnVlLFxyXG4gICAgICBzdHlsaXplOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICBzdXA6IHRydWUsXHJcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxyXG4gICAgICB2UHJlOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgLy8gY2hhcnQ6IHRydWUsXHJcblxyXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBlY2hhcnRzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBmbG93Y2hhcnQudHMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIGdmbSByZXF1aXJlcyBtYXRoamF4LWZ1bGwgdG8gcHJvdmlkZSB0ZXggc3VwcG9ydFxyXG4gICAgICBnZm06IHRydWUsXHJcblxyXG4gICAgICAvLyBpbnN0YWxsIG1lcm1haWQgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIC8vIG1lcm1haWQ6IHRydWUsXHJcblxyXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XHJcbiAgICAgIC8vICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyBpbnN0YWxsIEB2dWUvcmVwbCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgLy8gdnVlUGxheWdyb3VuZDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgLy8gc2FuZHBhY2s6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGluc3RhbGwgQHZ1ZXByZXNzL3BsdWdpbi1wd2EgYW5kIHVuY29tbWVudCB0aGVzZSBpZiB5b3Ugd2FudCBhIFBXQVxyXG4gICAgcHdhOiB7XHJcbiAgICAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICAgIGNhY2hlSFRNTDogdHJ1ZSxcclxuICAgICAgYXBwZW5kQmFzZTogdHJ1ZSxcclxuICAgICAgYXBwbGU6IHtcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9pY29uLTE1Mi5wbmdcIixcclxuICAgICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBtc1RpbGU6IHtcclxuICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vaWNvbi0xNDQucG5nXCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vaWNvbi01MTIucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9pY29uLTE5Mi5wbmdcIixcclxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2ljb24tNTEyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2ljb24tMTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGluc3RhbGwgQHZ1ZXByZXNzL3BsdWdpbi1yZXZlYWxqcyBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSBuZWVkIHNsaWRlc1xyXG4gICAgLy8gcmV2ZWFsanM6IHtcclxuICAgIC8vICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcclxuICAgIC8vIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovSUZCQS8yMDI0MnBwci9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXElGQkFcXFxcMjAyNDJwcHJcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSUZCQS8yMDI0MnBwci9ibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXHJcbiAgXCIvXCIsXHJcbiAge1xyXG4gICAgdGV4dDogXCJQdWJsaWNhXHUwMEU3XHUwMEY1ZXNcIixcclxuICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgbGluazogXCIvYXJ0aWNsZS9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiQ2F0ZWdvcmlhXCIsXHJcbiAgICBpY29uOiBcImxpc3RcIixcclxuICAgIGxpbms6IFwiL2NhdGVnb3J5L1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJUYWdcIixcclxuICAgIGljb246IFwidGFnXCIsXHJcbiAgICBsaW5rOiBcIi90YWcvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIkV4ZXJjXHUwMEVEY2lvc1wiLFxyXG4gICAgaWNvbjogXCJib29rXCIsXHJcbiAgICBsaW5rOiBcIi9jYXRlZ29yeS9leGVyY2ljaW8vXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlBhcmEgRW50cmVnYVwiLFxyXG4gICAgaWNvbjogXCJib29rXCIsXHJcbiAgICBsaW5rOiBcIi9jYXRlZ29yeS9lbnRyZWdhL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJUaW1lbGluZVwiLFxyXG4gICAgaWNvbjogXCJjbG9ja1wiLFxyXG4gICAgbGluazogXCIvdGltZWxpbmUvXCIsXHJcbiAgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovSUZCQS8yMDI0MnBwci9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXElGQkFcXFxcMjAyNDJwcHJcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0lGQkEvMjAyNDJwcHIvYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIoe1xyXG4gICAgXCIvcG9zdHMvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgfSxcclxuKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UixTQUFTLHdCQUF3QjtBQUN6VCxPQUFPLGVBQWU7OztBQ0RnUSxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUUvUyxJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxN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
