export const BUTTON_CLASSIC_EXAMPLE = `<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(240, 240, 240); color: rgb(68, 68, 68);"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"secondary"</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"warning"</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">disabled</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"info"</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"danger"</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"action"</span>&gt;</span>Отправить письмо<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span></span></pre>`;

export const BUTTON_LINK_EXAMPLE = `<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(240, 240, 240); color: rgb(68, 68, 68);"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">href</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"#"</span>&gt;</span>Напомнить PIN-код<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">href</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"https://www.google.com/"</span>&gt;</span>Google.com<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">to</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"/example-page"</span>&gt;</span>Example Page<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">to</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"/example-page"</span> <span class="hljs-attr">target</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"_blank"</span>&gt;</span>Example Page (Open in new window)<span class="hljs-tag">&lt;/<span class="hljs-name" style="font-weight: 700;">AppButton</span>&gt;</span></span></pre>`;

export const BUTTON_TIMER_EXAMPLE = `<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(240, 240, 240); color: rgb(68, 68, 68);">&lt;AppButton
  color=<span class="hljs-string" style="color: rgb(136, 0, 0);">"action"</span>
  :<span class="hljs-built_in" style="color: rgb(57, 115, 0);">timer</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"clickMeTimer"</span>
  :disabled=<span class="hljs-string" style="color: rgb(136, 0, 0);">"clickMeIsDisabled"</span>
  @click=<span class="hljs-string" style="color: rgb(136, 0, 0);">"clickMe"</span>
  @<span class="hljs-built_in" style="color: rgb(57, 115, 0);">timer</span>-<span class="hljs-keyword" style="font-weight: 700;">end</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"clickMeEndTimer"</span>
&gt;
  Нажми меня
&lt;/AppButton&gt;
&lt;AppButton 
  :<span class="hljs-built_in" style="color: rgb(57, 115, 0);">timer</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"180000"</span>
  :disabled=<span class="hljs-string" style="color: rgb(136, 0, 0);">"emailButtonIsDisabled"</span>
  @<span class="hljs-built_in" style="color: rgb(57, 115, 0);">timer</span>-<span class="hljs-keyword" style="font-weight: 700;">end</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"emailButtonIsDisabled = false"</span>
&gt;
  Отправить письмо
&lt;/AppButton&gt;
&lt;AppButton color=<span class="hljs-string" style="color: rgb(136, 0, 0);">"info"</span> :<span class="hljs-built_in" style="color: rgb(57, 115, 0);">timer</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"60000"</span>&gt;
  Просто таймер
&lt;/AppButton&gt;

<span class="hljs-keyword" style="font-weight: 700;">let</span> clickMeTimer = ref(<span class="hljs-number" style="color: rgb(136, 0, 0);">0</span>);
<span class="hljs-keyword" style="font-weight: 700;">let</span> clickMeIsDisabled = <span class="hljs-literal" style="color: rgb(120, 169, 96);">false</span>;
<span class="hljs-keyword" style="font-weight: 700;">let</span> emailButtonIsDisabled = ref(<span class="hljs-literal" style="color: rgb(120, 169, 96);">true</span>);

<span class="hljs-keyword" style="font-weight: 700;">function</span> clickMe() {
  clickMeTimer.value = <span class="hljs-number" style="color: rgb(136, 0, 0);">30000</span>;
  clickMeIsDisabled = <span class="hljs-literal" style="color: rgb(120, 169, 96);">true</span>;
}

<span class="hljs-keyword" style="font-weight: 700;">function</span> clickMeEndTimer() {
  clickMeTimer.value = <span class="hljs-number" style="color: rgb(136, 0, 0);">0</span>;
  clickMeIsDisabled = <span class="hljs-literal" style="color: rgb(120, 169, 96);">false</span>;
}</pre>`;

export const BUTTON_MULTI_EXAMPLE = `<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(240, 240, 240); color: rgb(68, 68, 68);"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"arrowBack"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"danger"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"exit"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"quest"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"quest"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"arrowNext"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"danger"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"google"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"info"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"vk"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"action"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"ok"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name" style="font-weight: 700;">AppButton</span> <span class="hljs-attr">icon</span>=<span class="hljs-string" style="color: rgb(136, 0, 0);">"pen"</span> /&gt;</span></span></pre>`;
