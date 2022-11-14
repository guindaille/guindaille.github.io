const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const palette = {
	primary: colors.amber[600],
	secondary: colors.amber[300],
	accent: {
		DEFAULT: colors.lime[400],
		light: colors.lime[200],
		dark: colors.lime[600],
	},
	gray: {
		DEFAULT: colors.gray[400],
		light: colors.gray[200],
		dark: colors.gray[600],
	},
};

/** @type {import("tailwindcss").Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				theme: { ...palette },
			},
			typography: () => ({
				DEFAULT: {
					css: {
						color: palette.gray.light,
						"--tw-prose-body": palette.primary,
						"--tw-prose-headings": palette.secondary,
						"--tw-prose-lead": palette.primary,
						"--tw-prose-bold": palette.secondary,
						"--tw-prose-counters": palette.primary,
						"--tw-prose-bullets": palette.primary,
						"--tw-prose-hr": palette.primary,
						"--tw-prose-quotes": palette.secondary,
						"--tw-prose-quote-borders": palette.primary,
						"--tw-prose-captions": palette.primary,
						"--tw-prose-code": palette.primary,
						"--tw-prose-pre-code": palette.primary,
						"--tw-prose-pre-bg": palette.primary,
						"--tw-prose-th-borders": palette.secondary,
						"--tw-prose-td-borders": palette.gray.dark,
						a: {
							color: palette.accent.light,
							"&:hover": {
								color: palette.accent.dark,
							},
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	]
};
