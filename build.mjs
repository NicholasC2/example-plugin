import { build } from "esbuild";
import fs from "node:fs/promises";
import path from "node:path";

const pkg = JSON.parse(
    await fs.readFile(new URL("./package.json", import.meta.url), "utf8")
);

const outDir = process.env.OUT_DIR ?? "./";
const outFile = path.join(outDir, `${pkg.name}.js`);

await build({
    entryPoints: ["src/index.ts"],
    outfile: outFile,
    bundle: true,
    minify: true,
    platform: "node",
    format: "esm",
    target: "node22",
    external: ["node:*"]
});

console.log(`Built ${outFile}`);