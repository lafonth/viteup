import { defineProject } from "vitest/config";

export default defineProject({
	test: {
		include: ["src/**/*.spec.ts"],
	},
});
