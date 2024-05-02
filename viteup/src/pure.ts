import { build as viteBuild } from "vite";

import { getEntryPoints } from "./entrypoints.js";
import { getExports } from "./exports.js";
import { readPackageJson } from "./package-pure.js";
import { getViteConfig } from "./vite-config.js";

export { getEntryPoints };
export { getExports };
export { readPackageJson };
export { getViteConfig };

export async function getResolvedViteConfig(pathToPackage = ".") {
	const pkg = readPackageJson(pathToPackage);
	const exports = getExports(pkg);
	const entrypoints = getEntryPoints(exports);

	return await getViteConfig(entrypoints, pathToPackage);
}

export async function build(pathToPackage = ".") {
	const viteConfig = await getResolvedViteConfig(pathToPackage);

	return viteBuild(viteConfig);
}
