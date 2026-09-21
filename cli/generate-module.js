import fs from "fs";

const name = process.argv[2];
if (!name) {
  console.log("Nom du module requis.");
  process.exit(1);
}

const path = `src/modules/${name}/`;
fs.mkdirSync(path, { recursive: true });

fs.writeFileSync(`${path}/${name}.js`, `export default function ${name}() {}`);
console.log(`Module ${name} créé.`);
