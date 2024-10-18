/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        AnekDevanagari: ["Anek Devanagari", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        courgette: ["Courgette", "cursive"],
        RacingSans: ["Racing Sans One", "sans-serif"],
      },
      backgroundImage: {
        bg1: "url('/image/green_cubes.webp')",
        bg2: "url('/image/bg2.png')",
        bg3: "url('/image/bg3.png')",
        bgd1: "url('/image/green_bg_photo.avif')",
        bgd2: "url('/image/green cubes.avif')",
        bgd3: "url('/image/pawel_unsplash.jpg')",
      },
    },
  },

  // plugins: [import("@tailwindcss/line-clamp")],
});
