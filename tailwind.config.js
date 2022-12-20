module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			outline: {
				blue: "2px solid #3b82f6",
				"blue-4": "4px solid #3b82f6",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [],
	important: true,
};
