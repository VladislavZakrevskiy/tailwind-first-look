import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},

	define: {
		__API__: JSON.stringify("http://127.0.0.1:5173"),
	},
});
