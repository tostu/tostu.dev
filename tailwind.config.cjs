/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					"base-100": "#1b1b1f",
					"base-200": "#18181c",
					"base-300": "#161619",
				},
			},
		],
	},
};

module.exports = config;
