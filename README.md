# Nunjucks plugin for Static

This plugin adds the Nunjucks template engine to [Static](https://www.npmjs.com/package/@liamnewmarch/static).

## Usage

First, install Static and this plugin

```sh
npm install @liamnewmarch/static @liamnewmarch/static-plugin-nunjucks
```

Next add the plugin in your `static.config.js`

```js
import nunjucks from '@liamnewmarch/static-plugin-nunjucks';

export default {
  // Other Static options here (optional)
  plugins: [
    nunjucks({
      // Plugin options here (optional)
    }),
  ],
}
```

## Options

The Nunjucks plugin is a function which can take an optional options object.

* __`extensions` (default: `{}`)__: an object containing [Nunjucks extensions](https://mozilla.github.io/nunjucks/api.html#addextension) to add.
* __`filters` (default: `{}`)__: an object containing [Nunjucks filters](https://mozilla.github.io/nunjucks/api.html#addfilter) to add.
* __`globals` (default: `{}`)__: an object containing [Nunjucks globals](https://mozilla.github.io/nunjucks/api.html#addglobal) to add.
* __`templates` (default: `"templates"`)__: the string path used by [Nunjucks FileSystemLoader](https://mozilla.github.io/nunjucks/api.html#filesystemloader) to load templates.
