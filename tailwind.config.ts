/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography"

module.exports = {
  content: [
    "slices/**/*.vue",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "content/**/*.{md,vue}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        red: {
          DEFAULT: "#FF2058",
          50: "#FFFDEB",
          100: "#FFF0D1",
          200: "#FFCFA8",
          300: "#FF977A",
          400: "#FF4D4F",
          500: "#FF2058",
          600: "#E60004",
          700: "#AD2600",
          800: "#753500",
          900: "#382600",
          950: "#1F1C00",
        },
        black: "#01011b",
      },
      fontFamily: {
        body: "Raleway",
        head: ["Barlow\\ Condensed"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
      dropShadow: {
        text: "0 4px 4px  hsla(0, 0%, 0%, 0.5)",
      },
    },
  },
  plugins: [
    tailwindTypography,
    // require("@tailwindcss/container-queries"),
    // require("@tailwindcss/typography"),
    // ...
  ],
}
