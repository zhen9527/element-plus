import{f as n,o as a,c as s,b as e,g as t,h as p,e as o,d as c}from"./app.0d756b62.js";const l='{"title":"Inicio rápido","description":"","frontmatter":{"title":"Inicio rápido"},"headers":[{"level":2,"title":"Uso","slug":"uso"},{"level":3,"title":"Importación completa","slug":"importacion-completa"},{"level":3,"title":"Importación a petición","slug":"importacion-a-peticion"},{"level":2,"title":"Plantilla de inicio","slug":"plantilla-de-inicio"},{"level":3,"title":"Vue CLI","slug":"vue-cli"},{"level":3,"title":"Use Starter Kit","slug":"use-starter-kit"},{"level":2,"title":"Configuración global","slug":"configuracion-global"},{"level":2,"title":"Cómo empezar","slug":"como-empezar"},{"level":2,"title":"Comencemos","slug":"comencemos"}],"relativePath":"es-ES/guide/quickstart.md","lastUpdated":1632303300212}',i={},r=o('<h1 id="inicio-rapido" tabindex="-1">Inicio rápido <a class="header-anchor" href="#inicio-rapido" aria-hidden="true">#</a></h1><p>Esta sección describe cómo utilizar Element Plus en su proyecto.</p><h2 id="uso" tabindex="-1">Uso <a class="header-anchor" href="#uso" aria-hidden="true">#</a></h2><h3 id="importacion-completa" tabindex="-1">Importación completa <a class="header-anchor" href="#importacion-completa" aria-hidden="true">#</a></h3><p>Si no le importa tanto el tamaño del paquete, es más conveniente utilizar la importación completa.</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="importacion-a-peticion" tabindex="-1">Importación a petición <a class="header-anchor" href="#importacion-a-peticion" aria-hidden="true">#</a></h3><p>Necesitas usar un plugin adicional para importar componentes que hayas utilizado.</p>',8),u={id:"auto-importar-recomendado",tabindex:"-1"},d=c("Auto importar "),k=c("Recomendado"),m=c(),g=e("a",{class:"header-anchor",href:"#auto-importar-recomendado","aria-hidden":"true"},"#",-1),h=o('<p>Primero necesita instalar <code>unplugin-vue-components</code>.</p><div class="language-shell"><pre><code><span class="token function">npm</span> instalar desplugin-vue-components\n</code></pre></div><p>A continuación, añade el siguiente código en tu archivo de configuración <code>Vite</code> o <code>webpack</code>.</p><h5 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>\nimportar componentes de <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>\nimportar <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> de <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>\n\nexportar por defecto <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token function">Componentes</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h5 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Para más paquetes (<a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">Rollup</a>, <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI</a>) y configuraciones por favor referencia <a href="https://github.com/antfu/unplugin-vue-components#readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a>.</p><h4 id="importar-manualmente" tabindex="-1">Importar manualmente <a class="header-anchor" href="#importar-manualmente" aria-hidden="true">#</a></h4><p>Element Plus proporciona funcionalidades de <a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer">agitación de árbol</a> basadas en Módulo ES.</p><p>Pero necesita instalar <a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus</a> para importar estilo. Y consulte la <a href="https://github.com/element-plus/unplugin-element-plus#readme" target="_blank" rel="noopener noreferrer">documentación</a> para cómo configurarla.</p><blockquote><p>App.vue</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>Soy ElButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  importar <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> desde <span class="token string">&#39;element-plus&#39;</span>\n  exportar por defecto <span class="token punctuation">{</span>\n    componentes<span class="token operator">:</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>\nimportar ElementPlus de <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>\n\nexportar predeterminado <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="plantilla-de-inicio" tabindex="-1">Plantilla de inicio <a class="header-anchor" href="#plantilla-de-inicio" aria-hidden="true">#</a></h2><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><p>Hemos preparado un plugin <a href="https://github.com/element-plus/vue-cli-plugin-element-plus" target="_blank" rel="noopener noreferrer">Element Plus VueCLI plugin</a>. For <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-cli</a>, you can setup a project based on Element Plus easily.</p><h3 id="use-starter-kit" tabindex="-1">Use Starter Kit <a class="header-anchor" href="#use-starter-kit" aria-hidden="true">#</a></h3><p>Proporcionamos <a href="https://github.com/element-plus/element-plus-starter" target="_blank" rel="noopener noreferrer">plantillas de proyecto</a> genéricas que puede utilizar directamente, además de proporcionar Vite <a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">plantilla</a>. Para Los usuarios de Laravel, también tenemos una <a href="https://github.com/element-plus/element-plus-in-laravel-starter" target="_blank" rel="noopener noreferrer">plantilla correspondiente</a> que también puede descargar y utilizar directamente.</p><h2 id="configuracion-global" tabindex="-1">Configuración global <a class="header-anchor" href="#configuracion-global" aria-hidden="true">#</a></h2><p>Al registrar Elemento Plus, puedes pasar un objeto de configuración global con <code>tamaño</code> y <code>zIndex</code> para establecer el <code>tamaño por defecto</code> para componentes de formulario, y <code>zIndex</code> para componentes emergentes, el valor predeterminado para <code>zIndex</code> es <code>2000</code>.</p><p>Presentación completa de ElementPlus.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> zIndex<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>A petición:</p><div class="language-ts"><pre><code>importar <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> desde <span class="token string">&#39;vue&#39;</span>\nimportar <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> desde <span class="token string">&#39;element-plus&#39;</span>\nimportar aplicación desde <span class="token string">&#39;./App. ue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> createAppěp<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$<span class="token constant">ELEMENT</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// options</span>\n<span class="token punctuation">}</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElButton<span class="token punctuation">)</span>\n</code></pre></div><h2 id="como-empezar" tabindex="-1">Cómo empezar <a class="header-anchor" href="#como-empezar" aria-hidden="true">#</a></h2><p>Con la configuración anterior, todos los componentes del proyecto con la propiedad <code>size</code> tendrán un tamaño por defecto de <code>pequeño</code> y el índice z inicial de la caja emergente será de 3000.</p><div class="glitch-embed-wrap" style="height:420px;width:100%;"><iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true" alt="nuxt-with-element on glitch" style="height:100%;width:100%;border:0;"></iframe></div><h2 id="comencemos" tabindex="-1">Comencemos <a class="header-anchor" href="#comencemos" aria-hidden="true">#</a></h2><p>Puede iniciar su proyecto a partir de ahora, para el uso de cada componente, por favor consulte la documentación individual del componente.</p>',30);i.render=function(o,c,l,i,f,v){const b=n("el-tag");return a(),s("div",null,[r,e("h4",u,[d,t(b,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:p((()=>[k])),_:1}),m,g]),h])};export{l as __pageData,i as default};