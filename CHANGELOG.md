# Changelog

All notable changes to this project will be documented in this file.

## [v2.1.0](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v2.0.0...v2.1.0) (2026-05-19)

### Maintenance

- **Bundle with Rollup** — Replace committed `node_modules` (~27 MB, ~3,350 files) with a single Rollup-bundled `dist/index.js` (~1.7 MB). (#275)

## [v2.0.0](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.5.2...v2.0.0) (2026-05-19)

### Breaking Changes

- **Node.js 24 runtime** — Action now runs on `node24` (previously `node20`). Self-hosted runners must have Node.js 24+ installed.
- **ES modules** — Codebase converted from CommonJS to ES modules, matching the upstream `@actions/core` v3 which is ESM-only.
- **`@actions/core` v3** — Upgraded from `^1.10.1` to `^3.0.1`.
- **`@aws-sdk/client-ssm` v3.1049** — Upgraded from `^3.577.0` to `^3.1049.0`.

### New Features

- **`disable-expand-json` input** — When set to `true`, disables automatic expansion of JSON object parameters into separate environment variables. The raw JSON string is set as a single env var instead. (#272, thanks @amin3mej)

### Maintenance

- Bump `actions/checkout` from 4 to 6.
- Bump `aws-actions/configure-aws-credentials` from 4 to 6.

## [v1.5.2](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.5.1...v1.5.2) (2026-03-26)

- Upgrade action runtime from `node20` to `node24`. (thanks @Shereef)
- Add pagination support for `get-children`. (thanks @OwenRay)
- Bump `@aws-sdk/client-ssm` from 3.540.0 to 3.577.0.

## [v1.5.1](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.5.0...v1.5.1) (2024-03-18)

- Upgrade action runtime from `node16` to `node20`. (thanks @cweiblen)
- Bump `@aws-sdk/client-ssm` from 3.425.0 to 3.535.0.
- Bump `actions/checkout` from 3 to 4.
- Bump `aws-actions/configure-aws-credentials` from 2 to 4.

## [v1.5.0](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.4.0...v1.5.0) (2023-07-12)

- Migrate from `aws-sdk` v2 to `@aws-sdk/client-ssm` v3.
- Bump `actions/checkout` to v3.
- Bump `aws-actions/configure-aws-credentials` from 1 to 2.

## [v1.4.0](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.3.0...v1.4.0) (2022-10-11)

- Upgrade action runtime from `node12` to `node16`.

## [v1.3.0](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.2.1...v1.3.0) (2021-10-29)

- Add `mask-values` input for masking extracted values in GitHub action logs.
- Add `CONTRIBUTING.md`.
- Update dependencies.

## [v1.2.1](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.2...v1.2.1) (2021-05-06)

- Add `get-children` input to retrieve parameters by path.

## [v1.2](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.1...v1.2) (2020-10-09)

- Fix deprecated environment variable setting method.

## [v1.1](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/compare/v1.0...v1.1) (2020-10-01)

- Update NPM packages.

## [v1.0](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/commits/v1.0) (2020-07-23)

- Initial release.
