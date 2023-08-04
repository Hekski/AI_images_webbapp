/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         screens: {
            xs: "480px",
         },
         fontFamily: {
            inter: ["Inter var", "sans-serif"],
         },
         boxShadow: {
            card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
            cardhover: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
         },
         colors: {
            primary: "#534667",
            secondary: "#d7d1e0",
            accent: "#6e5d89",
            "accent-light": "#a99cb6",
            text: "#19151e",
            "text-light": "#6e5d89",
            "text-lighter": "#a99cb6",
            "text-lightest": "#d7d1e0",
            background: "#f7f6f9",
         },
      },
      variants: {
         extend: {
            opacity: ["responsive", "hover", "focus", "group-hover"],
            transition: ["responsive", "hover", "focus", "group-hover"],
         },
      },
   },
   plugins: [],
};
