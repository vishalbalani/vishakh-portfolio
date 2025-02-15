// import next from "eslint-config-next";

// export default [
//   next(),
// ];

import next from "eslint-plugin-next";
import eslint from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended,
  next.configs.recommended,
  {
    ignores: ["node_modules/", "dist/", ".next/"],
  },
];
