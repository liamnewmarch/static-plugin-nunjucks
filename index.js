import nunjucks from 'nunjucks';

export default function ({
  extensions = {},
  filters = {},
  globals = {},
  templates = 'templates',
} = {}) {
  const env = new nunjucks.Environment([
    new nunjucks.FileSystemLoader(templates, {
      watch: true,
    }),
  ]);

  for (const extension of Object.entries(extensions)) {
    env.addExtension(...extension);
  }

  for (const filter of Object.entries(filters)) {
    env.addFilter(...filter);
  }

  for (const global of Object.entries(globals)) {
    env.addGlobal(...global);
  }

  return {
    render(page) {
      if (!page.template) return;
      return env.render(page.template, page);
    },
  };
}
