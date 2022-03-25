# aws-sdk-js-codemod

## 0.5.2

### Patch Changes

- Use require for custom changelog script ([9413715](https://github.com/awslabs/aws-sdk-js-codemod/commit/9413715))
- Enable @changesets/changelog-github ([f8ab5e1](https://github.com/awslabs/aws-sdk-js-codemod/commit/f8ab5e1))
- Add custom changelog script ([c9ff137](https://github.com/awslabs/aws-sdk-js-codemod/commit/c9ff137))

## 0.5.1

### Patch Changes

- 9b5791a: Update GitHub user to awslabs
- fb0c577: Add Pull Request Template
- cfa2e97: Add CONTRIBUTING.md
- 9a58d12: Add Code of Conduct
- c0f7605: Set Amazon Web Services as author
- f9d1827: Add link to LICENSE from README
- 7c7d1c8: Add MIT-0 License

## 0.5.0

### Minor Changes

- 334a834: Process clients from TS Type Reference

## 0.4.6

### Patch Changes

- af1ba19: Add tests for existing package import/require with services
- f67d3ea: Rename v2 Modules from Client to Service
- 5b77175: Remove promise() calls from clients created from service imports

## 0.4.5

### Patch Changes

- 249dee2: Replace <any> with <unknown>
- 812ab49: Add test with no AWS SDK for JavaScript (v2)
- 8ef2e6d: Rename named import to identifier import
- 3d1b37c: Add test for existing identifier/package require

## 0.4.4

### Patch Changes

- 4053841: Run yarn lint on all source files
- 52fc856: Enable eslint rule array-type with default 'array'
- ea133bb: Enable eslint naming-convention rule with camelCase, UPPER_CASE and PascalCase
- 52947af: Create utility getMergedArrayWithoutDuplicates

## 0.4.3

### Patch Changes

- ea49796: Bump typescript to 4.6
- 8b09b2d: Support parser=ts

## 0.4.2

### Patch Changes

- a72bd0c: Rename Import to Module wherever required
- 34c3fb7: Add utils remove(Require|Import)IdentifierName
- 4df95bd: Add utility getV2ClientModulePath
- d0d459a: Split getV2ClientModuleNames into import/require components
- 38a16cc: Add utils get(Require|Import)IdentifierName
- dd83c82: Split getV2DefaultModuleName into import/require components
- 5690340: Store 'aws-sdk' in constant PACKAGE_NAME

## 0.4.1

### Patch Changes

- 1008a5b: Support transformation for client require

## 0.4.0

### Minor Changes

- 65c166a: Support transformation for global require

## 0.3.1

### Patch Changes

- 339e74a: Handle v2 client imports in case of ImportNamespaceSpecifier
- f4d79c8: Replace jscodeshift-find-imports with source.find() call

## 0.3.0

### Minor Changes

- d5d5e9d: Support transformation of v2 client imports

## 0.2.3

### Patch Changes

- 24f87df: Check for source 'aws-sdk' while removing default imports

## 0.2.2

### Patch Changes

- 84c337a: Remove .promise() from API calls in variable declarator

## 0.2.1

### Patch Changes

- ed78aae: Remove .promise() from API calls which use await

## 0.2.0

### Minor Changes

- a4dc900: Remove .promise() from client API calls

## 0.1.5

### Patch Changes

- c38b72a: Update existing v3 import if already present

## 0.1.4

### Patch Changes

- 62ba488: Sort v3 client imports
- 18ee5bb: Add test for multiple API callbacks

## 0.1.3

### Patch Changes

- ca6077d: Move test files next to source files
- 1112f3f: Update unit tests to follow team jest standards

## 0.1.2

### Patch Changes

- fcd1e82: Removes unused v2 default import

## 0.1.1

### Patch Changes

- 369d337: Update README with instructions to use aws-sdk-js-codemod

## 0.1.0

### Minor Changes

- a8be757: Send updated transform file if a custom transform is selected

### Patch Changes

- e13f64c: Copy code which performs basic transformation of AWS SDK for JavaScript client from v2 to v3
- dbd8346: Adds a placeholder for transforms with information under help option

## 0.0.5

### Patch Changes

- 0baf388: Use npm exec instead of ./node_modules/.bin

## 0.0.4

### Patch Changes

- 978e21a: Make aws-sdk-js-codemod in bin folder executable

## 0.0.3

### Patch Changes

- 3c20ee0: Remove simple-git-hooks on postinstall

## 0.0.2

### Patch Changes

- 91ec885: Copy configuration from trivikr/aws-sdk-js-v2-to-v3
- baafe94: Add a basic wrapper over jscodeshift
