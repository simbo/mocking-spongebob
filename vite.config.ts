import { join } from 'node:path';
import { cwd } from 'node:process';
import { fileURLToPath } from 'node:url';

import htmlMinifier from 'rollup-plugin-html-minifier';
import { defineConfig, Plugin, splitVendorChunkPlugin, UserConfig } from 'vite';

export default defineConfig(async ({ command }) => {
  const mode = command === 'build' ? 'production' : 'development';

  const baseDirectory = cwd();

  const directory = (...path: string[]) => join(baseDirectory, ...path);

  const config: UserConfig = {
    root: directory('src'),
    publicDir: directory('public'),
    mode,
    base: '/mocking-spongebob',
    build: {
      outDir: directory('dist'),
      emptyOutDir: true,
      target: 'es2022',
      sourcemap: true,
      rollupOptions: {
        input: {
          index: fileURLToPath(new URL('src/index.html', import.meta.url))
        },
        plugins: [
          htmlMinifier({
            options: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              preserveLineBreaks: true
            }
          }) as Plugin
        ]
      }
    },
    plugins: [splitVendorChunkPlugin()]
  };

  return config;
});
