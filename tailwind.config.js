/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                'xs': '0px',       // Extra small screens (mobile)
                'sm': '426px',     // Small screens (tablet portrait)
                'md': '1027px',    // Medium screens (tablet landscape to desktop)
                'lg': '1441px',    // Large screens (desktop)
                'xl': '3000px',    // Extra large screens (wider desktop)
              },
        },
    },
    plugins: [],
};
