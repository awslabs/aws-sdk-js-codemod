import { readdirSync, readFileSync } from "fs";
import { runInlineTest } from "jscodeshift/dist/testUtils";
import { join } from "path";

import transformer from "./transformer";

describe("v2-to-v3", () => {
  const fixtureDir = join(__dirname, "__fixtures__");
  const testFilePrefixes = readdirSync(fixtureDir)
    .filter((fileName) => fileName.endsWith(".input.ts"))
    .map((fileName) => fileName.replace(".input.ts", ""));

  describe.each(["global-config"])(`transforms correctly using "%s" data`, (testFilePrefix) => {
    const inputPath = join(fixtureDir, testFilePrefix + `.input.ts`);
    const outputPath = join(fixtureDir, testFilePrefix + `.output.ts`);
    const inputCode = readFileSync(inputPath, "utf8");
    const outputCode = readFileSync(outputPath, "utf8");
    const input = { path: inputPath, source: inputCode };

    // Some tests are tsonly as they fail with babel parser
    // Refs: https://github.com/facebook/jscodeshift/issues/488
    it.each([{ parser: "ts" }, ...(testFilePrefix.startsWith("tsonly-") ? [] : [{}])])(
      "with testOptions: %o",
      (testOptions) => {
        runInlineTest(transformer, null, input, outputCode, testOptions);
      }
    );
  });
});
