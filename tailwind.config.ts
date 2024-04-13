import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

// const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            default: {
              foreground: "#666666",
              DEFAULT: "#f1f1f1",
            },
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#3F51B5",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#077DFD",
            },
            danger: {
              foreground: "#FFFFFF",
              DEFAULT: "#F4516C",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#5CBF60",
            },
            warning: {
              foreground: "#FFFFFF",
              DEFAULT: "#FFC107",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
}
export default config
