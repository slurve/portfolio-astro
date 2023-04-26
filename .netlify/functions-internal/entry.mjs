import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.128c7376.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3 } from './chunks/pages/all.2b30d1e2.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                 *//* empty css                                    *//* empty css                                *//* empty css                                    *//* empty css                                    */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/projects.astro", _page1],["src/pages/blog.astro", _page2],["src/pages/[...uri].astro", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["/_astro/_...uri_.65f8f3c2.css","/_astro/index.952f39d9.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/projects.0373d21b.css","/_astro/_...uri_.65f8f3c2.css"],"scripts":[],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/blog.3091862d.css","/_astro/_...uri_.65f8f3c2.css"],"scripts":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/_...uri_.65f8f3c2.css","/_astro/_...uri_.b1ae631c.css"],"scripts":[],"routeData":{"route":"/[...uri]","type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...uri","dynamic":true,"spread":true}]],"params":["...uri"],"component":"src/pages/[...uri].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/[...uri].astro",{"propagation":"none","containsHead":true}],["/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/_...uri_.b1ae631c.css","/_astro/_...uri_.65f8f3c2.css","/_astro/blog.3091862d.css","/_astro/index.952f39d9.css","/_astro/projects.0373d21b.css","/android-chrome-192x192.png","/android-chrome-256x256.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/mstile-150x150.png","/safari-pinned-tab.svg","/site.webmanifest","/ubahn.jpg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
