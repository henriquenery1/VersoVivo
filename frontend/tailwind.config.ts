import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'image-bg': "url('../../public/whiteaokNigthOk.png')",
        'gradient-linear': 'linear-gradient(180deg, #000428 0%, #00294D 100%)'
      },
      colors: {
        'custom-purple': '#F5F5F5',
        'content-pen': '#020526',
        'old-book-page': '#f3cea1',
        'stormy-grey': '#7B7B82'
      },
      boxShadow: {
        'custom': '0 0 65px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
