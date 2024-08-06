# React

React is an open source JavaScript library for creating user interfaces.

## Table of content

- [Web application packager](/docs/react/01-web-application-packager.md)
- [JavaScript XML](/docs/react/02-jsx.md)
- [Components](/docs/react/03-components.md)
- [Rendering](/docs/react/04-rendering.md)
- [Hooks](/docs/react/05-hooks.md)
- [Routers](/docs/react/06-routers.md)
- [Styling](/docs/react/08-styling.md)
- [Event Handlers](/docs/react/09-event-handlers.md)

## Deploy in GitHub pages

The first thing we do is type in console.

```bash
npm run build
```

This command is the one thar generates our project to production. The files created are static, so you can use any static file deployment service such as [GitHub Pages](https://pages.github.com/).

We use an npm package which is [gh-pages](https://www.npmjs.com/package/gh-pages)

```bash
npm install gh-pages --save-dev
```

The script is created in the **package.json** to deploy.

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

We add the settings for the deployment of a static site provided by [vite](https://vitejs.dev/guide/static-deploy#github-pages).

```bash
npm run deploy
```
