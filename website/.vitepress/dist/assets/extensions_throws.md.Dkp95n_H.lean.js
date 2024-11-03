import{_ as n,c as e,ab as l,j as s,G as k,w as t,a as h,B as p,o as E}from"./chunks/framework.C8z2ngkq.js";const G=JSON.parse('{"title":"Throws","description":"","frontmatter":{},"headers":[],"relativePath":"extensions/throws.md","filePath":"extensions/throws.md"}'),r={name:"extensions/throws.md"},d={class:"language-ts vp-adaptive-theme"},o={class:"shiki shiki-themes github-light github-dark vp-code twoslash lsp",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0"},g={class:"line"},y={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},F={class:"line"},u={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},B={class:"line"},C={style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},f={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},w={style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},c={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},A={style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},m={style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}};function D(v,i,x,b,T,j){const a=p("v-menu");return E(),e("div",null,[i[43]||(i[43]=l(`<h1 id="throws" tabindex="-1">Throws <a class="header-anchor" href="#throws" aria-label="Permalink to &quot;Throws&quot;">​</a></h1><p class="ExampleLinks">Examples <span class="ExampleLinksTitleSeparator">-&gt;</span> <a href="../../examples/extension/throws">Throws</a></p><p>The <code>Throws</code> extension decorates the builder with a new method for adjusting output such that requests will throw on any error encountered.</p><p>This is convenient if you do not configure your base instance&#39;s output to always throw yet still find utility for doing so in some cases.</p><p>Example before/after:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graffle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    envelope: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // enabled: true | false &lt;-- Your choice here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      errors: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        execution: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        other: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    errors: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      execution: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`throw\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`throw\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graffle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p><code>Throws</code> is a first party extension shipping in the graffle package.</p>`,9)),s("div",d,[i[41]||(i[41]=s("button",{title:"Copy Code",class:"copy"},null,-1)),i[42]||(i[42]=s("span",{class:"lang"},"ts",-1)),s("pre",o,[s("code",null,[s("span",g,[i[2]||(i[2]=s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import",-1)),i[3]||(i[3]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ",-1)),s("span",y,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[0]||(i[0]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Graffle")])],-1)])),default:t(()=>[i[1]||(i[1]=s("span",null,"Graffle",-1))]),_:1})]),i[4]||(i[4]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } ",-1)),i[5]||(i[5]=s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from",-1)),i[6]||(i[6]=s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'graffle'",-1))]),i[37]||(i[37]=h(`
`)),s("span",F,[i[9]||(i[9]=s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import",-1)),i[10]||(i[10]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ",-1)),s("span",u,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[7]||(i[7]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Throws"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/Users/jasonkuhrt/projects/jasonkuhrt/graffle/build/extension/extension"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Extension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Throws"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/Users/jasonkuhrt/projects/jasonkuhrt/graffle/build/extension/extension"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">, "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/Users/jasonkuhrt/projects/jasonkuhrt/graffle/build/extension/extension"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"TypeHooks"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])],-1)])),default:t(()=>[i[8]||(i[8]=s("span",null,"Throws",-1))]),_:1})]),i[11]||(i[11]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," } ",-1)),i[12]||(i[12]=s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from",-1)),i[13]||(i[13]=s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'graffle/extensions/throws'",-1))]),i[38]||(i[38]=h(`
`)),i[39]||(i[39]=s("span",{class:"line"},null,-1)),i[40]||(i[40]=h(`
`)),s("span",B,[i[26]||(i[26]=s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const",-1)),i[27]||(i[27]=s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," ",-1)),s("span",C,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[14]||(i[14]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," graffle"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Internal"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<{")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    chain"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ChainDefinition_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<["),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Internal_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RequestMethods_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"With_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Use_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Anyware_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Gql_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Scalar_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]>;")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    context"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Omit"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<...> "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        ..."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    };")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}> "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ... "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"6"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," more"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ... "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," BuilderExtension_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<...>")])])])])],-1)])),default:t(()=>[i[15]||(i[15]=s("span",null,"graffle",-1))]),_:1})]),i[28]||(i[28]=s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =",-1)),i[29]||(i[29]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ",-1)),s("span",f,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[16]||(i[16]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Graffle")])],-1)])),default:t(()=>[i[17]||(i[17]=s("span",null,"Graffle",-1))]),_:1})]),i[30]||(i[30]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".",-1)),s("span",w,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[18]||(i[18]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," create"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," <{")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    schema"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}>("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"input"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    schema"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}) "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Internal"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<{")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    chain"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ChainDefinition_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<["),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Internal_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"RequestMethods_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"With_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Use_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Anyware_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Gql_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Scalar_"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]>;")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"    context"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        ..."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    };")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}> "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ... "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," more"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ... "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    ..."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])])],-1)])),default:t(()=>[i[19]||(i[19]=s("span",null,"create",-1))]),_:1})]),i[31]||(i[31]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({ ",-1)),s("span",c,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[20]||(i[20]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"schema"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": string")])],-1)])),default:t(()=>[i[21]||(i[21]=s("span",null,"schema",-1))]),_:1})]),i[32]||(i[32]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ",-1)),i[33]||(i[33]=s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'...'",-1)),i[34]||(i[34]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }).",-1)),s("span",A,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[22]||(i[22]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Use"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{ "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chain"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ChainDefinition_"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[Internal_, RequestMethods_, With_, Use_, Anyware_, Gql_, Scalar_]"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"context"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": { "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; }; }"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".use: <"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Extension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Throws"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">, "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"TypeHooks"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">>("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"extension"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Extension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Throws"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">, "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"TypeHooks"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">) "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Internal"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<...>"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ..."),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 6"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," more "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," BuilderExtension_"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<...>")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,"TODO Docs.")])],-1)])),default:t(()=>[i[23]||(i[23]=s("span",null,"use",-1))]),_:1})]),i[35]||(i[35]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(",-1)),s("span",m,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[24]||(i[24]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Throws"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/Users/jasonkuhrt/projects/jasonkuhrt/graffle/build/extension/extension"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Extension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Throws"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/Users/jasonkuhrt/projects/jasonkuhrt/graffle/build/extension/extension"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"BuilderExtension"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">, "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/Users/jasonkuhrt/projects/jasonkuhrt/graffle/build/extension/extension"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"TypeHooks"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])],-1)])),default:t(()=>[i[25]||(i[25]=s("span",null,"Throws",-1))]),_:1})]),i[36]||(i[36]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())",-1))])])])]),i[44]||(i[44]=l(`<p>Then chain <code>.throws()</code> whenever needed:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graffle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">document</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graffle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graffle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().mutation.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div>`,2))])}const U=n(r,[["render",D]]);export{G as __pageData,U as default};