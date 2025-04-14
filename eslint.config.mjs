import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript"],
        rules: {
            "@next/next/no-sync-scripts": "off",
            "react-hooks/exhaustive-deps": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-console": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-explicit-any": "off"
        }
    })

];

export default eslintConfig;
