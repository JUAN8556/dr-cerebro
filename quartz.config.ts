import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Dr. Cerebro — configuración Quartz v4
 * Segundo cerebro personal de Jano (Juan8556)
 * Tema: Dark Tech
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dr. Cerebro",
    pageTitleSuffix: " · Segundo cerebro de Jano",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "Juan8556.github.io/dr-cerebro",
    ignorePatterns: ["private", "templates", ".obsidian", "raw", "outputs"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        // Modo claro (fallback — el sitio arranca en oscuro)
        lightMode: {
          light: "#f5f5f7",
          lightgray: "#e1e4e8",
          gray: "#8b949e",
          darkgray: "#24292f",
          dark: "#0d1117",
          secondary: "#6366f1",
          tertiary: "#22d3ee",
          highlight: "rgba(99, 102, 241, 0.1)",
          textHighlight: "#fde04788",
        },
        // Dark Tech — paleta principal
        darkMode: {
          light: "#0a0a0f",       // fondo base casi negro con tinte azulado
          lightgray: "#1a1a24",   // fondo de tarjetas/bordes sutiles
          gray: "#4b5563",        // texto muted
          darkgray: "#e4e4e7",    // texto principal
          dark: "#fafafa",        // texto de headings brillante
          secondary: "#22d3ee",   // cian eléctrico — enlaces, acentos primarios
          tertiary: "#a78bfa",    // violeta — hover, acentos secundarios
          highlight: "rgba(34, 211, 238, 0.12)",
          textHighlight: "#a78bfa33",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
