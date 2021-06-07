module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primaryYellow: "#FFD100",
				shockingYellow: "#FFEE32",
				charcoal: "#333533",
				offwhite: "#FCF8F8",
				jetblack: "#202020",
				lightgray: "#D6D6D6",
			},
			fontFamily: {
				headerSans: ["Gothic A1"],
				bodySans: ["Roboto Slab"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
