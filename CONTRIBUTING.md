# Contributing

## Building

This action uses [Rollup](https://rollupjs.org/) to bundle all dependencies into a single file at `dist/index.js`. The `node_modules` directory is **not** committed to the repository.

After making changes to the source files (`index.js`, `ssm-helper.js`), rebuild the bundle before committing:

```bash
npm install
npm run build
```

The generated `dist/index.js` must be committed, as GitHub Actions runs it directly.

Source: [GitHub docs](https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action#commit-tag-and-push-your-action)