import{_ as s,c as n,o as a,a as e}from"./app-us7mUOvw.js";const l={},i=e(`<h1 id="elk" tabindex="-1"><a class="header-anchor" href="#elk"><span>ELK</span></a></h1><h2 id="第十一章-索引index入门" tabindex="-1"><a class="header-anchor" href="#第十一章-索引index入门"><span>第十一章 索引Index入门</span></a></h2><h3 id="一、索引管理" tabindex="-1"><a class="header-anchor" href="#一、索引管理"><span>一、索引管理</span></a></h3><h4 id="_1、为什么我们要手动创建索引" tabindex="-1"><a class="header-anchor" href="#_1、为什么我们要手动创建索引"><span>1、为什么我们要手动创建索引</span></a></h4><p>直接put数据 PUT index/_doc/1,es会自动生成索引，并建立动态映射dynamic mapping。</p><p>在生产上，我们需要自己手动建立索引和映射，为了更好地管理索引。就像数据库的建表语句一样。</p><h4 id="_2、索引管理" tabindex="-1"><a class="header-anchor" href="#_2、索引管理"><span>2、索引管理</span></a></h4><h5 id="_1-创建索引" tabindex="-1"><a class="header-anchor" href="#_1-创建索引"><span>（1）创建索引</span></a></h5><p>创建索引的语法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /index</span>
<span class="line">{</span>
<span class="line">    &quot;settings&quot;: { ... any settings ... },</span>
<span class="line">    &quot;mappings&quot;: {</span>
<span class="line">       &quot;properties&quot; : {</span>
<span class="line">            &quot;field1&quot; : { &quot;type&quot; : &quot;text&quot; }</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    &quot;aliases&quot;: {</span>
<span class="line">    	&quot;default_index&quot;: {}</span>
<span class="line">  } </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;number_of_shards&quot;: 1,</span>
<span class="line">    &quot;number_of_replicas&quot;: 1</span>
<span class="line">  },</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;properties&quot;: {</span>
<span class="line">      &quot;field1&quot;:{</span>
<span class="line">        &quot;type&quot;: &quot;text&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;field2&quot;:{</span>
<span class="line">        &quot;type&quot;: &quot;text&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;aliases&quot;: {</span>
<span class="line">    &quot;default_index&quot;: {}</span>
<span class="line">  } </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</p><p><strong>索引别名</strong></p><p>插入数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">	&quot;field1&quot;:&quot;java&quot;,</span>
<span class="line">	&quot;field2&quot;:&quot;js&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>查询数据 都可以查到</p><p>GET /my_index/_doc/1</p><p>GET /default_index/_doc/1</p><h5 id="_2-查询索引" tabindex="-1"><a class="header-anchor" href="#_2-查询索引"><span>（2）查询索引</span></a></h5><p>GET /my_index/_mapping</p><p>GET /my_index/_setting</p><h5 id="_3-修改索引" tabindex="-1"><a class="header-anchor" href="#_3-修改索引"><span>（3）修改索引</span></a></h5><p>修改副本数</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">PUT /my_index/_settings</span>
<span class="line">{</span>
<span class="line">    &quot;index&quot; : {</span>
<span class="line">        &quot;number_of_replicas&quot; : 2</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-删除索引" tabindex="-1"><a class="header-anchor" href="#_4-删除索引"><span>（4）删除索引</span></a></h5><p>DELETE /my_index</p><p>DELETE /index_one,index_two</p><p>DELETE /index_*</p><p>DELETE /_all</p><p>为了安全起见，防止恶意删除索引，删除时必须指定索引名：</p><p>elasticsearch.yml</p><p>action.destructive_requires_name: true</p><h3 id="二、定制分词器" tabindex="-1"><a class="header-anchor" href="#二、定制分词器"><span>二、定制分词器</span></a></h3><h4 id="_1、默认的分词器" tabindex="-1"><a class="header-anchor" href="#_1、默认的分词器"><span>1、默认的分词器</span></a></h4><p>standard</p><p>分词三个组件，character filter，tokenizer，token filter</p><p>standard tokenizer：以单词边界进行切分</p><p>standard token filter：什么都不做</p><p>lowercase token filter：将所有字母转换为小写</p><p>stop token filer（默认被禁用）：移除停用词，比如a the it等等</p><h4 id="_2、修改分词器的设置" tabindex="-1"><a class="header-anchor" href="#_2、修改分词器的设置"><span>2、修改分词器的设置</span></a></h4><p>启用english停用词token filter</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;analysis&quot;: {</span>
<span class="line">      &quot;analyzer&quot;: {</span>
<span class="line">        &quot;es_std&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;standard&quot;,</span>
<span class="line">          &quot;stopwords&quot;: &quot;_english_&quot;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13</p><p>测试分词</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /my_index/_analyze</span>
<span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;standard&quot;, </span>
<span class="line">  &quot;text&quot;: &quot;a dog is in the house&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">GET /my_index/_analyze</span>
<span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;es_std&quot;,</span>
<span class="line">  &quot;text&quot;:&quot;a dog is in the house&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、定制化自己的分词器" tabindex="-1"><a class="header-anchor" href="#_3、定制化自己的分词器"><span>3、定制化自己的分词器</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;analysis&quot;: {</span>
<span class="line">      &quot;char_filter&quot;: {</span>
<span class="line">        &quot;&amp;_to_and&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;mapping&quot;,</span>
<span class="line">          &quot;mappings&quot;: [&quot;&amp;=&gt; and&quot;]</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;filter&quot;: {</span>
<span class="line">        &quot;my_stopwords&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;stop&quot;,</span>
<span class="line">          &quot;stopwords&quot;: [&quot;the&quot;, &quot;a&quot;]</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;analyzer&quot;: {</span>
<span class="line">        &quot;my_analyzer&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;custom&quot;,</span>
<span class="line">          &quot;char_filter&quot;: [&quot;html_strip&quot;, &quot;&amp;_to_and&quot;],</span>
<span class="line">          &quot;tokenizer&quot;: &quot;standard&quot;,</span>
<span class="line">          &quot;filter&quot;: [&quot;lowercase&quot;, &quot;my_stopwords&quot;]</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /my_index/_analyze</span>
<span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;my_analyzer&quot;,</span>
<span class="line">  &quot;text&quot;: &quot;tom&amp;jerry are a friend in the house, &lt;a&gt;, HAHA!!&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置字段使用自定义分词器</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_mapping/</span>
<span class="line">{</span>
<span class="line">  &quot;properties&quot;: {</span>
<span class="line">    &quot;content&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">      &quot;analyzer&quot;: &quot;my_analyzer&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、type底层结构及弃用原因" tabindex="-1"><a class="header-anchor" href="#三、type底层结构及弃用原因"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%89%E3%80%81type%E5%BA%95%E5%B1%82%E7%BB%93%E6%9E%84%E5%8F%8A%E5%BC%83%E7%94%A8%E5%8E%9F%E5%9B%A0" target="_blank" rel="noopener noreferrer">#</a>三、type底层结构及弃用原因</span></a></h3><h4 id="_1、type是什么" tabindex="-1"><a class="header-anchor" href="#_1、type是什么"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81type%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noopener noreferrer">#</a>1、type是什么</span></a></h4><p>type，是一个index中用来区分类似的数据的，类似的数据，但是可能有不同的fields，而且有不同的属性来控制索引建立、分词器. field的value，在底层的lucene中建立索引的时候，全部是opaque bytes类型，不区分类型的。 lucene是没有type的概念的，在document中，实际上将type作为一个document的field来存储，即_type，es通过_type来进行type的过滤和筛选。</p><h4 id="_2、es中不同type存储机制" tabindex="-1"><a class="header-anchor" href="#_2、es中不同type存储机制"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81es%E4%B8%AD%E4%B8%8D%E5%90%8Ctype%E5%AD%98%E5%82%A8%E6%9C%BA%E5%88%B6" target="_blank" rel="noopener noreferrer">#</a>2、es中不同type存储机制</span></a></h4><p>一个index中的多个type，实际上是放在一起存储的，因此一个index下，不能有多个type重名，而类型或者其他设置不同的，因为那样是无法处理的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">   &quot;goods&quot;: {</span>
<span class="line">      &quot;mappings&quot;: {</span>
<span class="line">         &quot;electronic_goods&quot;: {</span>
<span class="line">            &quot;properties&quot;: {</span>
<span class="line">               &quot;name&quot;: {</span>
<span class="line">                  &quot;type&quot;: &quot;string&quot;,</span>
<span class="line">               },</span>
<span class="line">               &quot;price&quot;: {</span>
<span class="line">                  &quot;type&quot;: &quot;double&quot;</span>
<span class="line">               },</span>
<span class="line">               &quot;service_period&quot;: {</span>
<span class="line">                  &quot;type&quot;: &quot;string&quot;</span>
<span class="line">                   }			</span>
<span class="line">                }</span>
<span class="line">         },</span>
<span class="line">         &quot;fresh_goods&quot;: {</span>
<span class="line">            &quot;properties&quot;: {</span>
<span class="line">               &quot;name&quot;: {</span>
<span class="line">                  &quot;type&quot;: &quot;string&quot;,</span>
<span class="line">               },</span>
<span class="line">               &quot;price&quot;: {</span>
<span class="line">                  &quot;type&quot;: &quot;double&quot;</span>
<span class="line">               },</span>
<span class="line">               &quot;eat_period&quot;: {</span>
<span class="line">              		&quot;type&quot;: &quot;string&quot;</span>
<span class="line">               }</span>
<span class="line">                }</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /goods/electronic_goods/1</span>
<span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;小米空调&quot;,</span>
<span class="line">  &quot;price&quot;: 1999.0,</span>
<span class="line">  &quot;service_period&quot;: &quot;one year&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /goods/fresh_goods/1</span>
<span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;澳洲龙虾&quot;,</span>
<span class="line">  &quot;price&quot;: 199.0,</span>
<span class="line">  &quot;eat_period&quot;: &quot;one week&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><p>es文档在底层的存储是这样子的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">   &quot;goods&quot;: {</span>
<span class="line">      &quot;mappings&quot;: {</span>
<span class="line">        &quot;_type&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;string&quot;,</span>
<span class="line">          &quot;index&quot;: &quot;false&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;name&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;string&quot;</span>
<span class="line">        }</span>
<span class="line">        &quot;price&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;double&quot;</span>
<span class="line">        }</span>
<span class="line">        &quot;service_period&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;string&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;eat_period&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;string&quot;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22</p><p>底层数据存储格式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;_type&quot;: &quot;electronic_goods&quot;,</span>
<span class="line">  &quot;name&quot;: &quot;小米空调&quot;,</span>
<span class="line">  &quot;price&quot;: 1999.0,</span>
<span class="line">  &quot;service_period&quot;: &quot;one year&quot;,</span>
<span class="line">  &quot;eat_period&quot;: &quot;&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;_type&quot;: &quot;fresh_goods&quot;,</span>
<span class="line">  &quot;name&quot;: &quot;澳洲龙虾&quot;,</span>
<span class="line">  &quot;price&quot;: 199.0,</span>
<span class="line">  &quot;service_period&quot;: &quot;&quot;,</span>
<span class="line">  &quot;eat_period&quot;: &quot;one week&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7</p><h4 id="_3、type弃用" tabindex="-1"><a class="header-anchor" href="#_3、type弃用"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81type%E5%BC%83%E7%94%A8" target="_blank" rel="noopener noreferrer">#</a>3、type弃用</span></a></h4><p>同一索引下，不同type的数据存储其他type的field 大量空值，造成资源浪费。</p><p>所以，不同类型数据，要放到不同的索引中。</p><p>es9中，将会彻底删除type。</p><h3 id="四、定制dynamic-mapping" tabindex="-1"><a class="header-anchor" href="#四、定制dynamic-mapping"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%9B%9B%E3%80%81%E5%AE%9A%E5%88%B6dynamic-mapping" target="_blank" rel="noopener noreferrer">#</a>四、定制dynamic mapping</span></a></h3><h4 id="_1、定制dynamic策略" tabindex="-1"><a class="header-anchor" href="#_1、定制dynamic策略"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E5%AE%9A%E5%88%B6dynamic%E7%AD%96%E7%95%A5" target="_blank" rel="noopener noreferrer">#</a>1、定制dynamic策略</span></a></h4><p>true：遇到陌生字段，就进行dynamic mapping</p><p>false：新检测到的字段将被忽略。这些字段将不会被索引，因此将无法搜索，但仍将出现在返回点击的源字段中。这些字段不会添加到映射中，必须显式添加新字段。</p><p>strict：遇到陌生字段，就报错</p><p>创建mapping</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">    &quot;mappings&quot;: {</span>
<span class="line">      &quot;dynamic&quot;: &quot;strict&quot;,</span>
<span class="line">       &quot;properties&quot;: {</span>
<span class="line">        &quot;title&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;text&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;address&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;object&quot;,</span>
<span class="line">          &quot;dynamic&quot;: &quot;true&quot;</span>
<span class="line">        }</span>
<span class="line">	    }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p><p>插入数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;my article&quot;,</span>
<span class="line">  &quot;content&quot;: &quot;this is my article&quot;,</span>
<span class="line">  &quot;address&quot;: {</span>
<span class="line">    &quot;province&quot;: &quot;guangdong&quot;,</span>
<span class="line">    &quot;city&quot;: &quot;guangzhou&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9</p><p>报错</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;error&quot;: {</span>
<span class="line">    &quot;root_cause&quot;: [</span>
<span class="line">      {</span>
<span class="line">        &quot;type&quot;: &quot;strict_dynamic_mapping_exception&quot;,</span>
<span class="line">        &quot;reason&quot;: &quot;mapping set to strict, dynamic introduction of [content] within [_doc] is not allowed&quot;</span>
<span class="line">      }</span>
<span class="line">    ],</span>
<span class="line">    &quot;type&quot;: &quot;strict_dynamic_mapping_exception&quot;,</span>
<span class="line">    &quot;reason&quot;: &quot;mapping set to strict, dynamic introduction of [content] within [_doc] is not allowed&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;status&quot;: 400</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13</p><h4 id="_2、自定义-dynamic-mapping策略" tabindex="-1"><a class="header-anchor" href="#_2、自定义-dynamic-mapping策略"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E8%87%AA%E5%AE%9A%E4%B9%89-dynamic-mapping%E7%AD%96%E7%95%A5" target="_blank" rel="noopener noreferrer">#</a>2、自定义 dynamic mapping策略</span></a></h4><p>es会根据传入的值，推断类型。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/1569123478530.b00805a3.png" alt="1569123478530"></p><h4 id="date-detection-日期探测" tabindex="-1"><a class="header-anchor" href="#date-detection-日期探测"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#date-detection-%E6%97%A5%E6%9C%9F%E6%8E%A2%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>date_detection 日期探测</span></a></h4><p>默认会按照一定格式识别date，比如yyyy-MM-dd。但是如果某个field先过来一个2017-01-01的值，就会被自动dynamic mapping成date，后面如果再来一个&quot;hello world&quot;之类的值，就会报错。可以手动关闭某个type的date_detection，如果有需要，自己手动指定某个field为date类型。</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">    &quot;mappings&quot;: {</span>
<span class="line">      &quot;date_detection&quot;: false,</span>
<span class="line">       &quot;properties&quot;: {</span>
<span class="line">        &quot;title&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;text&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;address&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;object&quot;,</span>
<span class="line">          &quot;dynamic&quot;: &quot;true&quot;</span>
<span class="line">        }</span>
<span class="line">	    }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p><p>测试</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;my article&quot;,</span>
<span class="line">  &quot;content&quot;: &quot;this is my article&quot;,</span>
<span class="line">  &quot;address&quot;: {</span>
<span class="line">    &quot;province&quot;: &quot;guangdong&quot;,</span>
<span class="line">    &quot;city&quot;: &quot;guangzhou&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;post_date&quot;:&quot;2019-09-10&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10</p><p>查看映射</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /my_index/_mapping</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><h4 id="自定义日期格式" tabindex="-1"><a class="header-anchor" href="#自定义日期格式"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F" target="_blank" rel="noopener noreferrer">#</a>自定义日期格式</span></a></h4><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">PUT my_index</span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;dynamic_date_formats&quot;: [&quot;MM/dd/yyyy&quot;]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><p>插入数据</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">PUT my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;create_date&quot;: &quot;09/25/2019&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><h4 id="numeric-detection-数字探测" tabindex="-1"><a class="header-anchor" href="#numeric-detection-数字探测"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#numeric-detection-%E6%95%B0%E5%AD%97%E6%8E%A2%E6%B5%8B" target="_blank" rel="noopener noreferrer">#</a>numeric_detection 数字探测</span></a></h4><p>虽然json支持本机浮点和整数数据类型，但某些应用程序或语言有时可能将数字呈现为字符串。通常正确的解决方案是显式地映射这些字段，但是可以启用数字检测（默认情况下禁用）来自动完成这些操作。</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">PUT my_index</span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;numeric_detection&quot;: true</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;my_float&quot;:   &quot;1.0&quot;, </span>
<span class="line">  &quot;my_integer&quot;: &quot;1&quot; </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><h4 id="_3、定制自己的dynamic-mapping-template" tabindex="-1"><a class="header-anchor" href="#_3、定制自己的dynamic-mapping-template"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E5%AE%9A%E5%88%B6%E8%87%AA%E5%B7%B1%E7%9A%84dynamic-mapping-template" target="_blank" rel="noopener noreferrer">#</a>3、定制自己的dynamic mapping template</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index</span>
<span class="line">{</span>
<span class="line">    &quot;mappings&quot;: {</span>
<span class="line">            &quot;dynamic_templates&quot;: [</span>
<span class="line">                { </span>
<span class="line">                  &quot;en&quot;: {</span>
<span class="line">                      &quot;match&quot;:              &quot;*_en&quot;, </span>
<span class="line">                      &quot;match_mapping_type&quot;: &quot;string&quot;,</span>
<span class="line">                      &quot;mapping&quot;: {</span>
<span class="line">                          &quot;type&quot;:           &quot;text&quot;,</span>
<span class="line">                          &quot;analyzer&quot;:       &quot;english&quot;</span>
<span class="line">                      }</span>
<span class="line">                }                  </span>
<span class="line">            }</span>
<span class="line">        ]</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17</p><p>插入数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;this is my first article&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">PUT /my_index/_doc/2</span>
<span class="line">{</span>
<span class="line">  &quot;title_en&quot;: &quot;this is my first article&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9</p><p>搜索</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET my_index/_search?q=first</span>
<span class="line">GET my_index/_search?q=is</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2</p><p>title没有匹配到任何的dynamic模板，默认就是standard分词器，不会过滤停用词，is会进入倒排索引，用is来搜索是可以搜索到的</p><p>title_en匹配到了dynamic模板，就是english分词器，会过滤停用词，is这种停用词就会被过滤掉，用is来搜索就搜索不到了</p><h4 id="模板写法" tabindex="-1"><a class="header-anchor" href="#模板写法"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E6%A8%A1%E6%9D%BF%E5%86%99%E6%B3%95" target="_blank" rel="noopener noreferrer">#</a>模板写法</span></a></h4><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">PUT my_index</span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;dynamic_templates&quot;: [</span>
<span class="line">      {</span>
<span class="line">        &quot;integers&quot;: {</span>
<span class="line">          &quot;match_mapping_type&quot;: &quot;long&quot;,</span>
<span class="line">          &quot;mapping&quot;: {</span>
<span class="line">            &quot;type&quot;: &quot;integer&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;strings&quot;: {</span>
<span class="line">          &quot;match_mapping_type&quot;: &quot;string&quot;,</span>
<span class="line">          &quot;mapping&quot;: {</span>
<span class="line">            &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">            &quot;fields&quot;: {</span>
<span class="line">              &quot;raw&quot;: {</span>
<span class="line">                &quot;type&quot;:  &quot;keyword&quot;,</span>
<span class="line">                &quot;ignore_above&quot;: 256</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29</p><p>模板参数</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">&quot;match&quot;:   &quot;long_*&quot;,</span>
<span class="line">&quot;unmatch&quot;: &quot;*_text&quot;,</span>
<span class="line">&quot;match_mapping_type&quot;: &quot;string&quot;,</span>
<span class="line">&quot;path_match&quot;:   &quot;name.*&quot;,</span>
<span class="line">&quot;path_unmatch&quot;: &quot;*.middle&quot;,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string-property property">&quot;match_pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string-property property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^profit_\\d+$&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2</p><h4 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%9C%BA%E6%99%AF" target="_blank" rel="noopener noreferrer">#</a>场景</span></a></h4><p>1结构化搜索</p><p>默认情况下，elasticsearch将字符串字段映射为带有子关键字字段的文本字段。但是，如果只对结构化内容进行索引，而对全文搜索不感兴趣，则可以仅将“字段”映射为“关键字”。请注意，这意味着为了搜索这些字段，必须搜索索引所用的完全相同的值。</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">	{</span>
<span class="line">        &quot;strings_as_keywords&quot;: {</span>
<span class="line">          &quot;match_mapping_type&quot;: &quot;string&quot;,</span>
<span class="line">          &quot;mapping&quot;: {</span>
<span class="line">            &quot;type&quot;: &quot;keyword&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><p>2仅搜索</p><p>与前面的示例相反，如果您只关心字符串字段的全文搜索，并且不打算对字符串字段运行聚合、排序或精确搜索，您可以告诉弹性搜索将其仅映射为文本字段（这是5之前的默认行为）</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">	{</span>
<span class="line">        &quot;strings_as_text&quot;: {</span>
<span class="line">          &quot;match_mapping_type&quot;: &quot;string&quot;,</span>
<span class="line">          &quot;mapping&quot;: {</span>
<span class="line">            &quot;type&quot;: &quot;text&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><p>3norms 不关心评分</p><p>norms是指标时间的评分因素。如果您不关心评分，例如，如果您从不按评分对文档进行排序，则可以在索引中禁用这些评分因子的存储并节省一些空间。</p><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">{</span>
<span class="line">        &quot;strings_as_keywords&quot;: {</span>
<span class="line">          &quot;match_mapping_type&quot;: &quot;string&quot;,</span>
<span class="line">          &quot;mapping&quot;: {</span>
<span class="line">            &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">            &quot;norms&quot;: false,</span>
<span class="line">            &quot;fields&quot;: {</span>
<span class="line">              &quot;keyword&quot;: {</span>
<span class="line">                &quot;type&quot;: &quot;keyword&quot;,</span>
<span class="line">                &quot;ignore_above&quot;: 256</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p><h3 id="五、零停机重建索引" tabindex="-1"><a class="header-anchor" href="#五、零停机重建索引"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%94%E3%80%81%E9%9B%B6%E5%81%9C%E6%9C%BA%E9%87%8D%E5%BB%BA%E7%B4%A2%E5%BC%95" target="_blank" rel="noopener noreferrer">#</a>五、零停机重建索引</span></a></h3><h4 id="_1、零停机重建索引" tabindex="-1"><a class="header-anchor" href="#_1、零停机重建索引"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E9%9B%B6%E5%81%9C%E6%9C%BA%E9%87%8D%E5%BB%BA%E7%B4%A2%E5%BC%95" target="_blank" rel="noopener noreferrer">#</a>1、零停机重建索引</span></a></h4><p>场景：</p><p>一个field的设置是不能被修改的，如果要修改一个Field，那么应该重新按照新的mapping，建立一个index，然后将数据批量查询出来，重新用bulk api写入index中。</p><p>批量查询的时候，建议采用scroll api，并且采用多线程并发的方式来reindex数据，每次scoll就查询指定日期的一段数据，交给一个线程即可。</p><p>(1)一开始，依靠dynamic mapping，插入数据，但是不小心有些数据是2019-09-10这种日期格式的，所以title这种field被自动映射为了date类型，实际上它应该是string类型的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;2019-09-10&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">PUT /my_index/_doc/2</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;2019-09-11&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9</p><p>（2）当后期向索引中加入string类型的title值的时候，就会报错</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_doc/3</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;my first article&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><p>报错</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;error&quot;: {</span>
<span class="line">    &quot;root_cause&quot;: [</span>
<span class="line">      {</span>
<span class="line">        &quot;type&quot;: &quot;mapper_parsing_exception&quot;,</span>
<span class="line">        &quot;reason&quot;: &quot;failed to parse [title]&quot;</span>
<span class="line">      }</span>
<span class="line">    ],</span>
<span class="line">    &quot;type&quot;: &quot;mapper_parsing_exception&quot;,</span>
<span class="line">    &quot;reason&quot;: &quot;failed to parse [title]&quot;,</span>
<span class="line">    &quot;caused_by&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;illegal_argument_exception&quot;,</span>
<span class="line">      &quot;reason&quot;: &quot;Invalid format: \\&quot;my first article\\&quot;&quot;</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;status&quot;: 400</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17</p><p>（3）如果此时想修改title的类型，是不可能的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_mapping</span>
<span class="line">{</span>
<span class="line">  &quot;properties&quot;: {</span>
<span class="line">    &quot;title&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;text&quot;</span>
<span class="line">   	}</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><p>报错</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;error&quot;: {</span>
<span class="line">    &quot;root_cause&quot;: [</span>
<span class="line">      {</span>
<span class="line">        &quot;type&quot;: &quot;illegal_argument_exception&quot;,</span>
<span class="line">        &quot;reason&quot;: &quot;mapper [title] of different type, current_type [date], merged_type [text]&quot;</span>
<span class="line">      }</span>
<span class="line">    ],</span>
<span class="line">    &quot;type&quot;: &quot;illegal_argument_exception&quot;,</span>
<span class="line">    &quot;reason&quot;: &quot;mapper [title] of different type, current_type [date], merged_type [text]&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;status&quot;: 400</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13</p><p>（4）此时，唯一的办法，就是进行reindex，也就是说，重新建立一个索引，将旧索引的数据查询出来，再导入新索引。</p><p>（5）如果说旧索引的名字，是old_index，新索引的名字是new_index，终端java应用，已经在使用old_index在操作了，难道还要去停止java应用，修改使用的index为new_index，才重新启动java应用吗？这个过程中，就会导致java应用停机，可用性降低。</p><p>（6）所以说，给java应用一个别名，这个别名是指向旧索引的，java应用先用着，java应用先用prod_index alias来操作，此时实际指向的是旧的my_index</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index/_alias/prod_index</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>（7）新建一个index，调整其title的类型为string</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index_new</span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;properties&quot;: {</span>
<span class="line">		&quot;title&quot;: {</span>
<span class="line">         &quot;type&quot;: &quot;text&quot;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10</p><p>（8）使用scroll api将数据批量查询出来</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /my_index/_search?scroll=1m</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;match_all&quot;: {}</span>
<span class="line">    },    </span>
<span class="line">    &quot;size&quot;:  1</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7</p><p>返回</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;_scroll_id&quot;: &quot;DnF1ZXJ5VGhlbkZldGNoBQAAAAAAADpAFjRvbnNUWVZaVGpHdklqOV9zcFd6MncAAAAAAAA6QRY0b25zVFlWWlRqR3ZJajlfc3BXejJ3AAAAAAAAOkIWNG9uc1RZVlpUakd2SWo5X3NwV3oydwAAAAAAADpDFjRvbnNUWVZaVGpHdklqOV9zcFd6MncAAAAAAAA6RBY0b25zVFlWWlRqR3ZJajlfc3BXejJ3&quot;,</span>
<span class="line">  &quot;took&quot;: 1,</span>
<span class="line">  &quot;timed_out&quot;: false,</span>
<span class="line">  &quot;_shards&quot;: {</span>
<span class="line">    &quot;total&quot;: 5,</span>
<span class="line">    &quot;successful&quot;: 5,</span>
<span class="line">    &quot;failed&quot;: 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot;: {</span>
<span class="line">    &quot;total&quot;: 3,</span>
<span class="line">    &quot;max_score&quot;: null,</span>
<span class="line">    &quot;hits&quot;: [</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot;: &quot;my_index&quot;,</span>
<span class="line">        &quot;_type&quot;: &quot;my_type&quot;,</span>
<span class="line">        &quot;_id&quot;: &quot;1&quot;,</span>
<span class="line">        &quot;_score&quot;: null,</span>
<span class="line">        &quot;_source&quot;: {</span>
<span class="line">          &quot;title&quot;: &quot;2019-01-02&quot;</span>
<span class="line">        },</span>
<span class="line">        &quot;sort&quot;: [</span>
<span class="line">          0</span>
<span class="line">        ]</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28</p><p>（9）采用bulk api将scoll查出来的一批数据，批量写入新索引</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /_bulk</span>
<span class="line">{ &quot;index&quot;:  { &quot;_index&quot;: &quot;my_index_new&quot;, &quot;_id&quot;: &quot;1&quot; }}</span>
<span class="line">{ &quot;title&quot;:    &quot;2019-09-10&quot; }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3</p><p>（10）反复循环8~9，查询一批又一批的数据出来，采取bulk api将每一批数据批量写入新索引</p><p>（11）将prod_index alias切换到my_index_new上去，java应用会直接通过index别名使用新的索引中的数据，java应用程序不需要停机，零提交，高可用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /_aliases</span>
<span class="line">{</span>
<span class="line">    &quot;actions&quot;: [</span>
<span class="line">        { &quot;remove&quot;: { &quot;index&quot;: &quot;my_index&quot;, &quot;alias&quot;: &quot;prod_index&quot; }},</span>
<span class="line">        { &quot;add&quot;:    { &quot;index&quot;: &quot;my_index_new&quot;, &quot;alias&quot;: &quot;prod_index&quot; }}</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7</p><p>（12）直接通过prod_index别名来查询，是否ok</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /prod_index/_search</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><h4 id="_2、生产实践-基于alias对client透明切换index" tabindex="-1"><a class="header-anchor" href="#_2、生产实践-基于alias对client透明切换index"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E7%94%9F%E4%BA%A7%E5%AE%9E%E8%B7%B5-%E5%9F%BA%E4%BA%8Ealias%E5%AF%B9client%E9%80%8F%E6%98%8E%E5%88%87%E6%8D%A2index" target="_blank" rel="noopener noreferrer">#</a>2、生产实践：基于alias对client透明切换index</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index_v1/_alias/my_index</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>client对my_index进行操作</p><p>reindex操作，完成之后，切换v1到v2</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /_aliases</span>
<span class="line">{</span>
<span class="line">    &quot;actions&quot;: [</span>
<span class="line">        { &quot;remove&quot;: { &quot;index&quot;: &quot;my_index_v1&quot;, &quot;alias&quot;: &quot;my_index&quot; }},</span>
<span class="line">        { &quot;add&quot;:    { &quot;index&quot;: &quot;my_index_v2&quot;, &quot;alias&quot;: &quot;my_index&quot; }}</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7</p><h2 id="第十二章-中文分词器-ik分词器" tabindex="-1"><a class="header-anchor" href="#第十二章-中文分词器-ik分词器"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0-%E4%B8%AD%E6%96%87%E5%88%86%E8%AF%8D%E5%99%A8-ik%E5%88%86%E8%AF%8D%E5%99%A8" target="_blank" rel="noopener noreferrer">#</a>第十二章 中文分词器 IK分词器</span></a></h2><h3 id="一、ik分词器安装使用" tabindex="-1"><a class="header-anchor" href="#一、ik分词器安装使用"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%80%E3%80%81ik%E5%88%86%E8%AF%8D%E5%99%A8%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">#</a>一、Ik分词器安装使用</span></a></h3><h4 id="_1、中文分词器" tabindex="-1"><a class="header-anchor" href="#_1、中文分词器"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E4%B8%AD%E6%96%87%E5%88%86%E8%AF%8D%E5%99%A8" target="_blank" rel="noopener noreferrer">#</a>1、中文分词器</span></a></h4><p>standard 分词器，仅适用于英文。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /_analyze</span>
<span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;standard&quot;,</span>
<span class="line">  &quot;text&quot;: &quot;中华人民共和国人民大会堂&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>我们想要的效果是什么：中华人民共和国，人民大会堂</p><p>IK分词器就是目前最流行的es中文分词器</p><h4 id="_2、安装" tabindex="-1"><a class="header-anchor" href="#_2、安装"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E5%AE%89%E8%A3%85" target="_blank" rel="noopener noreferrer">#</a>2、安装</span></a></h4><p>官网：https://github.com/medcl/elasticsearch-analysis-ik</p><p>下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases</p><p>根据es版本下载相应版本包。</p><p>解压到 es/plugins/ik中。</p><p>重启es</p><h4 id="_3、ik分词器基础知识" tabindex="-1"><a class="header-anchor" href="#_3、ik分词器基础知识"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81ik%E5%88%86%E8%AF%8D%E5%99%A8%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86" target="_blank" rel="noopener noreferrer">#</a>3、ik分词器基础知识</span></a></h4><p>ik_max_word: 会将文本做最细粒度的拆分，比如会将“中华人民共和国人民大会堂”拆分为“中华人民共和国，中华人民，中华，华人，人民共和国，人民大会堂，人民大会，大会堂”，会穷尽各种可能的组合；</p><p>ik_smart: 会做最粗粒度的拆分，比如会将“中华人民共和国人民大会堂”拆分为“中华人民共和国，人民大会堂”。</p><h4 id="_4、ik分词器的使用" tabindex="-1"><a class="header-anchor" href="#_4、ik分词器的使用"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_4%E3%80%81ik%E5%88%86%E8%AF%8D%E5%99%A8%E7%9A%84%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">#</a>4、ik分词器的使用</span></a></h4><p>存储时，使用ik_max_word，搜索时，使用ik_smart</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /my_index </span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">      &quot;properties&quot;: {</span>
<span class="line">        &quot;text&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">          &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span>
<span class="line">          &quot;search_analyzer&quot;: &quot;ik_smart&quot;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12</p><p>搜索</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /my_index/_search?q=中华人民共和国人民大会堂</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><h3 id="二、-ik配置文件" tabindex="-1"><a class="header-anchor" href="#二、-ik配置文件"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%8C%E3%80%81-ik%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">#</a>二、 ik配置文件</span></a></h3><h4 id="_1、-ik配置文件" tabindex="-1"><a class="header-anchor" href="#_1、-ik配置文件"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81-ik%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">#</a>1、 ik配置文件</span></a></h4><p>ik配置文件地址：es/plugins/ik/config目录</p><p>IKAnalyzer.cfg.xml：用来配置自定义词库</p><p>main.dic：ik原生内置的中文词库，总共有27万多条，只要是这些单词，都会被分在一起</p><p>preposition.dic: 介词</p><p>quantifier.dic：放了一些单位相关的词，量词</p><p>suffix.dic：放了一些后缀</p><p>surname.dic：中国的姓氏</p><p>stopword.dic：英文停用词</p><p>ik原生最重要的两个配置文件</p><p>main.dic：包含了原生的中文词语，会按照这个里面的词语去分词</p><p>stopword.dic：包含了英文的停用词</p><p>停用词，stopword</p><p>a the and at but</p><p>一般，像停用词，会在分词的时候，直接被干掉，不会建立在倒排索引中</p><h4 id="_2、自定义词库" tabindex="-1"><a class="header-anchor" href="#_2、自定义词库"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%8D%E5%BA%93" target="_blank" rel="noopener noreferrer">#</a>2、自定义词库</span></a></h4><p>（1）自己建立词库：每年都会涌现一些特殊的流行词，网红，蓝瘦香菇，喊麦，鬼畜，一般不会在ik的原生词典里</p><p>自己补充自己的最新的词语，到ik的词库里面</p><p>IKAnalyzer.cfg.xml：ext_dict，创建mydict.dic。</p><p>补充自己的词语，然后需要重启es，才能生效</p><p>（2）自己建立停用词库：比如了，的，啥，么，我们可能并不想去建立索引，让人家搜索</p><p>custom/ext_stopword.dic，已经有了常用的中文停用词，可以补充自己的停用词，然后重启es</p><h3 id="三、使用mysql热更新-词库" tabindex="-1"><a class="header-anchor" href="#三、使用mysql热更新-词库"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%89%E3%80%81%E4%BD%BF%E7%94%A8mysql%E7%83%AD%E6%9B%B4%E6%96%B0-%E8%AF%8D%E5%BA%93" target="_blank" rel="noopener noreferrer">#</a>三、使用mysql热更新 词库</span></a></h3><h4 id="_1、热更新" tabindex="-1"><a class="header-anchor" href="#_1、热更新"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E7%83%AD%E6%9B%B4%E6%96%B0" target="_blank" rel="noopener noreferrer">#</a>1、热更新</span></a></h4><p>每次都是在es的扩展词典中，手动添加新词语，很坑</p><p>（1）每次添加完，都要重启es才能生效，非常麻烦</p><p>（2）es是分布式的，可能有数百个节点，你不能每次都一个一个节点上面去修改</p><p>es不停机，直接我们在外部某个地方添加新的词语，es中立即热加载到这些新词语</p><p>热更新的方案</p><p>（1）基于ik分词器原生支持的热更新方案，部署一个web服务器，提供一个http接口，通过modified和tag两个http响应头，来提供词语的热更新</p><p>（2）修改ik分词器源码，然后手动支持从mysql中每隔一定时间，自动加载新的词库</p><p>用第二种方案，第一种，ik git社区官方都不建议采用，觉得不太稳定</p><h4 id="_2、步骤" tabindex="-1"><a class="header-anchor" href="#_2、步骤"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E6%AD%A5%E9%AA%A4" target="_blank" rel="noopener noreferrer">#</a>2、步骤</span></a></h4><p>1、下载源码</p><p>https://github.com/medcl/elasticsearch-analysis-ik/releases</p><p>ik分词器，是个标准的java maven工程，直接导入eclipse就可以看到源码</p><p>2、修改源</p><p>org.wltea.analyzer.dic.Dictionary类，160行Dictionary单例类的初始化方法，在这里需要创建一个我们自定义的线程，并且启动它</p><p>org.wltea.analyzer.dic.HotDictReloadThread类：就是死循环，不断调用Dictionary.getSingleton().reLoadMainDict()，去重新加载词典</p><p>Dictionary类，399行：this.loadMySQLExtDict(); 加载mymsql字典。</p><p>Dictionary类，609行：this.loadMySQLStopwordDict();加载mysql停用词</p><p>config下jdbc-reload.properties。mysql配置文件</p><p>3、mvn package打包代码</p><p>target\\releases\\elasticsearch-analysis-ik-7.3.0.zip</p><p>4、解压缩ik压缩包</p><p>将mysql驱动jar，放入ik的目录下</p><p>5、修改jdbc相关配置</p><p>6、重启es</p><p>观察日志，日志中就会显示我们打印的那些东西，比如加载了什么配置，加载了什么词语，什么停用词</p><p>7、在mysql中添加词库与停用词</p><p>8、分词实验，验证热更新生效</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /_analyze</span>
<span class="line">{</span>
<span class="line">  &quot;analyzer&quot;: &quot;ik_smart&quot;,</span>
<span class="line">  &quot;text&quot;: &quot;传智播客&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><h2 id="第十三章-java-api-实现索引管理" tabindex="-1"><a class="header-anchor" href="#第十三章-java-api-实现索引管理"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0-java-api-%E5%AE%9E%E7%8E%B0%E7%B4%A2%E5%BC%95%E7%AE%A1%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>第十三章 java api 实现索引管理</span></a></h2><p>代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">package com.ydlclass.es;</span>
<span class="line"></span>
<span class="line">import org.elasticsearch.action.ActionListener;</span>
<span class="line">import org.elasticsearch.action.admin.indices.alias.Alias;</span>
<span class="line">import org.elasticsearch.action.admin.indices.close.CloseIndexRequest;</span>
<span class="line">import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;</span>
<span class="line">import org.elasticsearch.action.admin.indices.open.OpenIndexRequest;</span>
<span class="line">import org.elasticsearch.action.admin.indices.open.OpenIndexResponse;</span>
<span class="line">import org.elasticsearch.action.support.ActiveShardCount;</span>
<span class="line">import org.elasticsearch.action.support.master.AcknowledgedResponse;</span>
<span class="line">import org.elasticsearch.client.IndicesClient;</span>
<span class="line">import org.elasticsearch.client.RequestOptions;</span>
<span class="line">import org.elasticsearch.client.RestHighLevelClient;</span>
<span class="line">import org.elasticsearch.client.indices.CreateIndexRequest;</span>
<span class="line">import org.elasticsearch.client.indices.CreateIndexResponse;</span>
<span class="line">import org.elasticsearch.client.indices.GetIndexRequest;</span>
<span class="line">import org.elasticsearch.common.settings.Settings;</span>
<span class="line">import org.elasticsearch.common.unit.TimeValue;</span>
<span class="line">import org.elasticsearch.common.xcontent.XContentType;</span>
<span class="line">import org.junit.Test;</span>
<span class="line">import org.junit.runner.RunWith;</span>
<span class="line">import org.springframework.beans.factory.annotation.Autowired;</span>
<span class="line">import org.springframework.boot.test.context.SpringBootTest;</span>
<span class="line">import org.springframework.test.context.junit4.SpringRunner;</span>
<span class="line"></span>
<span class="line">import java.io.IOException;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"></span>
<span class="line">- @author Administrator</span>
<span class="line"></span>
<span class="line">- @version 1.0</span>
<span class="line">  **/</span>
<span class="line">  @SpringBootTest</span>
<span class="line">  @RunWith(SpringRunner.class)</span>
<span class="line">  public class TestIndex {</span>
<span class="line"></span>
<span class="line">  @Autowired</span>
<span class="line">  RestHighLevelClient client;</span>
<span class="line"></span>
<span class="line">//    @Autowired</span>
<span class="line">//    RestClient restClient;</span>
<span class="line"></span>
<span class="line">\`\`\`</span>
<span class="line">//创建索引</span>
<span class="line">@Test</span>
<span class="line">public void testCreateIndex() throws IOException {</span>
<span class="line">    //创建索引对象</span>
<span class="line">    CreateIndexRequest createIndexRequest = new CreateIndexRequest(&quot;ydlclass_book&quot;);</span>
<span class="line">    //设置参数</span>
<span class="line">    createIndexRequest.settings(Settings.builder().put(&quot;number_of_shards&quot;, &quot;1&quot;).put(&quot;number_of_replicas&quot;, &quot;0&quot;));</span>
<span class="line">    //指定映射1</span>
<span class="line">    createIndexRequest.mapping(&quot; {\\n&quot; +</span>
<span class="line">            &quot; \\t\\&quot;properties\\&quot;: {\\n&quot; +</span>
<span class="line">            &quot;            \\&quot;name\\&quot;:{\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;type\\&quot;:\\&quot;keyword\\&quot;\\n&quot; +</span>
<span class="line">            &quot;           },\\n&quot; +</span>
<span class="line">            &quot;           \\&quot;description\\&quot;: {\\n&quot; +</span>
<span class="line">            &quot;              \\&quot;type\\&quot;: \\&quot;text\\&quot;\\n&quot; +</span>
<span class="line">            &quot;           },\\n&quot; +</span>
<span class="line">            &quot;            \\&quot;price\\&quot;:{\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;type\\&quot;:\\&quot;long\\&quot;\\n&quot; +</span>
<span class="line">            &quot;           },\\n&quot; +</span>
<span class="line">            &quot;           \\&quot;pic\\&quot;:{\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;type\\&quot;:\\&quot;text\\&quot;,\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;index\\&quot;:false\\n&quot; +</span>
<span class="line">            &quot;           }\\n&quot; +</span>
<span class="line">            &quot; \\t}\\n&quot; +</span>
<span class="line">            &quot;}&quot;, XContentType.JSON);</span>
<span class="line"></span>
<span class="line">    //指定映射2</span>
<span class="line">\`\`\`</span>
<span class="line"></span>
<span class="line">//        Map&lt;String, Object&gt; message = new HashMap&lt;&gt;();</span>
<span class="line">//        message.put(&quot;type&quot;, &quot;text&quot;);</span>
<span class="line">//        Map&lt;String, Object&gt; properties = new HashMap&lt;&gt;();</span>
<span class="line">//        properties.put(&quot;message&quot;, message);</span>
<span class="line">//        Map&lt;String, Object&gt; mapping = new HashMap&lt;&gt;();</span>
<span class="line">//        mapping.put(&quot;properties&quot;, properties);</span>
<span class="line">//        createIndexRequest.mapping(mapping);</span>
<span class="line"></span>
<span class="line">\`\`\`</span>
<span class="line">    //指定映射3</span>
<span class="line">\`\`\`</span>
<span class="line"></span>
<span class="line">//        XContentBuilder builder = XContentFactory.jsonBuilder();</span>
<span class="line">//        builder.startObject();</span>
<span class="line">//        {</span>
<span class="line">//            builder.startObject(&quot;properties&quot;);</span>
<span class="line">//            {</span>
<span class="line">//                builder.startObject(&quot;message&quot;);</span>
<span class="line">//                {</span>
<span class="line">//                    builder.field(&quot;type&quot;, &quot;text&quot;);</span>
<span class="line">//                }</span>
<span class="line">//                builder.endObject();</span>
<span class="line">//            }</span>
<span class="line">//            builder.endObject();</span>
<span class="line">//        }</span>
<span class="line">//        builder.endObject();</span>
<span class="line">//        createIndexRequest.mapping(builder);</span>
<span class="line"></span>
<span class="line">\`\`\`</span>
<span class="line">    //设置别名</span>
<span class="line">    createIndexRequest.alias(new Alias(&quot;ydlclass_index_new&quot;));</span>
<span class="line"></span>
<span class="line">    // 额外参数</span>
<span class="line">    //设置超时时间</span>
<span class="line">    createIndexRequest.setTimeout(TimeValue.timeValueMinutes(2));</span>
<span class="line">    //设置主节点超时时间</span>
<span class="line">    createIndexRequest.setMasterTimeout(TimeValue.timeValueMinutes(1));</span>
<span class="line">    //在创建索引API返回响应之前等待的活动分片副本的数量，以int形式表示</span>
<span class="line">    createIndexRequest.waitForActiveShards(ActiveShardCount.from(2));</span>
<span class="line">    createIndexRequest.waitForActiveShards(ActiveShardCount.DEFAULT);</span>
<span class="line"></span>
<span class="line">    //操作索引的客户端</span>
<span class="line">    IndicesClient indices = client.indices();</span>
<span class="line">    //执行创建索引库</span>
<span class="line">    CreateIndexResponse createIndexResponse = indices.create(createIndexRequest, RequestOptions.DEFAULT);</span>
<span class="line"></span>
<span class="line">    //得到响应（全部）</span>
<span class="line">    boolean acknowledged = createIndexResponse.isAcknowledged();</span>
<span class="line">    //得到响应 指示是否在超时前为索引中的每个分片启动了所需数量的碎片副本</span>
<span class="line">    boolean shardsAcknowledged = createIndexResponse.isShardsAcknowledged();</span>
<span class="line"></span>
<span class="line">    System.out.println(&quot;!!!!!!!!!!!!!!!!!!!!!!!!!!!&quot; + acknowledged);</span>
<span class="line">    System.out.println(shardsAcknowledged);</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//异步新增索引</span>
<span class="line">@Test</span>
<span class="line">public void testCreateIndexAsync() throws IOException {</span>
<span class="line">    //创建索引对象</span>
<span class="line">    CreateIndexRequest createIndexRequest = new CreateIndexRequest(&quot;ydlclass_book2&quot;);</span>
<span class="line">    //设置参数</span>
<span class="line">    createIndexRequest.settings(Settings.builder().put(&quot;number_of_shards&quot;, &quot;1&quot;).put(&quot;number_of_replicas&quot;, &quot;0&quot;));</span>
<span class="line">    //指定映射1</span>
<span class="line">    createIndexRequest.mapping(&quot; {\\n&quot; +</span>
<span class="line">            &quot; \\t\\&quot;properties\\&quot;: {\\n&quot; +</span>
<span class="line">            &quot;            \\&quot;name\\&quot;:{\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;type\\&quot;:\\&quot;keyword\\&quot;\\n&quot; +</span>
<span class="line">            &quot;           },\\n&quot; +</span>
<span class="line">            &quot;           \\&quot;description\\&quot;: {\\n&quot; +</span>
<span class="line">            &quot;              \\&quot;type\\&quot;: \\&quot;text\\&quot;\\n&quot; +</span>
<span class="line">            &quot;           },\\n&quot; +</span>
<span class="line">            &quot;            \\&quot;price\\&quot;:{\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;type\\&quot;:\\&quot;long\\&quot;\\n&quot; +</span>
<span class="line">            &quot;           },\\n&quot; +</span>
<span class="line">            &quot;           \\&quot;pic\\&quot;:{\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;type\\&quot;:\\&quot;text\\&quot;,\\n&quot; +</span>
<span class="line">            &quot;             \\&quot;index\\&quot;:false\\n&quot; +</span>
<span class="line">            &quot;           }\\n&quot; +</span>
<span class="line">            &quot; \\t}\\n&quot; +</span>
<span class="line">            &quot;}&quot;, XContentType.JSON);</span>
<span class="line"></span>
<span class="line">    //监听方法</span>
<span class="line">    ActionListener&lt;CreateIndexResponse&gt; listener =</span>
<span class="line">            new ActionListener&lt;CreateIndexResponse&gt;() {</span>
<span class="line"></span>
<span class="line">                @Override</span>
<span class="line">                public void onResponse(CreateIndexResponse createIndexResponse) {</span>
<span class="line">                    System.out.println(&quot;!!!!!!!!创建索引成功&quot;);</span>
<span class="line">                    System.out.println(createIndexResponse.toString());</span>
<span class="line">                }</span>
<span class="line"></span>
<span class="line">                @Override</span>
<span class="line">                public void onFailure(Exception e) {</span>
<span class="line">                    System.out.println(&quot;!!!!!!!!创建索引失败&quot;);</span>
<span class="line">                    e.printStackTrace();</span>
<span class="line">                }</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line">    //操作索引的客户端</span>
<span class="line">    IndicesClient indices = client.indices();</span>
<span class="line">    //执行创建索引库</span>
<span class="line">    indices.createAsync(createIndexRequest, RequestOptions.DEFAULT, listener);</span>
<span class="line"></span>
<span class="line">    try {</span>
<span class="line">        Thread.sleep(5000);</span>
<span class="line">    } catch (InterruptedException e) {</span>
<span class="line">        e.printStackTrace();</span>
<span class="line">    }</span>
<span class="line">\`\`\`</span>
<span class="line"></span>
<span class="line">\`\`\`</span>
<span class="line">}</span>
<span class="line">\`\`\`</span>
<span class="line"></span>
<span class="line">\`\`\`</span>
<span class="line">//删除索引库</span>
<span class="line">@Test</span>
<span class="line">public void testDeleteIndex() throws IOException {</span>
<span class="line">    //删除索引对象</span>
<span class="line">    DeleteIndexRequest deleteIndexRequest = new DeleteIndexRequest(&quot;ydlclass_book2&quot;);</span>
<span class="line">    //操作索引的客户端</span>
<span class="line">    IndicesClient indices = client.indices();</span>
<span class="line">    //执行删除索引</span>
<span class="line">    AcknowledgedResponse delete = indices.delete(deleteIndexRequest, RequestOptions.DEFAULT);</span>
<span class="line">    //得到响应</span>
<span class="line">    boolean acknowledged = delete.isAcknowledged();</span>
<span class="line">    System.out.println(acknowledged);</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//异步删除索引库</span>
<span class="line">@Test</span>
<span class="line">public void testDeleteIndexAsync() throws IOException {</span>
<span class="line">    //删除索引对象</span>
<span class="line">    DeleteIndexRequest deleteIndexRequest = new DeleteIndexRequest(&quot;ydlclass_book2&quot;);</span>
<span class="line">    //操作索引的客户端</span>
<span class="line">    IndicesClient indices = client.indices();</span>
<span class="line"></span>
<span class="line">    //监听方法</span>
<span class="line">    ActionListener&lt;AcknowledgedResponse&gt; listener =</span>
<span class="line">            new ActionListener&lt;AcknowledgedResponse&gt;() {</span>
<span class="line">                @Override</span>
<span class="line">                public void onResponse(AcknowledgedResponse deleteIndexResponse) {</span>
<span class="line">                    System.out.println(&quot;!!!!!!!!删除索引成功&quot;);</span>
<span class="line">                    System.out.println(deleteIndexResponse.toString());</span>
<span class="line">                }</span>
<span class="line"></span>
<span class="line">                @Override</span>
<span class="line">                public void onFailure(Exception e) {</span>
<span class="line">                    System.out.println(&quot;!!!!!!!!删除索引失败&quot;);</span>
<span class="line">                    e.printStackTrace();</span>
<span class="line">                }</span>
<span class="line">            };</span>
<span class="line">    //执行删除索引</span>
<span class="line">    indices.deleteAsync(deleteIndexRequest, RequestOptions.DEFAULT, listener);</span>
<span class="line"></span>
<span class="line">    try {</span>
<span class="line">        Thread.sleep(5000);</span>
<span class="line">    } catch (InterruptedException e) {</span>
<span class="line">        e.printStackTrace();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Indices Exists API</span>
<span class="line">@Test</span>
<span class="line">public void testExistIndex() throws IOException {</span>
<span class="line">    GetIndexRequest request = new GetIndexRequest(&quot;ydlclass_book&quot;);</span>
<span class="line">    request.local(false);//从主节点返回本地信息或检索状态</span>
<span class="line">    request.humanReadable(true);//以适合人类的格式返回结果</span>
<span class="line">    request.includeDefaults(false);//是否返回每个索引的所有默认设置</span>
<span class="line"></span>
<span class="line">    boolean exists = client.indices().exists(request, RequestOptions.DEFAULT);</span>
<span class="line">    System.out.println(exists);</span>
<span class="line">}</span>
<span class="line">\`\`\`</span>
<span class="line"></span>
<span class="line">\`\`\`</span>
<span class="line">// Indices Open API</span>
<span class="line">@Test</span>
<span class="line">public void testOpenIndex() throws IOException {</span>
<span class="line">    OpenIndexRequest request = new OpenIndexRequest(&quot;ydlclass_book&quot;);</span>
<span class="line"></span>
<span class="line">    OpenIndexResponse openIndexResponse = client.indices().open(request, RequestOptions.DEFAULT);</span>
<span class="line">    boolean acknowledged = openIndexResponse.isAcknowledged();</span>
<span class="line">    System.out.println(&quot;!!!!!!!!!&quot;+acknowledged);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Indices Close API</span>
<span class="line">@Test</span>
<span class="line">public void testCloseIndex() throws IOException {</span>
<span class="line">    CloseIndexRequest request = new CloseIndexRequest(&quot;index&quot;);</span>
<span class="line">    AcknowledgedResponse closeIndexResponse = client.indices().close(request, RequestOptions.DEFAULT);</span>
<span class="line">    boolean acknowledged = closeIndexResponse.isAcknowledged();</span>
<span class="line">    System.out.println(&quot;!!!!!!!!!&quot;+acknowledged);</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272</p><h2 id="第十四章-search搜索入门" tabindex="-1"><a class="header-anchor" href="#第十四章-search搜索入门"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E5%9B%9B%E7%AB%A0-search%E6%90%9C%E7%B4%A2%E5%85%A5%E9%97%A8" target="_blank" rel="noopener noreferrer">#</a>第十四章 search搜索入门</span></a></h2><h3 id="一、搜索语法入门" tabindex="-1"><a class="header-anchor" href="#一、搜索语法入门"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%80%E3%80%81%E6%90%9C%E7%B4%A2%E8%AF%AD%E6%B3%95%E5%85%A5%E9%97%A8" target="_blank" rel="noopener noreferrer">#</a>一、搜索语法入门</span></a></h3><h4 id="_1、query-string-search" tabindex="-1"><a class="header-anchor" href="#_1、query-string-search"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81query-string-search" target="_blank" rel="noopener noreferrer">#</a>1、query string search</span></a></h4><p>无条件搜索所有</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 969,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 3,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : 1.0,</span>
<span class="line">    &quot;hits&quot; : [</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;1&quot;,</span>
<span class="line">        &quot;_score&quot; : 1.0,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;Bootstrap开发&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201002&quot;,</span>
<span class="line">          &quot;price&quot; : 38.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;bootstrap&quot;,</span>
<span class="line">            &quot;dev&quot;</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;2&quot;,</span>
<span class="line">        &quot;_score&quot; : 1.0,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;java编程思想&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 68.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;java&quot;,</span>
<span class="line">            &quot;dev&quot;</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;3&quot;,</span>
<span class="line">        &quot;_score&quot; : 1.0,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;spring开发基础&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;spring 在java领域非常流行，java程序员都在用。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 88.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-24 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;spring&quot;,</span>
<span class="line">            &quot;java&quot;</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73</p><p>解释</p><p>took：耗费了几毫秒</p><p>timed_out：是否超时，这里是没有</p><p>_shards：到几个分片搜索，成功几个，跳过几个，失败几个。</p><p>hits.total：查询结果的数量，3个document</p><p>hits.max_score：score的含义，就是document对于一个search的相关度的匹配分数，越相关，就越匹配，分数也高</p><p>hits.hits：包含了匹配搜索的document的所有详细数据</p><h4 id="_2、传参" tabindex="-1"><a class="header-anchor" href="#_2、传参"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E4%BC%A0%E5%8F%82" target="_blank" rel="noopener noreferrer">#</a>2、传参</span></a></h4><p>与http请求传参类似</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search?q=name:java&amp;sort=price:desc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>类比sql: select * from book where name like ’ %java%’ order by price desc</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 2,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 1,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : null,</span>
<span class="line">    &quot;hits&quot; : [</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;2&quot;,</span>
<span class="line">        &quot;_score&quot; : null,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;java编程思想&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 68.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;java&quot;,</span>
<span class="line">            &quot;dev&quot;</span>
<span class="line">          ]</span>
<span class="line">        },</span>
<span class="line">        &quot;sort&quot; : [</span>
<span class="line">          68.6</span>
<span class="line">        ]</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40</p><h4 id="_3、图解timeout" tabindex="-1"><a class="header-anchor" href="#_3、图解timeout"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E5%9B%BE%E8%A7%A3timeout" target="_blank" rel="noopener noreferrer">#</a>3、图解timeout</span></a></h4><p>GET /book/_search?timeout=10ms</p><p>全局设置：配置文件中设置 search.default_search_timeout：100ms。默认不超时。</p><h3 id="二、multi-index-多索引搜索" tabindex="-1"><a class="header-anchor" href="#二、multi-index-多索引搜索"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%8C%E3%80%81multi-index-%E5%A4%9A%E7%B4%A2%E5%BC%95%E6%90%9C%E7%B4%A2" target="_blank" rel="noopener noreferrer">#</a>二、multi-index 多索引搜索</span></a></h3><h4 id="_1、multi-index搜索模式" tabindex="-1"><a class="header-anchor" href="#_1、multi-index搜索模式"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81multi-index%E6%90%9C%E7%B4%A2%E6%A8%A1%E5%BC%8F" target="_blank" rel="noopener noreferrer">#</a>1、multi-index搜索模式</span></a></h4><p>告诉你如何一次性搜索多个index和多个type下的数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/_search：所有索引下的所有数据都搜索出来</span>
<span class="line">/index1/_search：指定一个index，搜索其下所有的数据</span>
<span class="line">/index1,index2/_search：同时搜索两个index下的数据</span>
<span class="line">/index*/_search：按照通配符去匹配多个索引</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><p>应用场景：生产环境log索引可以按照日期分开。</p><p>log_to_es_20190910</p><p>log_to_es_20190911</p><p>log_to_es_20180910</p><h4 id="_2、初步图解一下简单的搜索原理" tabindex="-1"><a class="header-anchor" href="#_2、初步图解一下简单的搜索原理"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E5%88%9D%E6%AD%A5%E5%9B%BE%E8%A7%A3%E4%B8%80%E4%B8%8B%E7%AE%80%E5%8D%95%E7%9A%84%E6%90%9C%E7%B4%A2%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">#</a>2、初步图解一下简单的搜索原理</span></a></h4><p>搜索原理初步图解</p><h3 id="三、分页搜索" tabindex="-1"><a class="header-anchor" href="#三、分页搜索"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%89%E3%80%81%E5%88%86%E9%A1%B5%E6%90%9C%E7%B4%A2" target="_blank" rel="noopener noreferrer">#</a>三、分页搜索</span></a></h3><h4 id="_1、分页搜索的语法" tabindex="-1"><a class="header-anchor" href="#_1、分页搜索的语法"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E5%88%86%E9%A1%B5%E6%90%9C%E7%B4%A2%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">#</a>1、分页搜索的语法</span></a></h4><p>sql: select * from book limit 1,5</p><p>size，from</p><p>GET /book/_search?size=10</p><p>GET /book/_search?size=10&amp;from=0</p><p>GET /book/_search?size=10&amp;from=20</p><p>GET /book_search?from=0&amp;size=3</p><h4 id="_2、deep-paging" tabindex="-1"><a class="header-anchor" href="#_2、deep-paging"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81deep-paging" target="_blank" rel="noopener noreferrer">#</a>2、deep paging</span></a></h4><h5 id="什么是deep-paging" tabindex="-1"><a class="header-anchor" href="#什么是deep-paging"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BB%80%E4%B9%88%E6%98%AFdeep-paging" target="_blank" rel="noopener noreferrer">#</a>什么是deep paging</span></a></h5><p>根据相关度评分倒排序，所以分页过深，协调节点会将大量数据聚合分析。</p><h5 id="deep-paging-性能问题" tabindex="-1"><a class="header-anchor" href="#deep-paging-性能问题"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#deep-paging-%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">#</a>deep paging 性能问题</span></a></h5><p>1消耗网络带宽，因为所搜过深的话，各 shard 要把数据传递给 coordinate node，这个过程是有大量数据传递的，消耗网络。</p><p>2消耗内存，各 shard 要把数据传送给 coordinate node，这个传递回来的数据，是被 coordinate node 保存在内存中的，这样会大量消耗内存。</p><p>3消耗cup，coordinate node 要把传回来的数据进行排序，这个排序过程很消耗cpu。 所以：鉴于deep paging的性能问题，所有应尽量减少使用。</p><h3 id="四、-query-string基础语法" tabindex="-1"><a class="header-anchor" href="#四、-query-string基础语法"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%9B%9B%E3%80%81-query-string%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">#</a>四、 query string基础语法</span></a></h3><h4 id="_1、query-string基础语法" tabindex="-1"><a class="header-anchor" href="#_1、query-string基础语法"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81query-string%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">#</a>1、query string基础语法</span></a></h4><p>GET /book/_search?q=name:java</p><p>GET /book/_search?q=+name:java</p><p>GET /book/_search?q=-name:java</p><p>一个是掌握q=field:search content的语法，还有一个是掌握+和-的含义</p><h4 id="_2、-all-metadata的原理和作用" tabindex="-1"><a class="header-anchor" href="#_2、-all-metadata的原理和作用"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81-all-metadata%E7%9A%84%E5%8E%9F%E7%90%86%E5%92%8C%E4%BD%9C%E7%94%A8" target="_blank" rel="noopener noreferrer">#</a>2、_all metadata的原理和作用</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search?q=java</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>直接可以搜索所有的field，任意一个field包含指定的关键字就可以搜索出来。我们在进行中搜索的时候，难道是对document中的每一个field都进行一次搜索吗？不是的。</p><p>es中_all元数据。建立索引的时候，插入一条docunment，es会将所有的field值经行全量分词，把这些分词，放到_all field中。在搜索的时候，没有指定field，就在_all搜索。</p><p>举例</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    name:jack</span>
<span class="line">    email:123@qq.com</span>
<span class="line">    address:beijing</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>_all : jack,123@qq.com,beijing</p><h3 id="五、query-dsl入门" tabindex="-1"><a class="header-anchor" href="#五、query-dsl入门"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%94%E3%80%81query-dsl%E5%85%A5%E9%97%A8" target="_blank" rel="noopener noreferrer">#</a>五、query DSL入门</span></a></h3><h4 id="_1、dsl" tabindex="-1"><a class="header-anchor" href="#_1、dsl"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81dsl" target="_blank" rel="noopener noreferrer">#</a>1、DSL</span></a></h4><p>query string 后边的参数原来越多，搜索条件越来越复杂，不能满足需求。</p><p>GET /book/_search?q=name:java&amp;size=10&amp;from=0&amp;sort=price:desc</p><p>DSL:Domain Specified Language，特定领域的语言</p><p>es特有的搜索语言，可在请求体中携带搜索条件，功能强大。</p><p>查询全部 GET /book/_search</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: { &quot;match_all&quot;: {} }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><p>排序 GET /book/_search?sort=price:desc</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search </span>
<span class="line">{</span>
<span class="line">    &quot;query&quot; : {</span>
<span class="line">        &quot;match&quot; : {</span>
<span class="line">            &quot;name&quot; : &quot; java&quot;</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    &quot;sort&quot;: [</span>
<span class="line">        { &quot;price&quot;: &quot;desc&quot; }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11</p><p>分页查询 GET /book/_search?size=10&amp;from=0</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET  /book/_search </span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: { &quot;match_all&quot;: {} },</span>
<span class="line">  &quot;from&quot;: 0,</span>
<span class="line">  &quot;size&quot;: 1</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><p>指定返回字段 GET /book/ _search? _source=name,studymodel</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search </span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: { &quot;match_all&quot;: {} },</span>
<span class="line">  &quot;_source&quot;: [&quot;name&quot;, &quot;studymodel&quot;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>通过组合以上各种类型查询，实现复杂查询。</p><h4 id="_2、-query-dsl语法" tabindex="-1"><a class="header-anchor" href="#_2、-query-dsl语法"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81-query-dsl%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">#</a>2、 Query DSL语法</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    QUERY_NAME: {</span>
<span class="line">        ARGUMENT: VALUE,</span>
<span class="line">        ARGUMENT: VALUE,...</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    QUERY_NAME: {</span>
<span class="line">        FIELD_NAME: {</span>
<span class="line">            ARGUMENT: VALUE,</span>
<span class="line">            ARGUMENT: VALUE,...</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /test_index/_search </span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;test_field&quot;: &quot;test&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_3、组合多个搜索条件" tabindex="-1"><a class="header-anchor" href="#_3、组合多个搜索条件"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E7%BB%84%E5%90%88%E5%A4%9A%E4%B8%AA%E6%90%9C%E7%B4%A2%E6%9D%A1%E4%BB%B6" target="_blank" rel="noopener noreferrer">#</a>3、组合多个搜索条件</span></a></h4><p>搜索需求：title必须包含elasticsearch，content可以包含elasticsearch也可以不包含，author_id必须不为111</p><p>sql where and or !=</p><p>初始数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /website/_doc/1</span>
<span class="line">{</span>
<span class="line">          &quot;title&quot;: &quot;my hadoop article&quot;,</span>
<span class="line">          &quot;content&quot;: &quot;hadoop is very bad&quot;,</span>
<span class="line">          &quot;author_id&quot;: 111</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">POST /website/_doc/2</span>
<span class="line">{</span>
<span class="line">          &quot;title&quot;: &quot;my elasticsearch  article&quot;,</span>
<span class="line">          &quot;content&quot;: &quot;es is very bad&quot;,</span>
<span class="line">          &quot;author_id&quot;: 112</span>
<span class="line">}</span>
<span class="line">POST /website/_doc/3</span>
<span class="line">{</span>
<span class="line">          &quot;title&quot;: &quot;my elasticsearch article&quot;,</span>
<span class="line">          &quot;content&quot;: &quot;es is very goods&quot;,</span>
<span class="line">          &quot;author_id&quot;: 111</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19</p><p>搜索：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /website/_doc/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;must&quot;: [</span>
<span class="line">        {</span>
<span class="line">          &quot;match&quot;: {</span>
<span class="line">            &quot;title&quot;: &quot;elasticsearch&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ],</span>
<span class="line">      &quot;should&quot;: [</span>
<span class="line">        {</span>
<span class="line">          &quot;match&quot;: {</span>
<span class="line">            &quot;content&quot;: &quot;elasticsearch&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ],</span>
<span class="line">      &quot;must_not&quot;: [</span>
<span class="line">        {</span>
<span class="line">          &quot;match&quot;: {</span>
<span class="line">            &quot;author_id&quot;: 111</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28</p><p>返回：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 488,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 1,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : 0.47000363,</span>
<span class="line">    &quot;hits&quot; : [</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;website&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;2&quot;,</span>
<span class="line">        &quot;_score&quot; : 0.47000363,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;title&quot; : &quot;my elasticsearch  article&quot;,</span>
<span class="line">          &quot;content&quot; : &quot;es is very bad&quot;,</span>
<span class="line">          &quot;author_id&quot; : 112</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30</p><p>更复杂的搜索需求：</p><p>select * from test_index where name=&#39;tom&#39; or (hired =true and (personality =&#39;good&#39; and rude != true ))</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /test_index/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">            &quot;bool&quot;: {</span>
<span class="line">                &quot;must&quot;: { &quot;match&quot;:{ &quot;name&quot;: &quot;tom&quot; }},</span>
<span class="line">                &quot;should&quot;: [</span>
<span class="line">                    { &quot;match&quot;:{ &quot;hired&quot;: true }},</span>
<span class="line">                    { &quot;bool&quot;: {</span>
<span class="line">                        &quot;must&quot;:{ &quot;match&quot;: { &quot;personality&quot;: &quot;good&quot; }},</span>
<span class="line">                        &quot;must_not&quot;: { &quot;match&quot;: { &quot;rude&quot;: true }}</span>
<span class="line">                    }}</span>
<span class="line">                ],</span>
<span class="line">                &quot;minimum_should_match&quot;: 1</span>
<span class="line">            }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16</p><h3 id="六、full-text-search-全文检索" tabindex="-1"><a class="header-anchor" href="#六、full-text-search-全文检索"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%85%AD%E3%80%81full-text-search-%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2" target="_blank" rel="noopener noreferrer">#</a>六、full-text search 全文检索</span></a></h3><h4 id="_1、全文检索" tabindex="-1"><a class="header-anchor" href="#_1、全文检索"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2" target="_blank" rel="noopener noreferrer">#</a>1、全文检索</span></a></h4><p>重新创建book索引</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /book/</span>
<span class="line">{</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;number_of_shards&quot;: 1,</span>
<span class="line">    &quot;number_of_replicas&quot;: 0</span>
<span class="line">  },</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;properties&quot;: {</span>
<span class="line">      &quot;name&quot;:{</span>
<span class="line">        &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">        &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span>
<span class="line">        &quot;search_analyzer&quot;: &quot;ik_smart&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;description&quot;:{</span>
<span class="line">        &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">        &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span>
<span class="line">        &quot;search_analyzer&quot;: &quot;ik_smart&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;studymodel&quot;:{</span>
<span class="line">        &quot;type&quot;: &quot;keyword&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;price&quot;:{</span>
<span class="line">        &quot;type&quot;: &quot;double&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;timestamp&quot;: {</span>
<span class="line">         &quot;type&quot;: &quot;date&quot;,</span>
<span class="line">         &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;pic&quot;:{</span>
<span class="line">        &quot;type&quot;:&quot;text&quot;,</span>
<span class="line">        &quot;index&quot;:false</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35</p><p>插入数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /book/_doc/1</span>
<span class="line">{</span>
<span class="line">&quot;name&quot;: &quot;Bootstrap开发&quot;,</span>
<span class="line">&quot;description&quot;: &quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;,</span>
<span class="line">&quot;studymodel&quot;: &quot;201002&quot;,</span>
<span class="line">&quot;price&quot;:38.6,</span>
<span class="line">&quot;timestamp&quot;:&quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">&quot;pic&quot;:&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">&quot;tags&quot;: [ &quot;bootstrap&quot;, &quot;dev&quot;]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">PUT /book/_doc/2</span>
<span class="line">{</span>
<span class="line">&quot;name&quot;: &quot;java编程思想&quot;,</span>
<span class="line">&quot;description&quot;: &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,</span>
<span class="line">&quot;studymodel&quot;: &quot;201001&quot;,</span>
<span class="line">&quot;price&quot;:68.6,</span>
<span class="line">&quot;timestamp&quot;:&quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">&quot;pic&quot;:&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">&quot;tags&quot;: [ &quot;java&quot;, &quot;dev&quot;]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">PUT /book/_doc/3</span>
<span class="line">{</span>
<span class="line">&quot;name&quot;: &quot;spring开发基础&quot;,</span>
<span class="line">&quot;description&quot;: &quot;spring 在java领域非常流行，java程序员都在用。&quot;,</span>
<span class="line">&quot;studymodel&quot;: &quot;201001&quot;,</span>
<span class="line">&quot;price&quot;:88.6,</span>
<span class="line">&quot;timestamp&quot;:&quot;2019-08-24 19:11:35&quot;,</span>
<span class="line">&quot;pic&quot;:&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">&quot;tags&quot;: [ &quot;spring&quot;, &quot;java&quot;]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32</p><p>搜索</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET  /book/_search </span>
<span class="line">{</span>
<span class="line">    &quot;query&quot; : {</span>
<span class="line">        &quot;match&quot; : {</span>
<span class="line">            &quot;description&quot; : &quot;java程序员&quot;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_2、-score初探" tabindex="-1"><a class="header-anchor" href="#_2、-score初探"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81-score%E5%88%9D%E6%8E%A2" target="_blank" rel="noopener noreferrer">#</a>2、_score初探</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 1,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 2,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : 2.137549,</span>
<span class="line">    &quot;hits&quot; : [</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;3&quot;,</span>
<span class="line">        &quot;_score&quot; : 2.137549,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;spring开发基础&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;spring 在java领域非常流行，java程序员都在用。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 88.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-24 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;spring&quot;,</span>
<span class="line">            &quot;java&quot;</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;2&quot;,</span>
<span class="line">        &quot;_score&quot; : 0.57961315,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;java编程思想&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 68.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;java&quot;,</span>
<span class="line">            &quot;dev&quot;</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55</p><p>结果分析</p><p>1、建立索引时, description字段 term倒排索引</p><p>java 2,3</p><p>程序员 3</p><p>2、搜索时，直接找description中含有java的文档 2,3，并且3号文档含有两个java字段，一个程序员，所以得分高，排在前面。2号文档含有一个java，排在后面。</p><h3 id="七、dsl-语法练习" tabindex="-1"><a class="header-anchor" href="#七、dsl-语法练习"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%83%E3%80%81dsl-%E8%AF%AD%E6%B3%95%E7%BB%83%E4%B9%A0" target="_blank" rel="noopener noreferrer">#</a>七、DSL 语法练习</span></a></h3><h4 id="_1、match-all" tabindex="-1"><a class="header-anchor" href="#_1、match-all"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81match-all" target="_blank" rel="noopener noreferrer">#</a>1、match_all</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;match_all&quot;: {}</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><h4 id="_2、match" tabindex="-1"><a class="header-anchor" href="#_2、match"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81match" target="_blank" rel="noopener noreferrer">#</a>2、match</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">	&quot;query&quot;: { </span>
<span class="line">		&quot;match&quot;: { </span>
<span class="line">			&quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_3、multi-match" tabindex="-1"><a class="header-anchor" href="#_3、multi-match"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81multi-match" target="_blank" rel="noopener noreferrer">#</a>3、multi_match</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;multi_match&quot;: {</span>
<span class="line">      &quot;query&quot;: &quot;java程序员&quot;,</span>
<span class="line">      &quot;fields&quot;: [&quot;name&quot;, &quot;description&quot;]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9</p><h4 id="_4、range-query-范围查询" tabindex="-1"><a class="header-anchor" href="#_4、range-query-范围查询"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_4%E3%80%81range-query-%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2" target="_blank" rel="noopener noreferrer">#</a>4、range query 范围查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;range&quot;: {</span>
<span class="line">      &quot;price&quot;: {</span>
<span class="line">        &quot;gte&quot;: 80,</span>
<span class="line">		&quot;lte&quot;: 90</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11</p><h4 id="_5、term-query" tabindex="-1"><a class="header-anchor" href="#_5、term-query"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_5%E3%80%81term-query" target="_blank" rel="noopener noreferrer">#</a>5、term query</span></a></h4><p>字段为keyword时，存储和搜索都不分词</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;term&quot;: {</span>
<span class="line">      &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_6、terms-query" tabindex="-1"><a class="header-anchor" href="#_6、terms-query"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_6%E3%80%81terms-query" target="_blank" rel="noopener noreferrer">#</a>6、terms query</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: { &quot;terms&quot;: { &quot;tag&quot;: [ &quot;search&quot;, &quot;full_text&quot;, &quot;nosql&quot; ] }}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><h4 id="_7、exist-query-查询有某些字段值的文档" tabindex="-1"><a class="header-anchor" href="#_7、exist-query-查询有某些字段值的文档"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_7%E3%80%81exist-query-%E6%9F%A5%E8%AF%A2%E6%9C%89%E6%9F%90%E4%BA%9B%E5%AD%97%E6%AE%B5%E5%80%BC%E7%9A%84%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">#</a>7、exist query 查询有某些字段值的文档</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;exists&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;join_date&quot;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_8、fuzzy-query" tabindex="-1"><a class="header-anchor" href="#_8、fuzzy-query"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_8%E3%80%81fuzzy-query" target="_blank" rel="noopener noreferrer">#</a>8、Fuzzy query</span></a></h4><p>返回包含与搜索词类似的词的文档，该词由Levenshtein编辑距离度量。</p><p>包括以下几种情况：</p><ul><li>更改角色（box→fox）</li><li>删除字符（aple→apple）</li><li>插入字符（sick→sic）</li><li>调换两个相邻字符（ACT→CAT）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;fuzzy&quot;: {</span>
<span class="line">            &quot;description&quot;: {</span>
<span class="line">                &quot;value&quot;: &quot;jave&quot;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10</p><h4 id="_9、ids" tabindex="-1"><a class="header-anchor" href="#_9、ids"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_9%E3%80%81ids" target="_blank" rel="noopener noreferrer">#</a>9、IDs</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;ids&quot; : {</span>
<span class="line">            &quot;values&quot; : [&quot;1&quot;, &quot;4&quot;, &quot;100&quot;]</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_10、prefix-前缀查询" tabindex="-1"><a class="header-anchor" href="#_10、prefix-前缀查询"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_10%E3%80%81prefix-%E5%89%8D%E7%BC%80%E6%9F%A5%E8%AF%A2" target="_blank" rel="noopener noreferrer">#</a>10、prefix 前缀查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;prefix&quot;: {</span>
<span class="line">            &quot;description&quot;: {</span>
<span class="line">                &quot;value&quot;: &quot;spring&quot;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10</p><h4 id="_11、regexp-query-正则查询" tabindex="-1"><a class="header-anchor" href="#_11、regexp-query-正则查询"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_11%E3%80%81regexp-query-%E6%AD%A3%E5%88%99%E6%9F%A5%E8%AF%A2" target="_blank" rel="noopener noreferrer">#</a>11、regexp query 正则查询</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: {</span>
<span class="line">        &quot;regexp&quot;: {</span>
<span class="line">            &quot;description&quot;: {</span>
<span class="line">                &quot;value&quot;: &quot;j.*a&quot;,</span>
<span class="line">                &quot;flags&quot; : &quot;ALL&quot;,</span>
<span class="line">                &quot;max_determinized_states&quot;: 10000,</span>
<span class="line">                &quot;rewrite&quot;: &quot;constant_score&quot;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13</p><h3 id="八、-filter" tabindex="-1"><a class="header-anchor" href="#八、-filter"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%85%AB%E3%80%81-filter" target="_blank" rel="noopener noreferrer">#</a>八、 Filter</span></a></h3><h4 id="_1、-filter与query示例" tabindex="-1"><a class="header-anchor" href="#_1、-filter与query示例"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81-filter%E4%B8%8Equery%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>1、 filter与query示例</span></a></h4><p>需求：用户查询description中有&quot;java程序员&quot;，并且价格大于80小于90的数据。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;must&quot;: [</span>
<span class="line">        {</span>
<span class="line">          &quot;match&quot;: {</span>
<span class="line">            &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          &quot;range&quot;: {</span>
<span class="line">            &quot;price&quot;: {</span>
<span class="line">              &quot;gte&quot;: 80,</span>
<span class="line">		      &quot;lte&quot;: 90</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22</p><p>使用filter:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;must&quot;: [</span>
<span class="line">        {</span>
<span class="line">          &quot;match&quot;: {</span>
<span class="line">            &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ],</span>
<span class="line">      &quot;filter&quot;: {</span>
<span class="line">        &quot;range&quot;: {</span>
<span class="line">          &quot;price&quot;: {</span>
<span class="line">            &quot;gte&quot;: 80,</span>
<span class="line">		     &quot;lte&quot;: 90</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22</p><h4 id="_2、filter与query对比" tabindex="-1"><a class="header-anchor" href="#_2、filter与query对比"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81filter%E4%B8%8Equery%E5%AF%B9%E6%AF%94" target="_blank" rel="noopener noreferrer">#</a>2、filter与query对比</span></a></h4><p>filter，仅仅只是按照搜索条件过滤出需要的数据而已，不计算任何相关度分数，对相关度没有任何影响。</p><p>query，会去计算每个document相对于搜索条件的相关度，并按照相关度进行排序。</p><p>应用场景：</p><p>一般来说，如果你是在进行搜索，需要将最匹配搜索条件的数据先返回，那么用query 如果你只是要根据一些条件筛选出一部分数据，不关注其排序，那么用filter</p><h4 id="_3、filter与query性能" tabindex="-1"><a class="header-anchor" href="#_3、filter与query性能"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81filter%E4%B8%8Equery%E6%80%A7%E8%83%BD" target="_blank" rel="noopener noreferrer">#</a>3、filter与query性能</span></a></h4><p>filter，不需要计算相关度分数，不需要按照相关度分数进行排序，同时还有内置的自动cache最常使用filter的数据</p><p>query，相反，要计算相关度分数，按照分数进行排序，而且无法cache结果</p><h3 id="九、定位错误语法" tabindex="-1"><a class="header-anchor" href="#九、定位错误语法"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B9%9D%E3%80%81%E5%AE%9A%E4%BD%8D%E9%94%99%E8%AF%AF%E8%AF%AD%E6%B3%95" target="_blank" rel="noopener noreferrer">#</a>九、定位错误语法</span></a></h3><p>验证错误语句：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_validate/query?explain</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;mach&quot;: {</span>
<span class="line">      &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><p>返回：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;valid&quot; : false,</span>
<span class="line">  &quot;error&quot; : &quot;org.elasticsearch.common.ParsingException: no [query] registered for [mach]&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><p>正确</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_validate/query?explain</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><p>返回</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;valid&quot; : true,</span>
<span class="line">  &quot;explanations&quot; : [</span>
<span class="line">    {</span>
<span class="line">      &quot;index&quot; : &quot;book&quot;,</span>
<span class="line">      &quot;valid&quot; : true,</span>
<span class="line">      &quot;explanation&quot; : &quot;description:java description:程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p><p>一般用在那种特别复杂庞大的搜索下，比如你一下子写了上百行的搜索，这个时候可以先用validate api去验证一下，搜索是否合法。</p><p>合法以后，explain就像mysql的执行计划，可以看到搜索的目标等信息。</p><h3 id="十、定制排序规则" tabindex="-1"><a class="header-anchor" href="#十、定制排序规则"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%8D%81%E3%80%81%E5%AE%9A%E5%88%B6%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99" target="_blank" rel="noopener noreferrer">#</a>十、定制排序规则</span></a></h3><h4 id="_1、默认排序规则" tabindex="-1"><a class="header-anchor" href="#_1、默认排序规则"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E9%BB%98%E8%AE%A4%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99" target="_blank" rel="noopener noreferrer">#</a>1、默认排序规则</span></a></h4><p>默认情况下，是按照_score降序排序的</p><p>然而，某些情况下，可能没有有用的_score，比如说filter</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;bool&quot;: {</span>
<span class="line">      &quot;must&quot;: [</span>
<span class="line">        {</span>
<span class="line">          &quot;match&quot;: {</span>
<span class="line">            &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14</p><p>当然，也可以是constant_score</p><h4 id="_2、定制排序规则" tabindex="-1"><a class="header-anchor" href="#_2、定制排序规则"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E5%AE%9A%E5%88%B6%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99" target="_blank" rel="noopener noreferrer">#</a>2、定制排序规则</span></a></h4><p>相当于sql中order by ?sort=sprice:desc</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search </span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;constant_score&quot;: {</span>
<span class="line">      &quot;filter&quot; : {</span>
<span class="line">            &quot;term&quot; : {</span>
<span class="line">                &quot;studymodel&quot; : &quot;201001&quot;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;sort&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;price&quot;: {</span>
<span class="line">        &quot;order&quot;: &quot;asc&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19</p><h3 id="十一、-text字段排序问题" tabindex="-1"><a class="header-anchor" href="#十一、-text字段排序问题"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%8D%81%E4%B8%80%E3%80%81-text%E5%AD%97%E6%AE%B5%E6%8E%92%E5%BA%8F%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">#</a>十一、 Text字段排序问题</span></a></h3><p>如果对一个text field进行排序，结果往往不准确，因为分词后是多个单词，再排序就不是我们想要的结果了。</p><p>通常解决方案是，将一个text field建立两次索引，一个分词，用来进行搜索；一个不分词，用来进行排序。</p><p>fielddate:true</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /website </span>
<span class="line">{</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">  &quot;properties&quot;: {</span>
<span class="line">    &quot;title&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">      &quot;fields&quot;: {</span>
<span class="line">        &quot;keyword&quot;: {</span>
<span class="line">          &quot;type&quot;: &quot;keyword&quot;</span>
<span class="line">        }        </span>
<span class="line">      }      </span>
<span class="line">    },</span>
<span class="line">    &quot;content&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;text&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;post_date&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;date&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;author_id&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;long&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"> }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /website/_doc/1</span>
<span class="line">{</span>
<span class="line">  &quot;title&quot;: &quot;first article&quot;,</span>
<span class="line">  &quot;content&quot;: &quot;this is my second article&quot;,</span>
<span class="line">  &quot;post_date&quot;: &quot;2019-01-01&quot;,</span>
<span class="line">  &quot;author_id&quot;: 110</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">PUT /website/_doc/2</span>
<span class="line">{</span>
<span class="line">    &quot;title&quot;: &quot;second article&quot;,</span>
<span class="line">    &quot;content&quot;: &quot;this is my second article&quot;,</span>
<span class="line">     &quot;post_date&quot;: &quot;2019-01-01&quot;,</span>
<span class="line">    &quot;author_id&quot;: 110</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">PUT /website/_doc/3</span>
<span class="line">{</span>
<span class="line">     &quot;title&quot;: &quot;third article&quot;,</span>
<span class="line">     &quot;content&quot;: &quot;this is my third article&quot;,</span>
<span class="line">     &quot;post_date&quot;: &quot;2019-01-02&quot;,</span>
<span class="line">     &quot;author_id&quot;: 110</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23</p><p>搜索</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /website/_search</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match_all&quot;: {}</span>
<span class="line">  },</span>
<span class="line">  &quot;sort&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;title.keyword&quot;: {</span>
<span class="line">        &quot;order&quot;: &quot;desc&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13</p><h3 id="十二、scroll分批查询" tabindex="-1"><a class="header-anchor" href="#十二、scroll分批查询"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%8D%81%E4%BA%8C%E3%80%81scroll%E5%88%86%E6%89%B9%E6%9F%A5%E8%AF%A2" target="_blank" rel="noopener noreferrer">#</a>十二、Scroll分批查询</span></a></h3><p>场景：下载某一个索引中1亿条数据，到文件或是数据库。</p><p>不能一下全查出来，系统内存溢出。所以使用scoll滚动搜索技术，一批一批查询。</p><p>scoll搜索会在第一次搜索的时候，保存一个当时的视图快照，之后只会基于该旧的视图快照提供数据搜索，如果这个期间数据变更，是不会让用户看到的</p><p>每次发送scroll请求，我们还需要指定一个scoll参数，指定一个时间窗口，每次搜索请求只要在这个时间窗口内能完成就可以了。</p><p>搜索</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search?scroll=1m</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match_all&quot;: {}</span>
<span class="line">  },</span>
<span class="line">  &quot;size&quot;: 3</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7</p><p>返回</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;_scroll_id&quot; : &quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAMOkWTURBNDUtcjZTVUdKMFp5cXloVElOQQ==&quot;,</span>
<span class="line">  &quot;took&quot; : 3,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 3,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : 1.0,</span>
<span class="line">    &quot;hits&quot; : [</span>
<span class="line">     </span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21</p><p>获得的结果会有一个scoll_id，下一次再发送scoll请求的时候，必须带上这个scoll_id</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /_search/scroll</span>
<span class="line">{</span>
<span class="line">    &quot;scroll&quot;: &quot;1m&quot;, </span>
<span class="line">    &quot;scroll_id&quot; : &quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAMOkWTURBNDUtcjZTVUdKMFp5cXloVElOQQ==&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>与分页区别：</p><p>分页给用户看的 deep paging</p><p>scroll是用户系统内部操作，如下载批量数据，数据转移。零停机改变索引映射。</p><h2 id="第十五章-java-api实现搜索" tabindex="-1"><a class="header-anchor" href="#第十五章-java-api实现搜索"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0-java-api%E5%AE%9E%E7%8E%B0%E6%90%9C%E7%B4%A2" target="_blank" rel="noopener noreferrer">#</a>第十五章 java api实现搜索</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>es</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>action<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchRequest</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>action<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchResponse</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RequestOptions</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestHighLevelClient</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>index<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchHit</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchHits</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>builder<span class="token punctuation">.</span></span><span class="token class-name">SearchSourceBuilder</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>sort<span class="token punctuation">.</span></span><span class="token class-name">SortOrder</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token class-name">RunWith</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span></span><span class="token class-name">SpringRunner</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * creste by itheima.itcast</span>
<span class="line"> */</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootTest</span></span>
<span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSearch</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//搜索全部记录</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//        GET book/_search</span></span>
<span class="line"><span class="token comment">//        {</span></span>
<span class="line"><span class="token comment">//            &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;match_all&quot;: {}</span></span>
<span class="line"><span class="token comment">//             }</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//获取某些字段</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">fetchSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//搜索分页</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//    GET book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//          &quot;match_all&quot;: {}</span></span>
<span class="line"><span class="token comment">//       },</span></span>
<span class="line"><span class="token comment">//        &quot;from&quot;: 0,</span></span>
<span class="line"><span class="token comment">//        &quot;size&quot;: 2</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//第几页</span></span>
<span class="line">        <span class="token keyword">int</span> page<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//每页几个</span></span>
<span class="line">        <span class="token keyword">int</span> size<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//下标计算</span></span>
<span class="line">        <span class="token keyword">int</span> from<span class="token operator">=</span><span class="token punctuation">(</span>page<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>size<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//ids搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//           &quot;ids&quot; : {</span></span>
<span class="line"><span class="token comment">//             &quot;values&quot; : [&quot;1&quot;, &quot;4&quot;, &quot;100&quot;]</span></span>
<span class="line"><span class="token comment">//          }</span></span>
<span class="line"><span class="token comment">//     }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">idsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addIds</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//match搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//           &quot;match&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;description&quot;: &quot;java程序员&quot;</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//      }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;java程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//term 搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchTerm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//           &quot;term&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;description&quot;: &quot;java程序员&quot;</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//      }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">termQuery</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;java程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//multi_match搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchMultiMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//          &quot;multi_match&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;query&quot;: &quot;java程序员&quot;,</span></span>
<span class="line"><span class="token comment">//            &quot;fields&quot;: [&quot;name&quot;, &quot;description&quot;]</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//      }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">multiMatchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;java程序员&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//        &quot;bool&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;must&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;multi_match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;query&quot;: &quot;java程序员&quot;,</span></span>
<span class="line"><span class="token comment">//                        &quot;fields&quot;: [&quot;name&quot;,&quot;description&quot;]</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;should&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;studymodel&quot;: &quot;201001&quot;</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ]</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//bool搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchBool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//          &quot;bool&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;must&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;multi_match&quot;: {</span></span>
<span class="line"><span class="token comment">//                  &quot;query&quot;: &quot;java程序员&quot;,</span></span>
<span class="line"><span class="token comment">//                  &quot;fields&quot;: [&quot;name&quot;,&quot;description&quot;]</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;should&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;studymodel&quot;: &quot;201001&quot;</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ]</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//构建multiMatch请求</span></span>
<span class="line">        <span class="token class-name">MultiMatchQueryBuilder</span> multiMatchQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">multiMatchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;java程序员&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//构建match请求</span></span>
<span class="line">        <span class="token class-name">MatchQueryBuilder</span> matchQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;studymodel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;201001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">BoolQueryBuilder</span> boolQueryBuilder<span class="token operator">=</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span>multiMatchQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>matchQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>boolQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//          &quot;bool&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;must&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;multi_match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;query&quot;: &quot;java程序员&quot;,</span></span>
<span class="line"><span class="token comment">//                        &quot;fields&quot;: [&quot;name&quot;,&quot;description&quot;]</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;should&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;studymodel&quot;: &quot;201001&quot;</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;filter&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;range&quot;: {</span></span>
<span class="line"><span class="token comment">//                    &quot;price&quot;: {</span></span>
<span class="line"><span class="token comment">//                        &quot;gte&quot;: 50,</span></span>
<span class="line"><span class="token comment">//                                &quot;lte&quot;: 90</span></span>
<span class="line"><span class="token comment">//                    }</span></span>
<span class="line"><span class="token comment">//                }</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//filter搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//          &quot;bool&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;must&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;multi_match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;query&quot;: &quot;java程序员&quot;,</span></span>
<span class="line"><span class="token comment">//                        &quot;fields&quot;: [&quot;name&quot;,&quot;description&quot;]</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;should&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;studymodel&quot;: &quot;201001&quot;</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//          ],</span></span>
<span class="line"><span class="token comment">//            &quot;filter&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;range&quot;: {</span></span>
<span class="line"><span class="token comment">//                    &quot;price&quot;: {</span></span>
<span class="line"><span class="token comment">//                        &quot;gte&quot;: 50,</span></span>
<span class="line"><span class="token comment">//                         &quot;lte&quot;: 90</span></span>
<span class="line"><span class="token comment">//                    }</span></span>
<span class="line"><span class="token comment">//                }</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//构建multiMatch请求</span></span>
<span class="line">        <span class="token class-name">MultiMatchQueryBuilder</span> multiMatchQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">multiMatchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;java程序员&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//构建match请求</span></span>
<span class="line">        <span class="token class-name">MatchQueryBuilder</span> matchQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;studymodel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;201001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">BoolQueryBuilder</span> boolQueryBuilder<span class="token operator">=</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span>multiMatchQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>matchQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>boolQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//sort搜索</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSearchSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//    GET /book/_search</span></span>
<span class="line"><span class="token comment">//    {</span></span>
<span class="line"><span class="token comment">//        &quot;query&quot;: {</span></span>
<span class="line"><span class="token comment">//        &quot;bool&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;must&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;multi_match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;query&quot;: &quot;java程序员&quot;,</span></span>
<span class="line"><span class="token comment">//                        &quot;fields&quot;: [&quot;name&quot;,&quot;description&quot;]</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;should&quot;: [</span></span>
<span class="line"><span class="token comment">//            {</span></span>
<span class="line"><span class="token comment">//                &quot;match&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;studymodel&quot;: &quot;201001&quot;</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//      ],</span></span>
<span class="line"><span class="token comment">//            &quot;filter&quot;: {</span></span>
<span class="line"><span class="token comment">//                &quot;range&quot;: {</span></span>
<span class="line"><span class="token comment">//                    &quot;price&quot;: {</span></span>
<span class="line"><span class="token comment">//                        &quot;gte&quot;: 50,</span></span>
<span class="line"><span class="token comment">//                                &quot;lte&quot;: 90</span></span>
<span class="line"><span class="token comment">//                    }</span></span>
<span class="line"><span class="token comment">//                }</span></span>
<span class="line"><span class="token comment">//</span></span>
<span class="line"><span class="token comment">//            }</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//    },</span></span>
<span class="line"><span class="token comment">//        &quot;sort&quot;: [</span></span>
<span class="line"><span class="token comment">//        {</span></span>
<span class="line"><span class="token comment">//            &quot;price&quot;: {</span></span>
<span class="line"><span class="token comment">//            &quot;order&quot;: &quot;asc&quot;</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//        }</span></span>
<span class="line"><span class="token comment">//  ]</span></span>
<span class="line"><span class="token comment">//    }</span></span>
<span class="line">        <span class="token comment">//1构建搜索请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//构建multiMatch请求</span></span>
<span class="line">        <span class="token class-name">MultiMatchQueryBuilder</span> multiMatchQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">multiMatchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;java程序员&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//构建match请求</span></span>
<span class="line">        <span class="token class-name">MatchQueryBuilder</span> matchQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;studymodel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;201001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">BoolQueryBuilder</span> boolQueryBuilder<span class="token operator">=</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span>multiMatchQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>matchQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        boolQueryBuilder<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">rangeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>boolQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//按照价格升序</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span> <span class="token class-name">SortOrder</span><span class="token punctuation">.</span><span class="token constant">ASC</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2执行搜索</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3获取结果</span></span>
<span class="line">        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//数据数据</span></span>
<span class="line">        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> id <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">float</span> score <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;description&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Double</span> price <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">)</span> sourceAsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;description:&quot;</span> <span class="token operator">+</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;price:&quot;</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300 301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320 321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340 341 342 343 344 345 346 347 348 349 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 378 379 380 381 382 383 384 385 386 387 388 389 390 391 392 393 394 395 396 397 398 399 400 401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 419 420 421 422 423 424 425 426 427 428 429 430 431 432 433 434 435 436 437 438 439 440 441 442 443 444 445 446 447 448 449 450 451 452 453 454 455 456 457 458 459 460 461 462 463 464 465 466 467 468 469 470 471 472 473 474 475 476 477 478 479 480 481 482 483 484 485 486 487 488 489 490 491 492 493 494 495 496 497 498 499 500 501 502 503 504 505 506 507 508 509 510 511 512 513 514 515 516 517 518 519 520 521 522 523 524 525 526 527 528 529 530 531 532 533 534 535 536 537 538 539 540 541 542 543 544 545 546 547 548 549 550 551 552 553 554 555 556 557 558 559 560 561 562 563 564 565 566 567 568 569 570 571 572 573 574 575 576 577 578 579 580 581 582 583 584 585 586 587 588 589 590 591 592 593 594 595 596 597 598 599 600 601 602 603 604 605 606 607 608 609 610 611 612 613 614 615 616 617 618 619 620 621 622 623 624 625 626 627</p><h2 id="第十六章-评分机制详解" tabindex="-1"><a class="header-anchor" href="#第十六章-评分机制详解"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E5%85%AD%E7%AB%A0-%E8%AF%84%E5%88%86%E6%9C%BA%E5%88%B6%E8%AF%A6%E8%A7%A3" target="_blank" rel="noopener noreferrer">#</a>第十六章 评分机制详解</span></a></h2><h3 id="一、评分机制-tf-idf" tabindex="-1"><a class="header-anchor" href="#一、评分机制-tf-idf"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%80%E3%80%81%E8%AF%84%E5%88%86%E6%9C%BA%E5%88%B6-tf-idf" target="_blank" rel="noopener noreferrer">#</a>一、评分机制 TF\\IDF</span></a></h3><h4 id="_1、算法介绍" tabindex="-1"><a class="header-anchor" href="#_1、算法介绍"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E7%AE%97%E6%B3%95%E4%BB%8B%E7%BB%8D" target="_blank" rel="noopener noreferrer">#</a>1、算法介绍</span></a></h4><p>relevance score算法，简单来说，就是计算出，一个索引中的文本，与搜索文本，他们之间的关联匹配程度。</p><p>Elasticsearch使用的是 term frequency/inverse document frequency算法，简称为TF/IDF算法。TF词频(Term Frequency)，IDF逆向文件频率(Inverse Document Frequency)</p><p><strong>Term frequency</strong>：搜索文本中的各个词条在field文本中出现了多少次，出现次数越多，就越相关。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/1571494142950.c13777bd.png" alt="1571494142950"></p><p>举例：搜索请求：hello world</p><p>doc1 : hello you and me,and world is very good.</p><p>doc2 : hello,how are you</p><p><strong>Inverse document frequency</strong>：搜索文本中的各个词条在整个索引的所有文档中出现了多少次，出现的次数越多，就越不相关.</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/1571494159465.ae0d7678.png" alt="1571494159465"></p><p><img src="https://www.ydlclass.com/doc21xnv/assets/1571494176760.350e0734.png" alt="1571494176760"></p><p>举例：搜索请求：hello world</p><p>doc1 : hello ,today is very good</p><p>doc2 : hi world ,how are you</p><p>整个index中1亿条数据。hello的document 1000个，有world的document 有100个。</p><p>doc2 更相关</p><p><strong>Field-length norm</strong>：field长度，field越长，相关度越弱</p><p>举例：搜索请求：hello world</p><p>doc1 : {&quot;title&quot;:&quot;hello article&quot;,&quot;content &quot;:&quot;balabalabal 1万个&quot;}</p><p>doc2 : {&quot;title&quot;:&quot;my article&quot;,&quot;content &quot;:&quot;balabalabal 1万个,world&quot;}</p><h4 id="_2、-score是如何被计算出来的" tabindex="-1"><a class="header-anchor" href="#_2、-score是如何被计算出来的"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81-score%E6%98%AF%E5%A6%82%E4%BD%95%E8%A2%AB%E8%AE%A1%E7%AE%97%E5%87%BA%E6%9D%A5%E7%9A%84" target="_blank" rel="noopener noreferrer">#</a>2、_score是如何被计算出来的</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search?explain=true</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><p>返回</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 5,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 2,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : 2.137549,</span>
<span class="line">    &quot;hits&quot; : [</span>
<span class="line">      {</span>
<span class="line">        &quot;_shard&quot; : &quot;[book][0]&quot;,</span>
<span class="line">        &quot;_node&quot; : &quot;MDA45-r6SUGJ0ZyqyhTINA&quot;,</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;3&quot;,</span>
<span class="line">        &quot;_score&quot; : 2.137549,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;spring开发基础&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;spring 在java领域非常流行，java程序员都在用。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 88.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-24 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;spring&quot;,</span>
<span class="line">            &quot;java&quot;</span>
<span class="line">          ]</span>
<span class="line">        },</span>
<span class="line">        &quot;_explanation&quot; : {</span>
<span class="line">          &quot;value&quot; : 2.137549,</span>
<span class="line">          &quot;description&quot; : &quot;sum of:&quot;,</span>
<span class="line">          &quot;details&quot; : [</span>
<span class="line">            {</span>
<span class="line">              &quot;value&quot; : 0.7936629,</span>
<span class="line">              &quot;description&quot; : &quot;weight(description:java in 0) [PerFieldSimilarity], result of:&quot;,</span>
<span class="line">              &quot;details&quot; : [</span>
<span class="line">                {</span>
<span class="line">                  &quot;value&quot; : 0.7936629,</span>
<span class="line">                  &quot;description&quot; : &quot;score(freq=2.0), product of:&quot;,</span>
<span class="line">                  &quot;details&quot; : [</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 2.2,</span>
<span class="line">                      &quot;description&quot; : &quot;boost&quot;,</span>
<span class="line">                      &quot;details&quot; : [ ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 0.47000363,</span>
<span class="line">                      &quot;description&quot; : &quot;idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:&quot;,</span>
<span class="line">                      &quot;details&quot; : [</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 2,</span>
<span class="line">                          &quot;description&quot; : &quot;n, number of documents containing term&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 3,</span>
<span class="line">                          &quot;description&quot; : &quot;N, total number of documents with field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        }</span>
<span class="line">                      ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 0.7675597,</span>
<span class="line">                      &quot;description&quot; : &quot;tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:&quot;,</span>
<span class="line">                      &quot;details&quot; : [</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 2.0,</span>
<span class="line">                          &quot;description&quot; : &quot;freq, occurrences of term within document&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 1.2,</span>
<span class="line">                          &quot;description&quot; : &quot;k1, term saturation parameter&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 0.75,</span>
<span class="line">                          &quot;description&quot; : &quot;b, length normalization parameter&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 12.0,</span>
<span class="line">                          &quot;description&quot; : &quot;dl, length of field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 35.333332,</span>
<span class="line">                          &quot;description&quot; : &quot;avgdl, average length of field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        }</span>
<span class="line">                      ]</span>
<span class="line">                    }</span>
<span class="line">                  ]</span>
<span class="line">                }</span>
<span class="line">              ]</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">              &quot;value&quot; : 1.3438859,</span>
<span class="line">              &quot;description&quot; : &quot;weight(description:程序员 in 0) [PerFieldSimilarity], result of:&quot;,</span>
<span class="line">              &quot;details&quot; : [</span>
<span class="line">                {</span>
<span class="line">                  &quot;value&quot; : 1.3438859,</span>
<span class="line">                  &quot;description&quot; : &quot;score(freq=1.0), product of:&quot;,</span>
<span class="line">                  &quot;details&quot; : [</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 2.2,</span>
<span class="line">                      &quot;description&quot; : &quot;boost&quot;,</span>
<span class="line">                      &quot;details&quot; : [ ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 0.98082924,</span>
<span class="line">                      &quot;description&quot; : &quot;idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:&quot;,</span>
<span class="line">                      &quot;details&quot; : [</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 1,</span>
<span class="line">                          &quot;description&quot; : &quot;n, number of documents containing term&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 3,</span>
<span class="line">                          &quot;description&quot; : &quot;N, total number of documents with field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        }</span>
<span class="line">                      ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 0.6227967,</span>
<span class="line">                      &quot;description&quot; : &quot;tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:&quot;,</span>
<span class="line">                      &quot;details&quot; : [</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 1.0,</span>
<span class="line">                          &quot;description&quot; : &quot;freq, occurrences of term within document&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 1.2,</span>
<span class="line">                          &quot;description&quot; : &quot;k1, term saturation parameter&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 0.75,</span>
<span class="line">                          &quot;description&quot; : &quot;b, length normalization parameter&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 12.0,</span>
<span class="line">                          &quot;description&quot; : &quot;dl, length of field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 35.333332,</span>
<span class="line">                          &quot;description&quot; : &quot;avgdl, average length of field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        }</span>
<span class="line">                      ]</span>
<span class="line">                    }</span>
<span class="line">                  ]</span>
<span class="line">                }</span>
<span class="line">              ]</span>
<span class="line">            }</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;_shard&quot; : &quot;[book][0]&quot;,</span>
<span class="line">        &quot;_node&quot; : &quot;MDA45-r6SUGJ0ZyqyhTINA&quot;,</span>
<span class="line">        &quot;_index&quot; : &quot;book&quot;,</span>
<span class="line">        &quot;_type&quot; : &quot;_doc&quot;,</span>
<span class="line">        &quot;_id&quot; : &quot;2&quot;,</span>
<span class="line">        &quot;_score&quot; : 0.57961315,</span>
<span class="line">        &quot;_source&quot; : {</span>
<span class="line">          &quot;name&quot; : &quot;java编程思想&quot;,</span>
<span class="line">          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,</span>
<span class="line">          &quot;studymodel&quot; : &quot;201001&quot;,</span>
<span class="line">          &quot;price&quot; : 68.6,</span>
<span class="line">          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,</span>
<span class="line">          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,</span>
<span class="line">          &quot;tags&quot; : [</span>
<span class="line">            &quot;java&quot;,</span>
<span class="line">            &quot;dev&quot;</span>
<span class="line">          ]</span>
<span class="line">        },</span>
<span class="line">        &quot;_explanation&quot; : {</span>
<span class="line">          &quot;value&quot; : 0.57961315,</span>
<span class="line">          &quot;description&quot; : &quot;sum of:&quot;,</span>
<span class="line">          &quot;details&quot; : [</span>
<span class="line">            {</span>
<span class="line">              &quot;value&quot; : 0.57961315,</span>
<span class="line">              &quot;description&quot; : &quot;weight(description:java in 0) [PerFieldSimilarity], result of:&quot;,</span>
<span class="line">              &quot;details&quot; : [</span>
<span class="line">                {</span>
<span class="line">                  &quot;value&quot; : 0.57961315,</span>
<span class="line">                  &quot;description&quot; : &quot;score(freq=1.0), product of:&quot;,</span>
<span class="line">                  &quot;details&quot; : [</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 2.2,</span>
<span class="line">                      &quot;description&quot; : &quot;boost&quot;,</span>
<span class="line">                      &quot;details&quot; : [ ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 0.47000363,</span>
<span class="line">                      &quot;description&quot; : &quot;idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:&quot;,</span>
<span class="line">                      &quot;details&quot; : [</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 2,</span>
<span class="line">                          &quot;description&quot; : &quot;n, number of documents containing term&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 3,</span>
<span class="line">                          &quot;description&quot; : &quot;N, total number of documents with field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        }</span>
<span class="line">                      ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                      &quot;value&quot; : 0.56055,</span>
<span class="line">                      &quot;description&quot; : &quot;tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:&quot;,</span>
<span class="line">                      &quot;details&quot; : [</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 1.0,</span>
<span class="line">                          &quot;description&quot; : &quot;freq, occurrences of term within document&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 1.2,</span>
<span class="line">                          &quot;description&quot; : &quot;k1, term saturation parameter&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 0.75,</span>
<span class="line">                          &quot;description&quot; : &quot;b, length normalization parameter&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 19.0,</span>
<span class="line">                          &quot;description&quot; : &quot;dl, length of field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                          &quot;value&quot; : 35.333332,</span>
<span class="line">                          &quot;description&quot; : &quot;avgdl, average length of field&quot;,</span>
<span class="line">                          &quot;details&quot; : [ ]</span>
<span class="line">                        }</span>
<span class="line">                      ]</span>
<span class="line">                    }</span>
<span class="line">                  ]</span>
<span class="line">                }</span>
<span class="line">              ]</span>
<span class="line">            }</span>
<span class="line">          ]</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263</p><h4 id="_3、分析一个document是如何被匹配上的" tabindex="-1"><a class="header-anchor" href="#_3、分析一个document是如何被匹配上的"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E5%88%86%E6%9E%90%E4%B8%80%E4%B8%AAdocument%E6%98%AF%E5%A6%82%E4%BD%95%E8%A2%AB%E5%8C%B9%E9%85%8D%E4%B8%8A%E7%9A%84" target="_blank" rel="noopener noreferrer">#</a>3、分析一个document是如何被匹配上的</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_explain/3</span>
<span class="line">{</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h3 id="二、doc-value" tabindex="-1"><a class="header-anchor" href="#二、doc-value"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%8C%E3%80%81doc-value" target="_blank" rel="noopener noreferrer">#</a>二、Doc value</span></a></h3><p>搜索的时候，要依靠倒排索引；排序的时候，需要依靠正排索引，看到每个document的每个field，然后进行排序，所谓的正排索引，其实就是doc values</p><p>在建立索引的时候，一方面会建立倒排索引，以供搜索用；一方面会建立正排索引，也就是doc values，以供排序，聚合，过滤等操作使用</p><p>doc values是被保存在磁盘上的，此时如果内存足够，os会自动将其缓存在内存中，性能还是会很高；如果内存不足够，os会将其写入磁盘上</p><p><strong>倒排索引</strong></p><p>doc1: hello world you and me</p><p>doc2: hi, world, how are you</p><table><thead><tr><th>term</th><th>doc1</th><th>doc2</th></tr></thead><tbody><tr><td>hello</td><td>*</td><td></td></tr><tr><td>world</td><td>*</td><td>*</td></tr><tr><td>you</td><td>*</td><td>*</td></tr><tr><td>and</td><td>*</td><td></td></tr><tr><td>me</td><td>*</td><td></td></tr><tr><td>hi</td><td></td><td>*</td></tr><tr><td>how</td><td></td><td>*</td></tr><tr><td>are</td><td></td><td>*</td></tr></tbody></table><p>搜索时：</p><p>hello you --&gt; hello, you</p><p>hello --&gt; doc1</p><p>you --&gt; doc1,doc2</p><p>doc1: hello world you and me</p><p>doc2: hi, world, how are you</p><p>sort by 出现问题</p><p><strong>正排索引</strong></p><p>doc1: { &quot;name&quot;: &quot;jack&quot;, &quot;age&quot;: 27 }</p><p>doc2: { &quot;name&quot;: &quot;tom&quot;, &quot;age&quot;: 30 }</p><table><thead><tr><th>document</th><th>name</th><th>age</th></tr></thead><tbody><tr><td>doc1</td><td>jack</td><td>27</td></tr><tr><td>doc2</td><td>tom</td><td>30</td></tr></tbody></table><h3 id="三、query-phase" tabindex="-1"><a class="header-anchor" href="#三、query-phase"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%89%E3%80%81query-phase" target="_blank" rel="noopener noreferrer">#</a>三、query phase</span></a></h3><h4 id="_1、query-phase" tabindex="-1"><a class="header-anchor" href="#_1、query-phase"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81query-phase" target="_blank" rel="noopener noreferrer">#</a>1、query phase</span></a></h4><p>（1）搜索请求发送到某一个coordinate node，构构建一个priority queue，长度以paging操作from和size为准，默认为10</p><p>（2）coordinate node将请求转发到所有shard，每个shard本地搜索，并构建一个本地的priority queue</p><p>（3）各个shard将自己的priority queue返回给coordinate node，并构建一个全局的priority queue</p><h4 id="_2、replica-shard如何提升搜索吞吐量" tabindex="-1"><a class="header-anchor" href="#_2、replica-shard如何提升搜索吞吐量"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81replica-shard%E5%A6%82%E4%BD%95%E6%8F%90%E5%8D%87%E6%90%9C%E7%B4%A2%E5%90%9E%E5%90%90%E9%87%8F" target="_blank" rel="noopener noreferrer">#</a>2、replica shard如何提升搜索吞吐量</span></a></h4><p>一次请求要打到所有shard的一个replica/primary上去，如果每个shard都有多个replica，那么同时并发过来的搜索请求可以同时打到其他的replica上去</p><h3 id="四、-fetch-phase" tabindex="-1"><a class="header-anchor" href="#四、-fetch-phase"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%9B%9B%E3%80%81-fetch-phase" target="_blank" rel="noopener noreferrer">#</a>四、 fetch phase</span></a></h3><h4 id="_1、fetch-phbase工作流程" tabindex="-1"><a class="header-anchor" href="#_1、fetch-phbase工作流程"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81fetch-phbase%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B" target="_blank" rel="noopener noreferrer">#</a>1、fetch phbase工作流程</span></a></h4><p>（1）coordinate node构建完priority queue之后，就发送mget请求去所有shard上获取对应的document</p><p>（2）各个shard将document返回给coordinate node</p><p>（3）coordinate node将合并后的document结果返回给client客户端</p><h4 id="_2、一般搜索-如果不加from和size-就默认搜索前10条-按照-score排序" tabindex="-1"><a class="header-anchor" href="#_2、一般搜索-如果不加from和size-就默认搜索前10条-按照-score排序"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E4%B8%80%E8%88%AC%E6%90%9C%E7%B4%A2-%E5%A6%82%E6%9E%9C%E4%B8%8D%E5%8A%A0from%E5%92%8Csize-%E5%B0%B1%E9%BB%98%E8%AE%A4%E6%90%9C%E7%B4%A2%E5%89%8D10%E6%9D%A1-%E6%8C%89%E7%85%A7-score%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">#</a>2、一般搜索，如果不加from和size，就默认搜索前10条，按照_score排序</span></a></h4><h3 id="五、搜索参数小总结" tabindex="-1"><a class="header-anchor" href="#五、搜索参数小总结"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%94%E3%80%81%E6%90%9C%E7%B4%A2%E5%8F%82%E6%95%B0%E5%B0%8F%E6%80%BB%E7%BB%93" target="_blank" rel="noopener noreferrer">#</a>五、搜索参数小总结</span></a></h3><h4 id="_1、preference" tabindex="-1"><a class="header-anchor" href="#_1、preference"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81preference" target="_blank" rel="noopener noreferrer">#</a>1、preference</span></a></h4><p>决定了哪些shard会被用来执行搜索操作</p><p>_primary, _primary_first, _local, _only_node:xyz, _prefer_node:xyz, _shards:2,3</p><p>bouncing results问题，两个document排序，field值相同；不同的shard上，可能排序不同；每次请求轮询打到不同的replica shard上；每次页面上看到的搜索结果的排序都不一样。这就是bouncing result，也就是跳跃的结果。</p><p>搜索的时候，是轮询将搜索请求发送到每一个replica shard（primary shard），但是在不同的shard上，可能document的排序不同</p><p>解决方案就是将preference设置为一个字符串，比如说user_id，让每个user每次搜索的时候，都使用同一个replica shard去执行，就不会看到bouncing results了</p><h4 id="_2、timeout" tabindex="-1"><a class="header-anchor" href="#_2、timeout"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81timeout" target="_blank" rel="noopener noreferrer">#</a>2、timeout</span></a></h4><p>已经讲解过原理了，主要就是限定在一定时间内，将部分获取到的数据直接返回，避免查询耗时过长</p><h4 id="_3、routing" tabindex="-1"><a class="header-anchor" href="#_3、routing"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81routing" target="_blank" rel="noopener noreferrer">#</a>3、routing</span></a></h4><p>document文档路由，_id路由，routing=user_id，这样的话可以让同一个user对应的数据到一个shard上去</p><h4 id="_4、search-type" tabindex="-1"><a class="header-anchor" href="#_4、search-type"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_4%E3%80%81search-type" target="_blank" rel="noopener noreferrer">#</a>4、search_type</span></a></h4><p>default：query_then_fetch</p><p>dfs_query_then_fetch，可以提升revelance sort精准度</p><h2 id="第十七章-聚合入门" tabindex="-1"><a class="header-anchor" href="#第十七章-聚合入门"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E4%B8%83%E7%AB%A0-%E8%81%9A%E5%90%88%E5%85%A5%E9%97%A8" target="_blank" rel="noopener noreferrer">#</a>第十七章 聚合入门</span></a></h2><h3 id="一、聚合示例" tabindex="-1"><a class="header-anchor" href="#一、聚合示例"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%80%E3%80%81%E8%81%9A%E5%90%88%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>一、聚合示例</span></a></h3><h4 id="_1、需求-计算每个studymodel下的商品数量" tabindex="-1"><a class="header-anchor" href="#_1、需求-计算每个studymodel下的商品数量"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E9%9C%80%E6%B1%82-%E8%AE%A1%E7%AE%97%E6%AF%8F%E4%B8%AAstudymodel%E4%B8%8B%E7%9A%84%E5%95%86%E5%93%81%E6%95%B0%E9%87%8F" target="_blank" rel="noopener noreferrer">#</a>1、需求：计算每个studymodel下的商品数量</span></a></h4><p>sql语句： select studymodel，count(*) from book group by studymodel</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0, </span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match_all&quot;: {}</span>
<span class="line">  }, </span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_model&quot;: {</span>
<span class="line">      &quot;terms&quot;: { &quot;field&quot;: &quot;studymodel&quot; }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12</p><h4 id="_2、需求-计算每个tags下的商品数量" tabindex="-1"><a class="header-anchor" href="#_2、需求-计算每个tags下的商品数量"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E9%9C%80%E6%B1%82-%E8%AE%A1%E7%AE%97%E6%AF%8F%E4%B8%AAtags%E4%B8%8B%E7%9A%84%E5%95%86%E5%93%81%E6%95%B0%E9%87%8F" target="_blank" rel="noopener noreferrer">#</a>2、需求：计算每个tags下的商品数量</span></a></h4><p>设置字段&quot;fielddata&quot;: true</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /book/_mapping/</span>
<span class="line">{</span>
<span class="line">  &quot;properties&quot;: {</span>
<span class="line">    &quot;tags&quot;: {</span>
<span class="line">      &quot;type&quot;: &quot;text&quot;,</span>
<span class="line">      &quot;fielddata&quot;: true</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9</p><p>查询</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0, </span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match_all&quot;: {}</span>
<span class="line">  }, </span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_tags&quot;: {</span>
<span class="line">      &quot;terms&quot;: { &quot;field&quot;: &quot;tags&quot; }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12</p><h4 id="_3、需求-加上搜索条件-计算每个tags下的商品数量" tabindex="-1"><a class="header-anchor" href="#_3、需求-加上搜索条件-计算每个tags下的商品数量"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E9%9C%80%E6%B1%82-%E5%8A%A0%E4%B8%8A%E6%90%9C%E7%B4%A2%E6%9D%A1%E4%BB%B6-%E8%AE%A1%E7%AE%97%E6%AF%8F%E4%B8%AAtags%E4%B8%8B%E7%9A%84%E5%95%86%E5%93%81%E6%95%B0%E9%87%8F" target="_blank" rel="noopener noreferrer">#</a>3、需求：加上搜索条件，计算每个tags下的商品数量</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0, </span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;match&quot;: {</span>
<span class="line">      &quot;description&quot;: &quot;java程序员&quot;</span>
<span class="line">    }</span>
<span class="line">  }, </span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_tags&quot;: {</span>
<span class="line">      &quot;terms&quot;: { &quot;field&quot;: &quot;tags&quot; }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14</p><h4 id="_4、需求-先分组-再算每组的平均值-计算每个tag下的商品的平均价格" tabindex="-1"><a class="header-anchor" href="#_4、需求-先分组-再算每组的平均值-计算每个tag下的商品的平均价格"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_4%E3%80%81%E9%9C%80%E6%B1%82-%E5%85%88%E5%88%86%E7%BB%84-%E5%86%8D%E7%AE%97%E6%AF%8F%E7%BB%84%E7%9A%84%E5%B9%B3%E5%9D%87%E5%80%BC-%E8%AE%A1%E7%AE%97%E6%AF%8F%E4%B8%AAtag%E4%B8%8B%E7%9A%84%E5%95%86%E5%93%81%E7%9A%84%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC" target="_blank" rel="noopener noreferrer">#</a>4、需求：先分组，再算每组的平均值，计算每个tag下的商品的平均价格</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;size&quot;: 0,</span>
<span class="line">    &quot;aggs&quot; : {</span>
<span class="line">        &quot;group_by_tags&quot; : {</span>
<span class="line">            &quot;terms&quot; : { </span>
<span class="line">              &quot;field&quot; : &quot;tags&quot; </span>
<span class="line">            },</span>
<span class="line">            &quot;aggs&quot; : {</span>
<span class="line">                &quot;avg_price&quot; : {</span>
<span class="line">                    &quot;avg&quot; : { &quot;field&quot; : &quot;price&quot; }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16</p><h4 id="_5、需求-计算每个tag下的商品的平均价格-并且按照平均价格降序排序" tabindex="-1"><a class="header-anchor" href="#_5、需求-计算每个tag下的商品的平均价格-并且按照平均价格降序排序"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_5%E3%80%81%E9%9C%80%E6%B1%82-%E8%AE%A1%E7%AE%97%E6%AF%8F%E4%B8%AAtag%E4%B8%8B%E7%9A%84%E5%95%86%E5%93%81%E7%9A%84%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC-%E5%B9%B6%E4%B8%94%E6%8C%89%E7%85%A7%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC%E9%99%8D%E5%BA%8F%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">#</a>5、需求：计算每个tag下的商品的平均价格，并且按照平均价格降序排序</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">    &quot;size&quot;: 0,</span>
<span class="line">    &quot;aggs&quot; : {</span>
<span class="line">        &quot;group_by_tags&quot; : {</span>
<span class="line">            &quot;terms&quot; : { </span>
<span class="line">              &quot;field&quot; : &quot;tags&quot;,</span>
<span class="line">              &quot;order&quot;: {</span>
<span class="line">                &quot;avg_price&quot;: &quot;desc&quot;</span>
<span class="line">              }</span>
<span class="line">            },</span>
<span class="line">            &quot;aggs&quot; : {</span>
<span class="line">                &quot;avg_price&quot; : {</span>
<span class="line">                    &quot;avg&quot; : { &quot;field&quot; : &quot;price&quot; }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19</p><h4 id="_6、需求-按照指定的价格范围区间进行分组-然后在每组内再按照tag进行分组-最后再计算每组的平均价格" tabindex="-1"><a class="header-anchor" href="#_6、需求-按照指定的价格范围区间进行分组-然后在每组内再按照tag进行分组-最后再计算每组的平均价格"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_6%E3%80%81%E9%9C%80%E6%B1%82-%E6%8C%89%E7%85%A7%E6%8C%87%E5%AE%9A%E7%9A%84%E4%BB%B7%E6%A0%BC%E8%8C%83%E5%9B%B4%E5%8C%BA%E9%97%B4%E8%BF%9B%E8%A1%8C%E5%88%86%E7%BB%84-%E7%84%B6%E5%90%8E%E5%9C%A8%E6%AF%8F%E7%BB%84%E5%86%85%E5%86%8D%E6%8C%89%E7%85%A7tag%E8%BF%9B%E8%A1%8C%E5%88%86%E7%BB%84-%E6%9C%80%E5%90%8E%E5%86%8D%E8%AE%A1%E7%AE%97%E6%AF%8F%E7%BB%84%E7%9A%84%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC" target="_blank" rel="noopener noreferrer">#</a>6、需求：按照指定的价格范围区间进行分组，然后在每组内再按照tag进行分组，最后再计算每组的平均价格</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /book/_search</span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_price&quot;: {</span>
<span class="line">      &quot;range&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;price&quot;,</span>
<span class="line">        &quot;ranges&quot;: [</span>
<span class="line">          {</span>
<span class="line">            &quot;from&quot;: 0,</span>
<span class="line">            &quot;to&quot;: 40</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            &quot;from&quot;: 40,</span>
<span class="line">            &quot;to&quot;: 60</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            &quot;from&quot;: 60,</span>
<span class="line">            &quot;to&quot;: 80</span>
<span class="line">          }</span>
<span class="line">        ]</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;group_by_tags&quot;: {</span>
<span class="line">          &quot;terms&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;tags&quot;</span>
<span class="line">          },</span>
<span class="line">          &quot;aggs&quot;: {</span>
<span class="line">            &quot;average_price&quot;: {</span>
<span class="line">              &quot;avg&quot;: {</span>
<span class="line">                &quot;field&quot;: &quot;price&quot;</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39</p><h3 id="二、两个核心概念-bucket和metric" tabindex="-1"><a class="header-anchor" href="#二、两个核心概念-bucket和metric"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%8C%E3%80%81%E4%B8%A4%E4%B8%AA%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5-bucket%E5%92%8Cmetric" target="_blank" rel="noopener noreferrer">#</a>二、两个核心概念：bucket和metric</span></a></h3><h4 id="_1、bucket-一个数据分组" tabindex="-1"><a class="header-anchor" href="#_1、bucket-一个数据分组"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81bucket-%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%88%86%E7%BB%84" target="_blank" rel="noopener noreferrer">#</a>1、bucket：一个数据分组</span></a></h4><p>city name 北京 张三 北京 李四 天津 王五 天津 赵六</p><p>天津 王麻子</p><p>划分出来两个bucket，一个是北京bucket，一个是天津bucket 北京bucket：包含了2个人，张三，李四 上海bucket：包含了3个人，王五，赵六，王麻子</p><h4 id="_2、metric-对一个数据分组执行的统计" tabindex="-1"><a class="header-anchor" href="#_2、metric-对一个数据分组执行的统计"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81metric-%E5%AF%B9%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%88%86%E7%BB%84%E6%89%A7%E8%A1%8C%E7%9A%84%E7%BB%9F%E8%AE%A1" target="_blank" rel="noopener noreferrer">#</a>2、metric：对一个数据分组执行的统计</span></a></h4><p>metric，就是对一个bucket执行的某种聚合分析的操作，比如说求平均值，求最大值，求最小值</p><p>select count(*) from book group studymodel</p><p>bucket：group by studymodel --&gt; 那些studymodel相同的数据，就会被划分到一个bucket中 metric：count(*)，对每个user_id bucket中所有的数据，计算一个数量。还有avg()，sum()，max()，min()</p><h4 id="_3、电视案例" tabindex="-1"><a class="header-anchor" href="#_3、电视案例"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E7%94%B5%E8%A7%86%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>3、电视案例</span></a></h4><p>创建索引及映射</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /tvs</span>
<span class="line">PUT /tvs/_search</span>
<span class="line">{			</span>
<span class="line">			&quot;properties&quot;: {</span>
<span class="line">				&quot;price&quot;: {</span>
<span class="line">					&quot;type&quot;: &quot;long&quot;</span>
<span class="line">				},</span>
<span class="line">				&quot;color&quot;: {</span>
<span class="line">					&quot;type&quot;: &quot;keyword&quot;</span>
<span class="line">				},</span>
<span class="line">				&quot;brand&quot;: {</span>
<span class="line">					&quot;type&quot;: &quot;keyword&quot;</span>
<span class="line">				},</span>
<span class="line">				&quot;sold_date&quot;: {</span>
<span class="line">					&quot;type&quot;: &quot;date&quot;</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</p><p>插入数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /tvs/_bulk</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 1000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;长虹&quot;, &quot;sold_date&quot; : &quot;2019-10-28&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 2000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;长虹&quot;, &quot;sold_date&quot; : &quot;2019-11-05&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 3000, &quot;color&quot; : &quot;绿色&quot;, &quot;brand&quot; : &quot;小米&quot;, &quot;sold_date&quot; : &quot;2019-05-18&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 1500, &quot;color&quot; : &quot;蓝色&quot;, &quot;brand&quot; : &quot;TCL&quot;, &quot;sold_date&quot; : &quot;2019-07-02&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 1200, &quot;color&quot; : &quot;绿色&quot;, &quot;brand&quot; : &quot;TCL&quot;, &quot;sold_date&quot; : &quot;2019-08-19&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 2000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;长虹&quot;, &quot;sold_date&quot; : &quot;2019-11-05&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 8000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;三星&quot;, &quot;sold_date&quot; : &quot;2020-01-01&quot; }</span>
<span class="line">{ &quot;index&quot;: {}}</span>
<span class="line">{ &quot;price&quot; : 2500, &quot;color&quot; : &quot;蓝色&quot;, &quot;brand&quot; : &quot;小米&quot;, &quot;sold_date&quot; : &quot;2020-02-12&quot; }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17</p><h5 id="需求1-统计哪种颜色的电视销量最高" tabindex="-1"><a class="header-anchor" href="#需求1-统计哪种颜色的电视销量最高"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%821-%E7%BB%9F%E8%AE%A1%E5%93%AA%E7%A7%8D%E9%A2%9C%E8%89%B2%E7%9A%84%E7%94%B5%E8%A7%86%E9%94%80%E9%87%8F%E6%9C%80%E9%AB%98" target="_blank" rel="noopener noreferrer">#</a>需求1 统计哪种颜色的电视销量最高</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search</span>
<span class="line">{</span>
<span class="line">    &quot;size&quot; : 0,</span>
<span class="line">    &quot;aggs&quot; : { </span>
<span class="line">        &quot;popular_colors&quot; : { </span>
<span class="line">            &quot;terms&quot; : { </span>
<span class="line">              &quot;field&quot; : &quot;color&quot;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11</p><p>查询条件解析</p><p>size：只获取聚合结果，而不要执行聚合的原始数据 aggs：固定语法，要对一份数据执行分组聚合操作 popular_colors：就是对每个aggs，都要起一个名字， terms：根据字段的值进行分组 field：根据指定的字段的值进行分组</p><p>返回</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 18,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 8,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : null,</span>
<span class="line">    &quot;hits&quot; : [ ]</span>
<span class="line">  },</span>
<span class="line">  &quot;aggregations&quot; : {</span>
<span class="line">    &quot;popular_colors&quot; : {</span>
<span class="line">      &quot;doc_count_error_upper_bound&quot; : 0,</span>
<span class="line">      &quot;sum_other_doc_count&quot; : 0,</span>
<span class="line">      &quot;buckets&quot; : [</span>
<span class="line">        {</span>
<span class="line">          &quot;key&quot; : &quot;红色&quot;,</span>
<span class="line">          &quot;doc_count&quot; : 4</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          &quot;key&quot; : &quot;绿色&quot;,</span>
<span class="line">          &quot;doc_count&quot; : 2</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          &quot;key&quot; : &quot;蓝色&quot;,</span>
<span class="line">          &quot;doc_count&quot; : 2</span>
<span class="line">        }</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38</p><p>返回结果解析</p><p>hits.hits：我们指定了size是0，所以hits.hits就是空的 aggregations：聚合结果 popular_color：我们指定的某个聚合的名称 buckets：根据我们指定的field划分出的buckets key：每个bucket对应的那个值 doc_count：这个bucket分组内，有多少个数据 数量，其实就是这种颜色的销量</p><p>每种颜色对应的bucket中的数据的默认的排序规则：按照doc_count降序排序</p><h5 id="需求2-统计每种颜色电视平均价格" tabindex="-1"><a class="header-anchor" href="#需求2-统计每种颜色电视平均价格"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%822-%E7%BB%9F%E8%AE%A1%E6%AF%8F%E7%A7%8D%E9%A2%9C%E8%89%B2%E7%94%B5%E8%A7%86%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC" target="_blank" rel="noopener noreferrer">#</a>需求2 统计每种颜色电视平均价格</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search</span>
<span class="line">{</span>
<span class="line">   &quot;size&quot; : 0,</span>
<span class="line">   &quot;aggs&quot;: {</span>
<span class="line">      &quot;colors&quot;: {</span>
<span class="line">         &quot;terms&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;color&quot;</span>
<span class="line">         },</span>
<span class="line">         &quot;aggs&quot;: { </span>
<span class="line">            &quot;avg_price&quot;: { </span>
<span class="line">               &quot;avg&quot;: {</span>
<span class="line">                  &quot;field&quot;: &quot;price&quot; </span>
<span class="line">               }</span>
<span class="line">            }</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</p><p>在一个aggs执行的bucket操作（terms），平级的json结构下，再加一个aggs，这个第二个aggs内部，同样取个名字，执行一个metric操作，avg，对之前的每个bucket中的数据的指定的field，price field，求一个平均值</p><p>返回：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;took&quot; : 4,</span>
<span class="line">  &quot;timed_out&quot; : false,</span>
<span class="line">  &quot;_shards&quot; : {</span>
<span class="line">    &quot;total&quot; : 1,</span>
<span class="line">    &quot;successful&quot; : 1,</span>
<span class="line">    &quot;skipped&quot; : 0,</span>
<span class="line">    &quot;failed&quot; : 0</span>
<span class="line">  },</span>
<span class="line">  &quot;hits&quot; : {</span>
<span class="line">    &quot;total&quot; : {</span>
<span class="line">      &quot;value&quot; : 8,</span>
<span class="line">      &quot;relation&quot; : &quot;eq&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;max_score&quot; : null,</span>
<span class="line">    &quot;hits&quot; : [ ]</span>
<span class="line">  },</span>
<span class="line">  &quot;aggregations&quot; : {</span>
<span class="line">    &quot;colors&quot; : {</span>
<span class="line">      &quot;doc_count_error_upper_bound&quot; : 0,</span>
<span class="line">      &quot;sum_other_doc_count&quot; : 0,</span>
<span class="line">      &quot;buckets&quot; : [</span>
<span class="line">        {</span>
<span class="line">          &quot;key&quot; : &quot;红色&quot;,</span>
<span class="line">          &quot;doc_count&quot; : 4,</span>
<span class="line">          &quot;avg_price&quot; : {</span>
<span class="line">            &quot;value&quot; : 3250.0</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          &quot;key&quot; : &quot;绿色&quot;,</span>
<span class="line">          &quot;doc_count&quot; : 2,</span>
<span class="line">          &quot;avg_price&quot; : {</span>
<span class="line">            &quot;value&quot; : 2100.0</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          &quot;key&quot; : &quot;蓝色&quot;,</span>
<span class="line">          &quot;doc_count&quot; : 2,</span>
<span class="line">          &quot;avg_price&quot; : {</span>
<span class="line">            &quot;value&quot; : 2000.0</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      ]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47</p><p>buckets，除了key和doc_count avg_price：我们自己取的metric aggs的名字 value：我们的metric计算的结果，每个bucket中的数据的price字段求平均值后的结果</p><p>相当于sql: select avg(price) from tvs group by color</p><h5 id="需求3-继续下钻分析" tabindex="-1"><a class="header-anchor" href="#需求3-继续下钻分析"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%823-%E7%BB%A7%E7%BB%AD%E4%B8%8B%E9%92%BB%E5%88%86%E6%9E%90" target="_blank" rel="noopener noreferrer">#</a>需求3 继续下钻分析</span></a></h5><p>每个颜色下，平均价格及每个颜色下，每个品牌的平均价格</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_color&quot;: {</span>
<span class="line">      &quot;terms&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;color&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;color_avg_price&quot;: {</span>
<span class="line">          &quot;avg&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        &quot;group_by_brand&quot;: {</span>
<span class="line">          &quot;terms&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;brand&quot;</span>
<span class="line">          },</span>
<span class="line">          &quot;aggs&quot;: {</span>
<span class="line">            &quot;brand_avg_price&quot;: {</span>
<span class="line">              &quot;avg&quot;: {</span>
<span class="line">                &quot;field&quot;: &quot;price&quot;</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30</p><h5 id="需求4-更多的metric" tabindex="-1"><a class="header-anchor" href="#需求4-更多的metric"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%824-%E6%9B%B4%E5%A4%9A%E7%9A%84metric" target="_blank" rel="noopener noreferrer">#</a>需求4：更多的metric</span></a></h5><p>count：bucket，terms，自动就会有一个doc_count，就相当于是count avg：avg aggs，求平均值 max：求一个bucket内，指定field值最大的那个数据 min：求一个bucket内，指定field值最小的那个数据 sum：求一个bucket内，指定field值的总和</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search</span>
<span class="line">{</span>
<span class="line">   &quot;size&quot; : 0,</span>
<span class="line">   &quot;aggs&quot;: {</span>
<span class="line">      &quot;colors&quot;: {</span>
<span class="line">         &quot;terms&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;color&quot;</span>
<span class="line">         },</span>
<span class="line">         &quot;aggs&quot;: {</span>
<span class="line">            &quot;avg_price&quot;: { &quot;avg&quot;: { &quot;field&quot;: &quot;price&quot; } },</span>
<span class="line">            &quot;min_price&quot; : { &quot;min&quot;: { &quot;field&quot;: &quot;price&quot;} }, </span>
<span class="line">            &quot;max_price&quot; : { &quot;max&quot;: { &quot;field&quot;: &quot;price&quot;} },</span>
<span class="line">            &quot;sum_price&quot; : { &quot;sum&quot;: { &quot;field&quot;: &quot;price&quot; } } </span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17</p><h5 id="需求5-划分范围-histogram" tabindex="-1"><a class="header-anchor" href="#需求5-划分范围-histogram"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%825-%E5%88%92%E5%88%86%E8%8C%83%E5%9B%B4-histogram" target="_blank" rel="noopener noreferrer">#</a>需求5：划分范围 histogram</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search</span>
<span class="line">{</span>
<span class="line">   &quot;size&quot; : 0,</span>
<span class="line">   &quot;aggs&quot;:{</span>
<span class="line">      &quot;price&quot;:{</span>
<span class="line">         &quot;histogram&quot;:{ </span>
<span class="line">            &quot;field&quot;: &quot;price&quot;,</span>
<span class="line">            &quot;interval&quot;: 2000</span>
<span class="line">         },</span>
<span class="line">         &quot;aggs&quot;:{</span>
<span class="line">            &quot;income&quot;: {</span>
<span class="line">               &quot;sum&quot;: { </span>
<span class="line">                 &quot;field&quot; : &quot;price&quot;</span>
<span class="line">               }</span>
<span class="line">             }</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19</p><p>histogram：类似于terms，也是进行bucket分组操作，接收一个field，按照这个field的值的各个范围区间，进行bucket分组操作</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&quot;histogram&quot;:{ </span>
<span class="line">  &quot;field&quot;: &quot;price&quot;,</span>
<span class="line">  &quot;interval&quot;: 2000</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><p>interval：2000，划分范围，0~2000，2000~4000，4000~6000，6000~8000，8000~10000，buckets</p><p>bucket有了之后，一样的，去对每个bucket执行avg，count，sum，max，min，等各种metric操作，聚合分析</p><h5 id="需求6-按照日期分组聚合" tabindex="-1"><a class="header-anchor" href="#需求6-按照日期分组聚合"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%826-%E6%8C%89%E7%85%A7%E6%97%A5%E6%9C%9F%E5%88%86%E7%BB%84%E8%81%9A%E5%90%88" target="_blank" rel="noopener noreferrer">#</a>需求6：按照日期分组聚合</span></a></h5><p>date_histogram，按照我们指定的某个date类型的日期field，以及日期interval，按照一定的日期间隔，去划分bucket</p><p>min_doc_count：即使某个日期interval，2017-01-01~2017-01-31中，一条数据都没有，那么这个区间也是要返回的，不然默认是会过滤掉这个区间的 extended_bounds，min，max：划分bucket的时候，会限定在这个起始日期，和截止日期内</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search</span>
<span class="line">{</span>
<span class="line">   &quot;size&quot; : 0,</span>
<span class="line">   &quot;aggs&quot;: {</span>
<span class="line">      &quot;sales&quot;: {</span>
<span class="line">         &quot;date_histogram&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;sold_date&quot;,</span>
<span class="line">            &quot;interval&quot;: &quot;month&quot;, </span>
<span class="line">            &quot;format&quot;: &quot;yyyy-MM-dd&quot;,</span>
<span class="line">            &quot;min_doc_count&quot; : 0, </span>
<span class="line">            &quot;extended_bounds&quot; : { </span>
<span class="line">                &quot;min&quot; : &quot;2019-01-01&quot;,</span>
<span class="line">                &quot;max&quot; : &quot;2020-12-31&quot;</span>
<span class="line">            }</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</p><h5 id="需求7-统计每季度每个品牌的销售额" tabindex="-1"><a class="header-anchor" href="#需求7-统计每季度每个品牌的销售额"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%827-%E7%BB%9F%E8%AE%A1%E6%AF%8F%E5%AD%A3%E5%BA%A6%E6%AF%8F%E4%B8%AA%E5%93%81%E7%89%8C%E7%9A%84%E9%94%80%E5%94%AE%E9%A2%9D" target="_blank" rel="noopener noreferrer">#</a>需求7 统计每季度每个品牌的销售额</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_sold_date&quot;: {</span>
<span class="line">      &quot;date_histogram&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;sold_date&quot;,</span>
<span class="line">        &quot;interval&quot;: &quot;quarter&quot;,</span>
<span class="line">        &quot;format&quot;: &quot;yyyy-MM-dd&quot;,</span>
<span class="line">        &quot;min_doc_count&quot;: 0,</span>
<span class="line">        &quot;extended_bounds&quot;: {</span>
<span class="line">          &quot;min&quot;: &quot;2019-01-01&quot;,</span>
<span class="line">          &quot;max&quot;: &quot;2020-12-31&quot;</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;group_by_brand&quot;: {</span>
<span class="line">          &quot;terms&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;brand&quot;</span>
<span class="line">          },</span>
<span class="line">          &quot;aggs&quot;: {</span>
<span class="line">            &quot;sum_price&quot;: {</span>
<span class="line">              &quot;sum&quot;: {</span>
<span class="line">                &quot;field&quot;: &quot;price&quot;</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        &quot;total_sum_price&quot;: {</span>
<span class="line">          &quot;sum&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37</p><h5 id="需求8-搜索与聚合结合-查询某个品牌按颜色销量" tabindex="-1"><a class="header-anchor" href="#需求8-搜索与聚合结合-查询某个品牌按颜色销量"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%828-%E6%90%9C%E7%B4%A2%E4%B8%8E%E8%81%9A%E5%90%88%E7%BB%93%E5%90%88-%E6%9F%A5%E8%AF%A2%E6%9F%90%E4%B8%AA%E5%93%81%E7%89%8C%E6%8C%89%E9%A2%9C%E8%89%B2%E9%94%80%E9%87%8F" target="_blank" rel="noopener noreferrer">#</a>需求8 ：搜索与聚合结合，查询某个品牌按颜色销量</span></a></h5><p>搜索与聚合可以结合起来。</p><p>sql select count(*)</p><p>from tvs</p><p>where brand like &quot;%小米%&quot;</p><p>group by color</p><p>es aggregation，scope，任何的聚合，都必须在搜索出来的结果数据中之行，搜索结果，就是聚合分析操作的scope</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;term&quot;: {</span>
<span class="line">      &quot;brand&quot;: {</span>
<span class="line">        &quot;value&quot;: &quot;小米&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_color&quot;: {</span>
<span class="line">      &quot;terms&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;color&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18</p><h5 id="需求9-global-bucket-单个品牌与所有品牌销量对比" tabindex="-1"><a class="header-anchor" href="#需求9-global-bucket-单个品牌与所有品牌销量对比"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%829-global-bucket-%E5%8D%95%E4%B8%AA%E5%93%81%E7%89%8C%E4%B8%8E%E6%89%80%E6%9C%89%E5%93%81%E7%89%8C%E9%94%80%E9%87%8F%E5%AF%B9%E6%AF%94" target="_blank" rel="noopener noreferrer">#</a>需求9 global bucket：单个品牌与所有品牌销量对比</span></a></h5><p>aggregation，scope，一个聚合操作，必须在query的搜索结果范围内执行</p><p>出来两个结果，一个结果，是基于query搜索结果来聚合的; 一个结果，是对所有数据执行聚合的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0, </span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;term&quot;: {</span>
<span class="line">      &quot;brand&quot;: {</span>
<span class="line">        &quot;value&quot;: &quot;小米&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;single_brand_avg_price&quot;: {</span>
<span class="line">      &quot;avg&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;price&quot;</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    &quot;all&quot;: {</span>
<span class="line">      &quot;global&quot;: {},</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;all_brand_avg_price&quot;: {</span>
<span class="line">          &quot;avg&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28</p><h5 id="需求10-过滤-聚合-统计价格大于1200的电视平均价格" tabindex="-1"><a class="header-anchor" href="#需求10-过滤-聚合-统计价格大于1200的电视平均价格"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%8210-%E8%BF%87%E6%BB%A4-%E8%81%9A%E5%90%88-%E7%BB%9F%E8%AE%A1%E4%BB%B7%E6%A0%BC%E5%A4%A7%E4%BA%8E1200%E7%9A%84%E7%94%B5%E8%A7%86%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC" target="_blank" rel="noopener noreferrer">#</a>需求10：过滤+聚合：统计价格大于1200的电视平均价格</span></a></h5><p>搜索+聚合</p><p>过滤+聚合</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;constant_score&quot;: {</span>
<span class="line">      &quot;filter&quot;: {</span>
<span class="line">        &quot;range&quot;: {</span>
<span class="line">          &quot;price&quot;: {</span>
<span class="line">            &quot;gte&quot;: 1200</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;avg_price&quot;: {</span>
<span class="line">      &quot;avg&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;price&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22</p><h5 id="需求11-bucket-filter-统计品牌最近一个月的平均价格" tabindex="-1"><a class="header-anchor" href="#需求11-bucket-filter-统计品牌最近一个月的平均价格"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%8211-bucket-filter-%E7%BB%9F%E8%AE%A1%E5%93%81%E7%89%8C%E6%9C%80%E8%BF%91%E4%B8%80%E4%B8%AA%E6%9C%88%E7%9A%84%E5%B9%B3%E5%9D%87%E4%BB%B7%E6%A0%BC" target="_blank" rel="noopener noreferrer">#</a>需求11 bucket filter：统计品牌最近一个月的平均价格</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;query&quot;: {</span>
<span class="line">    &quot;term&quot;: {</span>
<span class="line">      &quot;brand&quot;: {</span>
<span class="line">        &quot;value&quot;: &quot;小米&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;recent_150d&quot;: {</span>
<span class="line">      &quot;filter&quot;: {</span>
<span class="line">        &quot;range&quot;: {</span>
<span class="line">          &quot;sold_date&quot;: {</span>
<span class="line">            &quot;gte&quot;: &quot;now-150d&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;recent_150d_avg_price&quot;: {</span>
<span class="line">          &quot;avg&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    &quot;recent_140d&quot;: {</span>
<span class="line">      &quot;filter&quot;: {</span>
<span class="line">        &quot;range&quot;: {</span>
<span class="line">          &quot;sold_date&quot;: {</span>
<span class="line">            &quot;gte&quot;: &quot;now-140d&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;recent_140d_avg_price&quot;: {</span>
<span class="line">          &quot;avg&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    &quot;recent_130d&quot;: {</span>
<span class="line">      &quot;filter&quot;: {</span>
<span class="line">        &quot;range&quot;: {</span>
<span class="line">          &quot;sold_date&quot;: {</span>
<span class="line">            &quot;gte&quot;: &quot;now-130d&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;recent_130d_avg_price&quot;: {</span>
<span class="line">          &quot;avg&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61</p><p>aggs.filter，针对的是聚合去做的</p><p>如果放query里面的filter，是全局的，会对所有的数据都有影响</p><p>但是，如果，比如说，你要统计，长虹电视，最近1个月的平均值; 最近3个月的平均值; 最近6个月的平均值</p><p>bucket filter：对不同的bucket下的aggs，进行filter</p><h5 id="需求12-排序-按每种颜色的平均销售额降序排序" tabindex="-1"><a class="header-anchor" href="#需求12-排序-按每种颜色的平均销售额降序排序"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%8212-%E6%8E%92%E5%BA%8F-%E6%8C%89%E6%AF%8F%E7%A7%8D%E9%A2%9C%E8%89%B2%E7%9A%84%E5%B9%B3%E5%9D%87%E9%94%80%E5%94%AE%E9%A2%9D%E9%99%8D%E5%BA%8F%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">#</a>需求12 排序：按每种颜色的平均销售额降序排序</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_color&quot;: {</span>
<span class="line">      &quot;terms&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;color&quot;,</span>
<span class="line">        &quot;order&quot;: {</span>
<span class="line">          &quot;avg_price&quot;: &quot;asc&quot;</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;avg_price&quot;: {</span>
<span class="line">          &quot;avg&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;price&quot;</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21</p><p>相当于sql子表数据字段可以立刻使用。</p><h5 id="需求13-排序-按每种颜色的每种品牌平均销售额降序排序" tabindex="-1"><a class="header-anchor" href="#需求13-排序-按每种颜色的每种品牌平均销售额降序排序"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E9%9C%80%E6%B1%8213-%E6%8E%92%E5%BA%8F-%E6%8C%89%E6%AF%8F%E7%A7%8D%E9%A2%9C%E8%89%B2%E7%9A%84%E6%AF%8F%E7%A7%8D%E5%93%81%E7%89%8C%E5%B9%B3%E5%9D%87%E9%94%80%E5%94%AE%E9%A2%9D%E9%99%8D%E5%BA%8F%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">#</a>需求13 排序：按每种颜色的每种品牌平均销售额降序排序</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GET /tvs/_search  </span>
<span class="line">{</span>
<span class="line">  &quot;size&quot;: 0,</span>
<span class="line">  &quot;aggs&quot;: {</span>
<span class="line">    &quot;group_by_color&quot;: {</span>
<span class="line">      &quot;terms&quot;: {</span>
<span class="line">        &quot;field&quot;: &quot;color&quot;</span>
<span class="line">      },</span>
<span class="line">      &quot;aggs&quot;: {</span>
<span class="line">        &quot;group_by_brand&quot;: {</span>
<span class="line">          &quot;terms&quot;: {</span>
<span class="line">            &quot;field&quot;: &quot;brand&quot;,</span>
<span class="line">            &quot;order&quot;: {</span>
<span class="line">              &quot;avg_price&quot;: &quot;desc&quot;</span>
<span class="line">            }</span>
<span class="line">          },</span>
<span class="line">          &quot;aggs&quot;: {</span>
<span class="line">            &quot;avg_price&quot;: {</span>
<span class="line">              &quot;avg&quot;: {</span>
<span class="line">                &quot;field&quot;: &quot;price&quot;</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28</p><h2 id="第十八章-java-api实现聚合" tabindex="-1"><a class="header-anchor" href="#第十八章-java-api实现聚合"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E5%85%AB%E7%AB%A0-java-api%E5%AE%9E%E7%8E%B0%E8%81%9A%E5%90%88" target="_blank" rel="noopener noreferrer">#</a>第十八章 java api实现聚合</span></a></h2><p>简单聚合，多种聚合，详见代码。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ydlclass<span class="token punctuation">.</span>es</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>action<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchRequest</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>action<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchResponse</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RequestOptions</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestHighLevelClient</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>index<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">QueryBuilders</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span></span><span class="token class-name">Aggregation</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span></span><span class="token class-name">AggregationBuilders</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span></span><span class="token class-name">Aggregations</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>bucket<span class="token punctuation">.</span>histogram<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>bucket<span class="token punctuation">.</span>terms<span class="token punctuation">.</span></span><span class="token class-name">Terms</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>bucket<span class="token punctuation">.</span>terms<span class="token punctuation">.</span></span><span class="token class-name">TermsAggregationBuilder</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>builder<span class="token punctuation">.</span></span><span class="token class-name">SearchSourceBuilder</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token class-name">RunWith</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span></span><span class="token class-name">SpringRunner</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * creste by ydlclass.ydl</span>
<span class="line"> */</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootTest</span></span>
<span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAggs</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//需求一：按照颜色分组，计算每个颜色卖出的个数</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// GET /tvs/_search</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;size&quot;: 0,</span></span>
<span class="line">        <span class="token comment">//     &quot;query&quot;: {&quot;match_all&quot;: {}},</span></span>
<span class="line">        <span class="token comment">//     &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//       &quot;group_by_color&quot;: {</span></span>
<span class="line">        <span class="token comment">//         &quot;terms&quot;: {</span></span>
<span class="line">        <span class="token comment">//             &quot;field&quot;: &quot;color&quot;</span></span>
<span class="line">        <span class="token comment">//         }</span></span>
<span class="line">        <span class="token comment">//     }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//1 构建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体</span></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">TermsAggregationBuilder</span> termsAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>termsAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体放入请求头</span></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2 执行</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3 获取结果</span></span>
<span class="line">      <span class="token comment">//   &quot;aggregations&quot; : {</span></span>
<span class="line">      <span class="token comment">//       &quot;group_by_color&quot; : {</span></span>
<span class="line">      <span class="token comment">//           &quot;doc_count_error_upper_bound&quot; : 0,</span></span>
<span class="line">      <span class="token comment">//           &quot;sum_other_doc_count&quot; : 0,</span></span>
<span class="line">      <span class="token comment">//            &quot;buckets&quot; : [</span></span>
<span class="line">      <span class="token comment">//           {</span></span>
<span class="line">      <span class="token comment">//               &quot;key&quot; : &quot;红色&quot;,</span></span>
<span class="line">      <span class="token comment">//               &quot;doc_count&quot; : 4</span></span>
<span class="line">      <span class="token comment">//           },</span></span>
<span class="line">      <span class="token comment">//           {</span></span>
<span class="line">      <span class="token comment">//               &quot;key&quot; : &quot;绿色&quot;,</span></span>
<span class="line">      <span class="token comment">//                   &quot;doc_count&quot; : 2</span></span>
<span class="line">      <span class="token comment">//           },</span></span>
<span class="line">      <span class="token comment">//           {</span></span>
<span class="line">      <span class="token comment">//               &quot;key&quot; : &quot;蓝色&quot;,</span></span>
<span class="line">      <span class="token comment">//                   &quot;doc_count&quot; : 2</span></span>
<span class="line">      <span class="token comment">//           }</span></span>
<span class="line">      <span class="token comment">// ]</span></span>
<span class="line">      <span class="token comment">//       }</span></span>
<span class="line">        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Terms</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token operator">+</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// #需求二：按照颜色分组，计算每个颜色卖出的个数，每个颜色卖出的平均价格</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndAvg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// GET /tvs/_search</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;size&quot;: 0,</span></span>
<span class="line">        <span class="token comment">//      &quot;query&quot;: {&quot;match_all&quot;: {}},</span></span>
<span class="line">        <span class="token comment">//     &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//     &quot;group_by_color&quot;: {</span></span>
<span class="line">        <span class="token comment">//         &quot;terms&quot;: {</span></span>
<span class="line">        <span class="token comment">//             &quot;field&quot;: &quot;color&quot;</span></span>
<span class="line">        <span class="token comment">//         },</span></span>
<span class="line">        <span class="token comment">//         &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//             &quot;avg_price&quot;: {</span></span>
<span class="line">        <span class="token comment">//                 &quot;avg&quot;: {</span></span>
<span class="line">        <span class="token comment">//                     &quot;field&quot;: &quot;price&quot;</span></span>
<span class="line">        <span class="token comment">//                 }</span></span>
<span class="line">        <span class="token comment">//             }</span></span>
<span class="line">        <span class="token comment">//         }</span></span>
<span class="line">        <span class="token comment">//     }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//1 构建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体</span></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">TermsAggregationBuilder</span> termsAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//terms聚合下填充一个子聚合</span></span>
<span class="line">        <span class="token class-name">AvgAggregationBuilder</span> avgAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>avgAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>termsAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体放入请求头</span></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2 执行</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3 获取结果</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;key&quot; : &quot;红色&quot;,</span></span>
<span class="line">        <span class="token comment">//      &quot;doc_count&quot; : 4,</span></span>
<span class="line">        <span class="token comment">//      &quot;avg_price&quot; : {</span></span>
<span class="line">        <span class="token comment">//        &quot;value&quot; : 3250.0</span></span>
<span class="line">        <span class="token comment">//       }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Terms</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token operator">+</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Avg</span> avg_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> value <span class="token operator">=</span> avg_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value:&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// #需求三：按照颜色分组，计算每个颜色卖出的个数，以及每个颜色卖出的平均值、最大值、最小值、总和。</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// GET /tvs/_search</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;size&quot; : 0,</span></span>
<span class="line">        <span class="token comment">//     &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//      &quot;group_by_color&quot;: {</span></span>
<span class="line">        <span class="token comment">//         &quot;terms&quot;: {</span></span>
<span class="line">        <span class="token comment">//             &quot;field&quot;: &quot;color&quot;</span></span>
<span class="line">        <span class="token comment">//         },</span></span>
<span class="line">        <span class="token comment">//         &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//             &quot;avg_price&quot;: { &quot;avg&quot;: { &quot;field&quot;: &quot;price&quot; } },</span></span>
<span class="line">        <span class="token comment">//             &quot;min_price&quot; : { &quot;min&quot;: { &quot;field&quot;: &quot;price&quot;} },</span></span>
<span class="line">        <span class="token comment">//             &quot;max_price&quot; : { &quot;max&quot;: { &quot;field&quot;: &quot;price&quot;} },</span></span>
<span class="line">        <span class="token comment">//             &quot;sum_price&quot; : { &quot;sum&quot;: { &quot;field&quot;: &quot;price&quot; } }</span></span>
<span class="line">        <span class="token comment">//         }</span></span>
<span class="line">        <span class="token comment">//     }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//1 构建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体</span></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">TermsAggregationBuilder</span> termsAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//termsAggregationBuilder里放入多个子聚合</span></span>
<span class="line">        <span class="token class-name">AvgAggregationBuilder</span> avgAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">MinAggregationBuilder</span> minAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token string">&quot;min_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">MaxAggregationBuilder</span> maxAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token string">&quot;max_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">SumAggregationBuilder</span> sumAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&quot;sum_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>avgAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>minAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>maxAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>sumAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>termsAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体放入请求头</span></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2 执行</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3 获取结果</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;key&quot; : &quot;红色&quot;,</span></span>
<span class="line">        <span class="token comment">//     &quot;doc_count&quot; : 4,</span></span>
<span class="line">        <span class="token comment">//     &quot;max_price&quot; : {</span></span>
<span class="line">        <span class="token comment">//          &quot;value&quot; : 8000.0</span></span>
<span class="line">        <span class="token comment">//     },</span></span>
<span class="line">        <span class="token comment">//     &quot;min_price&quot; : {</span></span>
<span class="line">        <span class="token comment">//          &quot;value&quot; : 1000.0</span></span>
<span class="line">        <span class="token comment">// },</span></span>
<span class="line">        <span class="token comment">//     &quot;avg_price&quot; : {</span></span>
<span class="line">        <span class="token comment">//         &quot;value&quot; : 3250.0</span></span>
<span class="line">        <span class="token comment">// },</span></span>
<span class="line">        <span class="token comment">//     &quot;sum_price&quot; : {</span></span>
<span class="line">        <span class="token comment">//         &quot;value&quot; : 13000.0</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Terms</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token operator">+</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Max</span> max_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;max_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> maxPriceValue <span class="token operator">=</span> max_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;maxPriceValue:&quot;</span><span class="token operator">+</span>maxPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Min</span> min_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;min_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> minPriceValue <span class="token operator">=</span> min_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;minPriceValue:&quot;</span><span class="token operator">+</span>minPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Avg</span> avg_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> avgPriceValue <span class="token operator">=</span> avg_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;avgPriceValue:&quot;</span><span class="token operator">+</span>avgPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Sum</span> sum_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;sum_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> sumPriceValue <span class="token operator">=</span> sum_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sumPriceValue:&quot;</span><span class="token operator">+</span>sumPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// #需求四：按照售价每2000价格划分范围，算出每个区间的销售总额 histogram</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndHistogram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// GET /tvs/_search</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;size&quot; : 0,</span></span>
<span class="line">        <span class="token comment">//     &quot;aggs&quot;:{</span></span>
<span class="line">        <span class="token comment">//      &quot;by_histogram&quot;:{</span></span>
<span class="line">        <span class="token comment">//         &quot;histogram&quot;:{</span></span>
<span class="line">        <span class="token comment">//             &quot;field&quot;: &quot;price&quot;,</span></span>
<span class="line">        <span class="token comment">//             &quot;interval&quot;: 2000</span></span>
<span class="line">        <span class="token comment">//         },</span></span>
<span class="line">        <span class="token comment">//         &quot;aggs&quot;:{</span></span>
<span class="line">        <span class="token comment">//             &quot;income&quot;: {</span></span>
<span class="line">        <span class="token comment">//                 &quot;sum&quot;: {</span></span>
<span class="line">        <span class="token comment">//                     &quot;field&quot; : &quot;price&quot;</span></span>
<span class="line">        <span class="token comment">//                 }</span></span>
<span class="line">        <span class="token comment">//             }</span></span>
<span class="line">        <span class="token comment">//         }</span></span>
<span class="line">        <span class="token comment">//     }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//1 构建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体</span></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">HistogramAggregationBuilder</span> histogramAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">histogram</span><span class="token punctuation">(</span><span class="token string">&quot;by_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">SumAggregationBuilder</span> sumAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        histogramAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>sumAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>histogramAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体放入请求头</span></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2 执行</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3 获取结果</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;key&quot; : 0.0,</span></span>
<span class="line">        <span class="token comment">//     &quot;doc_count&quot; : 3,</span></span>
<span class="line">        <span class="token comment">//      income&quot; : {</span></span>
<span class="line">        <span class="token comment">//          &quot;value&quot; : 3700.0</span></span>
<span class="line">        <span class="token comment">//       }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Histogram</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;by_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> keyAsString <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;keyAsString:&quot;</span><span class="token operator">+</span>keyAsString<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Sum</span> income <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> value <span class="token operator">=</span> income<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value:&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// #需求五：计算每个季度的销售总额</span></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndDateHistogram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// GET /tvs/_search</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;size&quot; : 0,</span></span>
<span class="line">        <span class="token comment">//     &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//     &quot;sales&quot;: {</span></span>
<span class="line">        <span class="token comment">//         &quot;date_histogram&quot;: {</span></span>
<span class="line">        <span class="token comment">//                      &quot;field&quot;: &quot;sold_date&quot;,</span></span>
<span class="line">        <span class="token comment">//                     &quot;interval&quot;: &quot;quarter&quot;,</span></span>
<span class="line">        <span class="token comment">//                     &quot;format&quot;: &quot;yyyy-MM-dd&quot;,</span></span>
<span class="line">        <span class="token comment">//                     &quot;min_doc_count&quot; : 0,</span></span>
<span class="line">        <span class="token comment">//                     &quot;extended_bounds&quot; : {</span></span>
<span class="line">        <span class="token comment">//                         &quot;min&quot; : &quot;2019-01-01&quot;,</span></span>
<span class="line">        <span class="token comment">//                         &quot;max&quot; : &quot;2020-12-31&quot;</span></span>
<span class="line">        <span class="token comment">//             }</span></span>
<span class="line">        <span class="token comment">//         },</span></span>
<span class="line">        <span class="token comment">//         &quot;aggs&quot;: {</span></span>
<span class="line">        <span class="token comment">//             &quot;income&quot;: {</span></span>
<span class="line">        <span class="token comment">//                 &quot;sum&quot;: {</span></span>
<span class="line">        <span class="token comment">//                     &quot;field&quot;: &quot;price&quot;</span></span>
<span class="line">        <span class="token comment">//                 }</span></span>
<span class="line">        <span class="token comment">//             }</span></span>
<span class="line">        <span class="token comment">//         }</span></span>
<span class="line">        <span class="token comment">//     }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//1 构建请求</span></span>
<span class="line">        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//请求体</span></span>
<span class="line">        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">DateHistogramAggregationBuilder</span> dateHistogramAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">dateHistogram</span><span class="token punctuation">(</span><span class="token string">&quot;date_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;sold_date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendarInterval</span><span class="token punctuation">(</span><span class="token class-name">DateHistogramInterval</span><span class="token punctuation">.</span><span class="token constant">QUARTER</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">minDocCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">extendedBounds</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExtendedBounds</span><span class="token punctuation">(</span><span class="token string">&quot;2019-01-01&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2020-12-31&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">SumAggregationBuilder</span> sumAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        dateHistogramAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>sumAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>dateHistogramAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//请求体放入请求头</span></span>
<span class="line">        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//2 执行</span></span>
<span class="line">        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//3 获取结果</span></span>
<span class="line">        <span class="token comment">// {</span></span>
<span class="line">        <span class="token comment">//     &quot;key_as_string&quot; : &quot;2019-01-01&quot;,</span></span>
<span class="line">        <span class="token comment">//      &quot;key&quot; : 1546300800000,</span></span>
<span class="line">        <span class="token comment">//      &quot;doc_count&quot; : 0,</span></span>
<span class="line">        <span class="token comment">//      &quot;income&quot; : {</span></span>
<span class="line">        <span class="token comment">//         &quot;value&quot; : 0.0</span></span>
<span class="line">        <span class="token comment">//      }</span></span>
<span class="line">        <span class="token comment">// }</span></span>
<span class="line">        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">ParsedDateHistogram</span> date_histogram <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;date_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> date_histogram<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> keyAsString <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;keyAsString:&quot;</span><span class="token operator">+</span>keyAsString<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Sum</span> income <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">double</span> value <span class="token operator">=</span> income<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value:&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;====================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300 301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320 321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340 341 342 343 344 345 346 347 348 349 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 378 379 380 381 382 383 384 385 386 387 388 389 390 391 392 393 394 395 396 397 398 399 400 401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 419 420 421</p><h2 id="第十九章-es7-sql新特性" tabindex="-1"><a class="header-anchor" href="#第十九章-es7-sql新特性"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E5%8D%81%E4%B9%9D%E7%AB%A0-es7-sql%E6%96%B0%E7%89%B9%E6%80%A7" target="_blank" rel="noopener noreferrer">#</a>第十九章 es7 sql新特性</span></a></h2><h3 id="一、快速入门" tabindex="-1"><a class="header-anchor" href="#一、快速入门"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%80%E3%80%81%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8" target="_blank" rel="noopener noreferrer">#</a>一、快速入门</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /_sql?format=txt</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: &quot;SELECT * FROM tvs &quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><h3 id="二、启动方式" tabindex="-1"><a class="header-anchor" href="#二、启动方式"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%8C%E3%80%81%E5%90%AF%E5%8A%A8%E6%96%B9%E5%BC%8F" target="_blank" rel="noopener noreferrer">#</a>二、启动方式</span></a></h3><p>1、http 请求</p><p>2、客户端：elasticsearch-sql-cli.bat</p><p>3、代码</p><h3 id="三、显示方式" tabindex="-1"><a class="header-anchor" href="#三、显示方式"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%89%E3%80%81%E6%98%BE%E7%A4%BA%E6%96%B9%E5%BC%8F" target="_blank" rel="noopener noreferrer">#</a>三、显示方式</span></a></h3><p><img src="https://www.ydlclass.com/doc21xnv/assets/1573212830146.cecc6733.png" alt="1573212830146"></p><h3 id="四、sql-翻译" tabindex="-1"><a class="header-anchor" href="#四、sql-翻译"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%9B%9B%E3%80%81sql-%E7%BF%BB%E8%AF%91" target="_blank" rel="noopener noreferrer">#</a>四、sql 翻译</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /_sql/translate</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: &quot;SELECT * FROM tvs &quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4</p><p>返回：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;size&quot; : 1000,</span>
<span class="line">  &quot;_source&quot; : false,</span>
<span class="line">  &quot;stored_fields&quot; : &quot;_none_&quot;,</span>
<span class="line">  &quot;docvalue_fields&quot; : [</span>
<span class="line">    {</span>
<span class="line">      &quot;field&quot; : &quot;brand&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;field&quot; : &quot;color&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;field&quot; : &quot;price&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;field&quot; : &quot;sold_date&quot;,</span>
<span class="line">      &quot;format&quot; : &quot;epoch_millis&quot;</span>
<span class="line">    }</span>
<span class="line">  ],</span>
<span class="line">  &quot;sort&quot; : [</span>
<span class="line">    {</span>
<span class="line">      &quot;_doc&quot; : {</span>
<span class="line">        &quot;order&quot; : &quot;asc&quot;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27</p><h3 id="五、与其他dsl结合" tabindex="-1"><a class="header-anchor" href="#五、与其他dsl结合"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%94%E3%80%81%E4%B8%8E%E5%85%B6%E4%BB%96dsl%E7%BB%93%E5%90%88" target="_blank" rel="noopener noreferrer">#</a>五、与其他DSL结合</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">POST /_sql?format=txt</span>
<span class="line">{</span>
<span class="line">    &quot;query&quot;: &quot;SELECT * FROM tvs&quot;,</span>
<span class="line">    &quot;filter&quot;: {</span>
<span class="line">        &quot;range&quot;: {</span>
<span class="line">            &quot;price&quot;: {</span>
<span class="line">                &quot;gte&quot; : 1200,</span>
<span class="line">                &quot;lte&quot; : 2000</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12</p><h3 id="六、-java-代码实现sql功能" tabindex="-1"><a class="header-anchor" href="#六、-java-代码实现sql功能"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%85%AD%E3%80%81-java-%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0sql%E5%8A%9F%E8%83%BD" target="_blank" rel="noopener noreferrer">#</a>六、 java 代码实现sql功能</span></a></h3><p>1、前提 es拥有白金版功能</p><p>kibana中管理-》许可管理 开启白金版试用</p><p>2、导入依赖</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    &lt;dependency&gt;</span>
<span class="line">        &lt;groupId&gt;org.elasticsearch.plugin&lt;/groupId&gt;</span>
<span class="line">        &lt;artifactId&gt;x-pack-sql-jdbc&lt;/artifactId&gt;</span>
<span class="line">        &lt;version&gt;7.3.0&lt;/version&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;repositories&gt;</span>
<span class="line">        &lt;repository&gt;</span>
<span class="line">            &lt;id&gt;elastic.co&lt;/id&gt;</span>
<span class="line">            &lt;url&gt;https://artifacts.elastic.co/maven&lt;/url&gt;</span>
<span class="line">        &lt;/repository&gt;</span>
<span class="line">    &lt;/repositories&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public static void main(String[] args) {</span>
<span class="line">        try  {</span>
<span class="line">            Connection connection = DriverManager.getConnection(&quot;jdbc:es://http://localhost:9200&quot;);</span>
<span class="line">            Statement statement = connection.createStatement();</span>
<span class="line">            ResultSet results = statement.executeQuery(</span>
<span class="line">                    &quot;select * from tvs&quot;);</span>
<span class="line">            while(results.next()){</span>
<span class="line">                System.out.println(results.getString(1));</span>
<span class="line">                System.out.println(results.getString(2));</span>
<span class="line">                System.out.println(results.getString(3));</span>
<span class="line">                System.out.println(results.getString(4));</span>
<span class="line">                System.out.println(&quot;============================&quot;);</span>
<span class="line">            }</span>
<span class="line">        }catch (Exception e){</span>
<span class="line">            e.printStackTrace();</span>
<span class="line">        }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16</p><p>大型企业可以购买白金版，增加Machine Learning、高级安全性x-pack。</p><h2 id="第二十章-logstash学习" tabindex="-1"><a class="header-anchor" href="#第二十章-logstash学习"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%AC%AC%E4%BA%8C%E5%8D%81%E7%AB%A0-logstash%E5%AD%A6%E4%B9%A0" target="_blank" rel="noopener noreferrer">#</a>第二十章 Logstash学习</span></a></h2><h3 id="一、logstash基本语法组成" tabindex="-1"><a class="header-anchor" href="#一、logstash基本语法组成"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%80%E3%80%81logstash%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95%E7%BB%84%E6%88%90" target="_blank" rel="noopener noreferrer">#</a>一、Logstash基本语法组成</span></a></h3><p><img src="https://www.ydlclass.com/doc21xnv/assets/1573291947262.bf915692.png" alt="1573291947262"></p><h4 id="_1、什么是logstash" tabindex="-1"><a class="header-anchor" href="#_1、什么是logstash"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AFlogstash" target="_blank" rel="noopener noreferrer">#</a>1、什么是Logstash</span></a></h4><p>logstash是一个数据抽取工具，将数据从一个地方转移到另一个地方。如hadoop生态圈的sqoop等。下载地址：https://www.elastic.co/cn/downloads/logstash</p><p>logstash之所以功能强大和流行，还与其丰富的过滤器插件是分不开的，过滤器提供的并不单单是过滤的功能，还可以对进入过滤器的原始数据进行复杂的逻辑处理，甚至添加独特的事件到后续流程中。 Logstash配置文件有如下三部分组成，其中input、output部分是必须配置，filter部分是可选配置，而filter就是过滤器插件，可以在这部分实现各种日志过滤功能。</p><h4 id="_2、配置文件" tabindex="-1"><a class="header-anchor" href="#_2、配置文件"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">#</a>2、配置文件：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input {</span>
<span class="line">    #输入插件</span>
<span class="line">}</span>
<span class="line">filter {</span>
<span class="line">    #过滤匹配插件</span>
<span class="line">}</span>
<span class="line">output {</span>
<span class="line">    #输出插件</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9</p><h4 id="_3、启动操作" tabindex="-1"><a class="header-anchor" href="#_3、启动操作"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E5%90%AF%E5%8A%A8%E6%93%8D%E4%BD%9C" target="_blank" rel="noopener noreferrer">#</a>3、启动操作：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">logstash.bat -e &#39;input{stdin{}} output{stdout{}}&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>为了好维护，将配置写入文件，启动</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">logstash.bat -f ../config/test1.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><h3 id="二、logstash输入插件-input" tabindex="-1"><a class="header-anchor" href="#二、logstash输入插件-input"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%8C%E3%80%81logstash%E8%BE%93%E5%85%A5%E6%8F%92%E4%BB%B6-input" target="_blank" rel="noopener noreferrer">#</a>二、Logstash输入插件（input）</span></a></h3><p>https://www.elastic.co/guide/en/logstash/current/input-plugins.html</p><h4 id="_1、标准输入-stdin" tabindex="-1"><a class="header-anchor" href="#_1、标准输入-stdin"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81%E6%A0%87%E5%87%86%E8%BE%93%E5%85%A5-stdin" target="_blank" rel="noopener noreferrer">#</a>1、标准输入(Stdin)</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input{</span>
<span class="line">    stdin{</span>
<span class="line">       </span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">output {</span>
<span class="line">    stdout{</span>
<span class="line">        codec=&gt;rubydebug    </span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10</p><h4 id="_2、读取文件-file" tabindex="-1"><a class="header-anchor" href="#_2、读取文件-file"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E8%AF%BB%E5%8F%96%E6%96%87%E4%BB%B6-file" target="_blank" rel="noopener noreferrer">#</a>2、读取文件(File)</span></a></h4><p>logstash使用一个名为filewatch的ruby gem库来监听文件变化,并通过一个叫.sincedb的数据库文件来记录被监听的日志文件的读取进度（时间戳），这个sincedb数据文件的默认路径在 &lt;path.data&gt;/plugins/inputs/file下面，文件名类似于.sincedb_123456，而&lt;path.data&gt;表示logstash插件存储目录，默认是LOGSTASH_HOME/data。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input {</span>
<span class="line">    file {</span>
<span class="line">        path =&gt; [&quot;/var/*/*&quot;]</span>
<span class="line">        start_position =&gt; &quot;beginning&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">output {</span>
<span class="line">    stdout{</span>
<span class="line">        codec=&gt;rubydebug    </span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11</p><p>默认情况下，logstash会从文件的结束位置开始读取数据，也就是说logstash进程会以类似tail -f命令的形式逐行获取数据。</p><h4 id="_3、读取tcp网络数据" tabindex="-1"><a class="header-anchor" href="#_3、读取tcp网络数据"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E8%AF%BB%E5%8F%96tcp%E7%BD%91%E7%BB%9C%E6%95%B0%E6%8D%AE" target="_blank" rel="noopener noreferrer">#</a>3、读取TCP网络数据</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input {</span>
<span class="line">  tcp {</span>
<span class="line">    port =&gt; &quot;1234&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">filter {</span>
<span class="line">  grok {</span>
<span class="line">    match =&gt; { &quot;message&quot; =&gt; &quot;%{SYSLOGLINE}&quot; }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">output {</span>
<span class="line">    stdout{</span>
<span class="line">        codec=&gt;rubydebug</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17</p><h3 id="三、logstash过滤器插件-filter" tabindex="-1"><a class="header-anchor" href="#三、logstash过滤器插件-filter"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%B8%89%E3%80%81logstash%E8%BF%87%E6%BB%A4%E5%99%A8%E6%8F%92%E4%BB%B6-filter" target="_blank" rel="noopener noreferrer">#</a>三、Logstash过滤器插件(Filter)</span></a></h3><p>https://www.elastic.co/guide/en/logstash/current/filter-plugins.html</p><h4 id="_1、grok-正则捕获" tabindex="-1"><a class="header-anchor" href="#_1、grok-正则捕获"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1%E3%80%81grok-%E6%AD%A3%E5%88%99%E6%8D%95%E8%8E%B7" target="_blank" rel="noopener noreferrer">#</a>1、Grok 正则捕获</span></a></h4><p>grok是一个十分强大的logstash filter插件，他可以通过正则解析任意文本，将非结构化日志数据弄成结构化和方便查询的结构。他是目前logstash 中解析非结构化日志数据最好的方式。</p><p>Grok 的语法规则是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">%{语法: 语义}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>例如输入的内容为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">172.16.213.132 [07/Feb/2019:16:24:19 +0800] &quot;GET / HTTP/1.1&quot; 403 5039</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>%{IP:clientip}匹配模式将获得的结果为：clientip: 172.16.213.132 %{HTTPDATE:timestamp}匹配模式将获得的结果为：timestamp: 07/Feb/2018:16:24:19 +0800 而%{QS:referrer}匹配模式将获得的结果为：referrer: &quot;GET / HTTP/1.1&quot;</p><p>下面是一个组合匹配模式，它可以获取上面输入的所有内容：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><p>通过上面这个组合匹配模式，我们将输入的内容分成了五个部分，即五个字段，将输入内容分割为不同的数据字段，这对于日后解析和查询日志数据非常有用，这正是使用grok的目的。</p><p>例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input{</span>
<span class="line">    stdin{}</span>
<span class="line">}</span>
<span class="line">filter{</span>
<span class="line">    grok{</span>
<span class="line">        match =&gt; [&quot;message&quot;,&quot;%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}&quot;]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">output{</span>
<span class="line">    stdout{</span>
<span class="line">        codec =&gt; &quot;rubydebug&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13</p><p>输入内容：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">172.16.213.132 [07/Feb/2019:16:24:19 +0800] &quot;GET / HTTP/1.1&quot; 403 5039</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><h4 id="_2、时间处理-date" tabindex="-1"><a class="header-anchor" href="#_2、时间处理-date"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2%E3%80%81%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86-date" target="_blank" rel="noopener noreferrer">#</a>2、时间处理(Date)</span></a></h4><p>date插件是对于排序事件和回填旧数据尤其重要，它可以用来转换日志记录中的时间字段，变成LogStash::Timestamp对象，然后转存到@timestamp字段里，这在之前已经做过简单的介绍。 下面是date插件的一个配置示例（这里仅仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">filter {</span>
<span class="line">    grok {</span>
<span class="line">        match =&gt; [&quot;message&quot;, &quot;%{HTTPDATE:timestamp}&quot;]</span>
<span class="line">    }</span>
<span class="line">    date {</span>
<span class="line">        match =&gt; [&quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot;]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><h4 id="_3、数据修改-mutate" tabindex="-1"><a class="header-anchor" href="#_3、数据修改-mutate"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3%E3%80%81%E6%95%B0%E6%8D%AE%E4%BF%AE%E6%94%B9-mutate" target="_blank" rel="noopener noreferrer">#</a>3、数据修改(Mutate)</span></a></h4><h5 id="_1-正则表达式替换匹配字段" tabindex="-1"><a class="header-anchor" href="#_1-正则表达式替换匹配字段"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_1-%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%9B%BF%E6%8D%A2%E5%8C%B9%E9%85%8D%E5%AD%97%E6%AE%B5" target="_blank" rel="noopener noreferrer">#</a>（1）正则表达式替换匹配字段</span></a></h5><p>gsub可以通过正则表达式替换字段中匹配到的值，只对字符串字段有效，下面是一个关于mutate插件中gsub的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">filter {</span>
<span class="line">    mutate {</span>
<span class="line">        gsub =&gt; [&quot;filed_name_1&quot;, &quot;/&quot; , &quot;_&quot;]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>这个示例表示将filed_name_1字段中所有&quot;/&quot;字符替换为&quot;_&quot;。</p><h5 id="_2-分隔符分割字符串为数组" tabindex="-1"><a class="header-anchor" href="#_2-分隔符分割字符串为数组"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_2-%E5%88%86%E9%9A%94%E7%AC%A6%E5%88%86%E5%89%B2%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%BA%E6%95%B0%E7%BB%84" target="_blank" rel="noopener noreferrer">#</a>（2）分隔符分割字符串为数组</span></a></h5><p>split可以通过指定的分隔符分割字段中的字符串为数组，下面是一个关于mutate插件中split的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">filter {</span>
<span class="line">    mutate {</span>
<span class="line">        split =&gt; [&quot;filed_name_2&quot;, &quot;|&quot;]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>这个示例表示将filed_name_2字段以&quot;|&quot;为区间分隔为数组。</p><h5 id="_3-重命名字段" tabindex="-1"><a class="header-anchor" href="#_3-重命名字段"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_3-%E9%87%8D%E5%91%BD%E5%90%8D%E5%AD%97%E6%AE%B5" target="_blank" rel="noopener noreferrer">#</a>（3）重命名字段</span></a></h5><p>rename可以实现重命名某个字段的功能，下面是一个关于mutate插件中rename的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">filter {</span>
<span class="line">    mutate {</span>
<span class="line">        rename =&gt; { &quot;old_field&quot; =&gt; &quot;new_field&quot; }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>这个示例表示将字段old_field重命名为new_field。</p><h5 id="_4-删除字段" tabindex="-1"><a class="header-anchor" href="#_4-删除字段"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_4-%E5%88%A0%E9%99%A4%E5%AD%97%E6%AE%B5" target="_blank" rel="noopener noreferrer">#</a>（4）删除字段</span></a></h5><p>remove_field可以实现删除某个字段的功能，下面是一个关于mutate插件中remove_field的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">filter {</span>
<span class="line">    mutate {</span>
<span class="line">        remove_field  =&gt;  [&quot;timestamp&quot;]</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>这个示例表示将字段timestamp删除。</p><h5 id="_5-geoip-地址查询归类" tabindex="-1"><a class="header-anchor" href="#_5-geoip-地址查询归类"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#_5-geoip-%E5%9C%B0%E5%9D%80%E6%9F%A5%E8%AF%A2%E5%BD%92%E7%B1%BB" target="_blank" rel="noopener noreferrer">#</a>（5）GeoIP 地址查询归类</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">filter {</span>
<span class="line">    geoip {</span>
<span class="line">        source =&gt; &quot;ip_field&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><h5 id="综合例子" tabindex="-1"><a class="header-anchor" href="#综合例子"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E7%BB%BC%E5%90%88%E4%BE%8B%E5%AD%90" target="_blank" rel="noopener noreferrer">#</a>综合例子：</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input {</span>
<span class="line">    stdin {}</span>
<span class="line">}</span>
<span class="line">filter {</span>
<span class="line">    grok {</span>
<span class="line">        match =&gt; { &quot;message&quot; =&gt; &quot;%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}&quot; }</span>
<span class="line">        remove_field =&gt; [ &quot;message&quot; ]</span>
<span class="line">   }</span>
<span class="line">date {</span>
<span class="line">        match =&gt; [&quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot;]</span>
<span class="line">    }</span>
<span class="line">mutate {</span>
<span class="line">          convert =&gt; [ &quot;response&quot;,&quot;float&quot; ]</span>
<span class="line">           rename =&gt; { &quot;response&quot; =&gt; &quot;response_new&quot; }   </span>
<span class="line">           gsub =&gt; [&quot;referrer&quot;,&quot;\\&quot;&quot;,&quot;&quot;]          </span>
<span class="line">           split =&gt; [&quot;clientip&quot;, &quot;.&quot;]</span>
<span class="line">        }</span>
<span class="line">}</span>
<span class="line">output {</span>
<span class="line">    stdout {</span>
<span class="line">        codec =&gt; &quot;rubydebug&quot;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22</p><h3 id="四、logstash输出插件-output" tabindex="-1"><a class="header-anchor" href="#四、logstash输出插件-output"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E5%9B%9B%E3%80%81logstash%E8%BE%93%E5%87%BA%E6%8F%92%E4%BB%B6-output" target="_blank" rel="noopener noreferrer">#</a>四、Logstash输出插件（output）</span></a></h3><p>https://www.elastic.co/guide/en/logstash/current/output-plugins.html</p><p>output是Logstash的最后阶段，一个事件可以经过多个输出，而一旦所有输出处理完成，整个事件就执行完成。 一些常用的输出包括：</p><ul><li>file： 表示将日志数据写入磁盘上的文件。</li><li>elasticsearch：表示将日志数据发送给Elasticsearch。Elasticsearch可以高效方便和易于查询的保存数据。</li></ul><p>1、输出到标准输出(stdout)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">output {</span>
<span class="line">    stdout {</span>
<span class="line">        codec =&gt; rubydebug</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>2、保存为文件（file）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">output {</span>
<span class="line">    file {</span>
<span class="line">        path =&gt; &quot;/data/log/%{+yyyy-MM-dd}/%{host}_%{+HH}.log&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5</p><p>3、输出到elasticsearch</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">output {</span>
<span class="line">    elasticsearch {</span>
<span class="line">        host =&gt; [&quot;192.168.1.1:9200&quot;,&quot;172.16.213.77:9200&quot;]</span>
<span class="line">        index =&gt; &quot;logstash-%{+YYYY.MM.dd}&quot;       </span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6</p><ul><li>host：是一个数组类型的值，后面跟的值是elasticsearch节点的地址与端口，默认端口是9200。可添加多个地址。</li><li>index：写入elasticsearch的索引的名称，这里可以使用变量。Logstash提供了%{+YYYY.MM.dd}这种写法。在语法解析的时候，看到以+ 号开头的，就会自动认为后面是时间格式，尝试用时间格式来解析后续字符串。这种以天为单位分割的写法，可以很容易的删除老的数据或者搜索指定时间范围内的数据。此外，注意索引名中不能有大写字母。</li><li>manage_template:用来设置是否开启logstash自动管理模板功能，如果设置为false将关闭自动管理模板功能。如果我们自定义了模板，那么应该设置为false。</li><li>template_name:这个配置项用来设置在Elasticsearch中模板的名称。</li></ul><h3 id="五、综合案例" tabindex="-1"><a class="header-anchor" href="#五、综合案例"><span><a href="https://www.ydlclass.com/doc21xnv/distribute/elk/elk2.html#%E4%BA%94%E3%80%81%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">#</a>五、综合案例</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">input {</span>
<span class="line">    file {</span>
<span class="line">        path =&gt; [&quot;D:/ES/logstash-7.3.0/nginx.log&quot;]        </span>
<span class="line">        start_position =&gt; &quot;beginning&quot;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">filter {</span>
<span class="line">    grok {</span>
<span class="line">        match =&gt; { &quot;message&quot; =&gt; &quot;%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}&quot; }</span>
<span class="line">        remove_field =&gt; [ &quot;message&quot; ]</span>
<span class="line">   }</span>
<span class="line">	date {</span>
<span class="line">        match =&gt; [&quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot;]</span>
<span class="line">    }</span>
<span class="line">	mutate {</span>
<span class="line">           rename =&gt; { &quot;response&quot; =&gt; &quot;response_new&quot; }</span>
<span class="line">           convert =&gt; [ &quot;response&quot;,&quot;float&quot; ]</span>
<span class="line">           gsub =&gt; [&quot;referrer&quot;,&quot;\\&quot;&quot;,&quot;&quot;]</span>
<span class="line">           remove_field =&gt; [&quot;timestamp&quot;]</span>
<span class="line">           split =&gt; [&quot;clientip&quot;, &quot;.&quot;]</span>
<span class="line">        }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">output {</span>
<span class="line">    stdout {</span>
<span class="line">        codec =&gt; &quot;rubydebug&quot;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">elasticsearch {</span>
<span class="line">    host =&gt; [&quot;localhost:9200&quot;]</span>
<span class="line">    index =&gt; &quot;logstash-%{+YYYY.MM.dd}&quot;       </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35</p><h2 id="第二十一章-kibana学习" tabindex="-1"><a class="header-anchor" href="#第二十一章-kibana学习"><span>第二十一章 kibana学习</span></a></h2><h3 id="一、基本查询" tabindex="-1"><a class="header-anchor" href="#一、基本查询"><span>一、基本查询</span></a></h3><p>1、是什么：elk中数据展现工具。</p><p>2、下载：https://www.elastic.co/cn/downloads/kibana</p><p>3、使用：建立索引模式，index partten</p><p>discover 中使用DSL搜索。</p><h3 id="二、可视化" tabindex="-1"><a class="header-anchor" href="#二、可视化"><span>二、可视化</span></a></h3><p>绘制图形</p><h3 id="三、仪表盘" tabindex="-1"><a class="header-anchor" href="#三、仪表盘"><span>三、仪表盘</span></a></h3><p>将各种可视化图形放入，形成大屏幕。</p><h3 id="四、使用模板数据指导绘图" tabindex="-1"><a class="header-anchor" href="#四、使用模板数据指导绘图"><span>四、使用模板数据指导绘图</span></a></h3><p>点击主页的添加模板数据，可以看到很多模板数据以及绘图。</p><h3 id="五、其他功能" tabindex="-1"><a class="header-anchor" href="#五、其他功能"><span>五、其他功能</span></a></h3><p>监控，日志，APM等功能非常丰富。</p><h2 id="第二十二章-集群部署" tabindex="-1"><a class="header-anchor" href="#第二十二章-集群部署"><span>第二十二章 集群部署</span></a></h2><p>见部署图</p><h3 id="结点的三个角色" tabindex="-1"><a class="header-anchor" href="#结点的三个角色"><span>结点的三个角色</span></a></h3><p>主结点：master节点主要用于集群的管理及索引 比如新增结点、分片分配、索引的新增和删除等。 数据结点：data 节点上保存了数据分片，它负责索引和搜索操作。 客户端结点：client 节点仅作为请求客户端存在，client的作用也作为负载均衡器，client 节点不存数据，只是将请求均衡转发到其它结点。</p><p>通过下边两项参数来配置结点的功能：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">node.master: #是否允许为主结点</span>
<span class="line">node.data: #允许存储数据作为数据结点</span>
<span class="line">node.ingest: #是否允许成为协调节点</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3</p><p>四种组合方式：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">master=true，data=true：即是主结点又是数据结点</span>
<span class="line">master=false，data=true：仅是数据结点</span>
<span class="line">master=true，data=false：仅是主结点，不存储数据</span>
<span class="line">master=false，data=false：即不是主结点也不是数据结点，此时可设置ingest为true表示它是一个客户端。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二十三章-项目实战" tabindex="-1"><a class="header-anchor" href="#第二十三章-项目实战"><span>第二十三章 项目实战</span></a></h2><h3 id="一、项目一-elk用于日志分析" tabindex="-1"><a class="header-anchor" href="#一、项目一-elk用于日志分析"><span>一、项目一：ELK用于日志分析</span></a></h3><p>需求：集中收集分布式服务的日志</p><p>1逻辑模块程序随时输出日志</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ydlclass<span class="token punctuation">.</span>es</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token class-name">RunWith</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span></span><span class="token class-name">SpringRunner</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * creste by ydlclass.ydl</span>
<span class="line"> */</span></span>
<span class="line"><span class="token annotation punctuation">@SpringBootTest</span></span>
<span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLog</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span><span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">TestLog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Test</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Random</span> random <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">int</span> userid<span class="token operator">=</span>random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;userId:{},send:{}&quot;</span><span class="token punctuation">,</span>userid<span class="token punctuation">,</span><span class="token string">&quot;hello world.I am &quot;</span><span class="token operator">+</span>userid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2logstash收集日志到es</p><p><strong>grok 内置类型</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">USERNAME [a-zA-Z0-9._-]+</span>
<span class="line">USER %{USERNAME}</span>
<span class="line">INT (?:[+-]?(?:[0-9]+))</span>
<span class="line">BASE10NUM (?&lt;![0-9.+-])(?&gt;[+-]?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+)))</span>
<span class="line">NUMBER (?:%{BASE10NUM})</span>
<span class="line">BASE16NUM (?&lt;![0-9A-Fa-f])(?:[+-]?(?:0x)?(?:[0-9A-Fa-f]+))</span>
<span class="line">BASE16FLOAT \\b(?&lt;![0-9A-Fa-f.])(?:[+-]?(?:0x)?(?:(?:[0-9A-Fa-f]+(?:\\.[0-9A-Fa-f]*)?)|(?:\\.[0-9A-Fa-f]+)))\\b</span>
<span class="line"></span>
<span class="line">POSINT \\b(?:[1-9][0-9]*)\\b</span>
<span class="line">NONNEGINT \\b(?:[0-9]+)\\b</span>
<span class="line">WORD \\b\\w+\\b</span>
<span class="line">NOTSPACE \\S+</span>
<span class="line">SPACE \\s*</span>
<span class="line">DATA .*?</span>
<span class="line">GREEDYDATA .*</span>
<span class="line">QUOTEDSTRING (?&gt;(?&lt;!\\\\)(?&gt;&quot;(?&gt;\\\\.|[^\\\\&quot;]+)+&quot;|&quot;&quot;|(?&gt;&#39;(?&gt;\\\\.|[^\\\\&#39;]+)+&#39;)|&#39;&#39;|(?&gt;\`(?&gt;\\\\.|[^\\\\\`]+)+\`)|\`\`))</span>
<span class="line">UUID [A-Fa-f0-9]{8}-(?:[A-Fa-f0-9]{4}-){3}[A-Fa-f0-9]{12}</span>
<span class="line"></span>
<span class="line"># Networking</span>
<span class="line">MAC (?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC})</span>
<span class="line">CISCOMAC (?:(?:[A-Fa-f0-9]{4}\\.){2}[A-Fa-f0-9]{4})</span>
<span class="line">WINDOWSMAC (?:(?:[A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2})</span>
<span class="line">COMMONMAC (?:(?:[A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2})</span>
<span class="line">IPV6 ((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?</span>
<span class="line">IPV4 (?&lt;![0-9])(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(?![0-9])</span>
<span class="line">IP (?:%{IPV6}|%{IPV4})</span>
<span class="line">HOSTNAME \\b(?:[0-9A-Za-z][0-9A-Za-z-]{0,62})(?:\\.(?:[0-9A-Za-z][0-9A-Za-z-]{0,62}))*(\\.?|\\b)</span>
<span class="line">HOST %{HOSTNAME}</span>
<span class="line">IPORHOST (?:%{HOSTNAME}|%{IP})</span>
<span class="line">HOSTPORT %{IPORHOST}:%{POSINT}</span>
<span class="line"></span>
<span class="line"># paths</span>
<span class="line">PATH (?:%{UNIXPATH}|%{WINPATH})</span>
<span class="line">UNIXPATH (?&gt;/(?&gt;[\\w_%!$@:.,-]+|\\\\.)*)+</span>
<span class="line">TTY (?:/dev/(pts|tty([pq])?)(\\w+)?/?(?:[0-9]+))</span>
<span class="line">WINPATH (?&gt;[A-Za-z]+:|\\\\)(?:\\\\[^\\\\?*]*)+</span>
<span class="line">URIPROTO [A-Za-z]+(\\+[A-Za-z+]+)?</span>
<span class="line">URIHOST %{IPORHOST}(?::%{POSINT:port})?</span>
<span class="line"># uripath comes loosely from RFC1738, but mostly from what Firefox</span>
<span class="line"># doesn&#39;t turn into %XX</span>
<span class="line">URIPATH (?:/[A-Za-z0-9$.+!*&#39;(){},~:;=@#%_\\-]*)+</span>
<span class="line">#URIPARAM \\?(?:[A-Za-z0-9]+(?:=(?:[^&amp;]*))?(?:&amp;(?:[A-Za-z0-9]+(?:=(?:[^&amp;]*))?)?)*)?</span>
<span class="line">URIPARAM \\?[A-Za-z0-9$.+!*&#39;|(){},~@#%&amp;/=:;_?\\-\\[\\]]*</span>
<span class="line">URIPATHPARAM %{URIPATH}(?:%{URIPARAM})?</span>
<span class="line">URI %{URIPROTO}://(?:%{USER}(?::[^@]*)?@)?(?:%{URIHOST})?(?:%{URIPATHPARAM})?</span>
<span class="line"></span>
<span class="line"># Months: January, Feb, 3, 03, 12, December</span>
<span class="line">MONTH \\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\\b</span>
<span class="line">MONTHNUM (?:0?[1-9]|1[0-2])</span>
<span class="line">MONTHNUM2 (?:0[1-9]|1[0-2])</span>
<span class="line">MONTHDAY (?:(?:0[1-9])|(?:[12][0-9])|(?:3[01])|[1-9])</span>
<span class="line"></span>
<span class="line"># Days: Monday, Tue, Thu, etc...</span>
<span class="line">DAY (?:Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)</span>
<span class="line"></span>
<span class="line"># Years?</span>
<span class="line">YEAR (?&gt;\\d\\d){1,2}</span>
<span class="line">HOUR (?:2[0123]|[01]?[0-9])</span>
<span class="line">MINUTE (?:[0-5][0-9])</span>
<span class="line"># &#39;60&#39; is a leap second in most time standards and thus is valid.</span>
<span class="line">SECOND (?:(?:[0-5]?[0-9]|60)(?:[:.,][0-9]+)?)</span>
<span class="line">TIME (?!&lt;[0-9])%{HOUR}:%{MINUTE}(?::%{SECOND})(?![0-9])</span>
<span class="line"># datestamp is YYYY/MM/DD-HH:MM:SS.UUUU (or something like it)</span>
<span class="line">DATE_US %{MONTHNUM}[/-]%{MONTHDAY}[/-]%{YEAR}</span>
<span class="line">DATE_EU %{MONTHDAY}[./-]%{MONTHNUM}[./-]%{YEAR}</span>
<span class="line">ISO8601_TIMEZONE (?:Z|[+-]%{HOUR}(?::?%{MINUTE}))</span>
<span class="line">ISO8601_SECOND (?:%{SECOND}|60)</span>
<span class="line">TIMESTAMP_ISO8601 %{YEAR}-%{MONTHNUM}-%{MONTHDAY}[T ]%{HOUR}:?%{MINUTE}(?::?%{SECOND})?%{ISO8601_TIMEZONE}?</span>
<span class="line">DATE %{DATE_US}|%{DATE_EU}</span>
<span class="line">DATESTAMP %{DATE}[- ]%{TIME}</span>
<span class="line">TZ (?:[PMCE][SD]T|UTC)</span>
<span class="line">DATESTAMP_RFC822 %{DAY} %{MONTH} %{MONTHDAY} %{YEAR} %{TIME} %{TZ}</span>
<span class="line">DATESTAMP_RFC2822 %{DAY}, %{MONTHDAY} %{MONTH} %{YEAR} %{TIME} %{ISO8601_TIMEZONE}</span>
<span class="line">DATESTAMP_OTHER %{DAY} %{MONTH} %{MONTHDAY} %{TIME} %{TZ} %{YEAR}</span>
<span class="line">DATESTAMP_EVENTLOG %{YEAR}%{MONTHNUM2}%{MONTHDAY}%{HOUR}%{MINUTE}%{SECOND}</span>
<span class="line"></span>
<span class="line"># Syslog Dates: Month Day HH:MM:SS</span>
<span class="line">SYSLOGTIMESTAMP %{MONTH} +%{MONTHDAY} %{TIME}</span>
<span class="line">PROG (?:[\\w._/%-]+)</span>
<span class="line">SYSLOGPROG %{PROG:program}(?:\\[%{POSINT:pid}\\])?</span>
<span class="line">SYSLOGHOST %{IPORHOST}</span>
<span class="line">SYSLOGFACILITY &lt;%{NONNEGINT:facility}.%{NONNEGINT:priority}&gt;</span>
<span class="line">HTTPDATE %{MONTHDAY}/%{MONTH}/%{YEAR}:%{TIME} %{INT}</span>
<span class="line"></span>
<span class="line"># Shortcuts</span>
<span class="line">QS %{QUOTEDSTRING}</span>
<span class="line"></span>
<span class="line"># Log formats</span>
<span class="line">SYSLOGBASE %{SYSLOGTIMESTAMP:timestamp} (?:%{SYSLOGFACILITY} )?%{SYSLOGHOST:logsource} %{SYSLOGPROG}:</span>
<span class="line">COMMONAPACHELOG %{IPORHOST:clientip} %{USER:ident} %{USER:auth} \\[%{HTTPDATE:timestamp}\\] &quot;(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion})?|%{DATA:rawrequest})&quot; %{NUMBER:response} (?:%{NUMBER:bytes}|-)</span>
<span class="line">COMBINEDAPACHELOG %{COMMONAPACHELOG} %{QS:referrer} %{QS:agent}</span>
<span class="line"></span>
<span class="line"># Log Levels</span>
<span class="line">LOGLEVEL ([Aa]lert|ALERT|[Tt]race|TRACE|[Dd]ebug|DEBUG|[Nn]otice|NOTICE|[Ii]nfo|INFO|[Ww]arn?(?:ing)?|WARN?(?:ING)?|[Ee]rr?(?:or)?|ERR?(?:OR)?|[Cc]rit?(?:ical)?|CRIT?(?:ICAL)?|[Ff]atal|FATAL|[Ss]evere|SEVERE|EMERG(?:ENCY)?|[Ee]merg(?:ency)?)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写logstash配置文件。</p><p>3kibana展现数据</p><h3 id="二、项目二-学成在线站内搜索模块" tabindex="-1"><a class="header-anchor" href="#二、项目二-学成在线站内搜索模块"><span>二、项目二：学成在线站内搜索模块</span></a></h3><h4 id="_1、mysql导入course-pub表" tabindex="-1"><a class="header-anchor" href="#_1、mysql导入course-pub表"><span>1、mysql导入course_pub表</span></a></h4><h4 id="_2、创建索引xc-course" tabindex="-1"><a class="header-anchor" href="#_2、创建索引xc-course"><span>2、创建索引xc_course</span></a></h4><h4 id="_3、创建映射" tabindex="-1"><a class="header-anchor" href="#_3、创建映射"><span>3、创建映射</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PUT /xc_course</span>
<span class="line">{</span>
<span class="line">  &quot;settings&quot;: {</span>
<span class="line">    &quot;number_of_shards&quot;: 1,</span>
<span class="line">    &quot;number_of_replicas&quot;: 0</span>
<span class="line">  },</span>
<span class="line">  &quot;mappings&quot;: {</span>
<span class="line">    &quot;properties&quot;: {</span>
<span class="line">      &quot;description&quot; : {</span>
<span class="line">                &quot;analyzer&quot; : &quot;ik_max_word&quot;,</span>
<span class="line">                &quot;search_analyzer&quot;: &quot;ik_smart&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;grade&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;id&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;mt&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;name&quot; : {</span>
<span class="line">                &quot;analyzer&quot; : &quot;ik_max_word&quot;,</span>
<span class="line">           &quot;search_analyzer&quot;: &quot;ik_smart&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;users&quot; : {</span>
<span class="line">               &quot;index&quot; : false,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;charge&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;valid&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;pic&quot; : {</span>
<span class="line">               &quot;index&quot; : false,</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;qq&quot; : {</span>
<span class="line">               &quot;index&quot; : false,</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;price&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;float&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;price_old&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;float&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;st&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;status&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;studymodel&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;teachmode&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;teachplan&quot; : {</span>
<span class="line">                &quot;analyzer&quot; : &quot;ik_max_word&quot;,</span>
<span class="line">           &quot;search_analyzer&quot;: &quot;ik_smart&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">           &quot;expires&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;,</span>
<span class="line">            &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;pub_time&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;,</span>
<span class="line">             &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;start_time&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;,</span>
<span class="line">           &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;</span>
<span class="line">            },</span>
<span class="line">          &quot;end_time&quot; : {</span>
<span class="line">                 &quot;type&quot; : &quot;date&quot;,</span>
<span class="line">           &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;</span>
<span class="line">            }</span>
<span class="line">    }</span>
<span class="line">  } </span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87</p><h4 id="_4、logstash创建模板文件" tabindex="-1"><a class="header-anchor" href="#_4、logstash创建模板文件"><span>4、logstash创建模板文件</span></a></h4><p>Logstash的工作是从MySQL中读取数据，向ES中创建索引，这里需要提前创建mapping的模板文件以便logstash使用。</p><p>在logstach的config目录创建xc_course_template.json，内容如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">   &quot;mappings&quot; : {</span>
<span class="line">      &quot;doc&quot; : {</span>
<span class="line">         &quot;properties&quot; : {</span>
<span class="line">            &quot;charge&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;description&quot; : {</span>
<span class="line">               &quot;analyzer&quot; : &quot;ik_max_word&quot;,</span>
<span class="line">               &quot;search_analyzer&quot; : &quot;ik_smart&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;end_time&quot; : {</span>
<span class="line">               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;expires&quot; : {</span>
<span class="line">               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;grade&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;id&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;mt&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;name&quot; : {</span>
<span class="line">               &quot;analyzer&quot; : &quot;ik_max_word&quot;,</span>
<span class="line">               &quot;search_analyzer&quot; : &quot;ik_smart&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;pic&quot; : {</span>
<span class="line">               &quot;index&quot; : false,</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;price&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;float&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;price_old&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;float&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;pub_time&quot; : {</span>
<span class="line">               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;qq&quot; : {</span>
<span class="line">               &quot;index&quot; : false,</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;st&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;start_time&quot; : {</span>
<span class="line">               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;date&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;status&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;studymodel&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;teachmode&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;teachplan&quot; : {</span>
<span class="line">               &quot;analyzer&quot; : &quot;ik_max_word&quot;,</span>
<span class="line">               &quot;search_analyzer&quot; : &quot;ik_smart&quot;,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;users&quot; : {</span>
<span class="line">               &quot;index&quot; : false,</span>
<span class="line">               &quot;type&quot; : &quot;text&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;valid&quot; : {</span>
<span class="line">               &quot;type&quot; : &quot;keyword&quot;</span>
<span class="line">            }</span>
<span class="line">         }</span>
<span class="line">      }</span>
<span class="line">   },</span>
<span class="line">   &quot;template&quot; : &quot;xc_course&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85</p><h4 id="_5、logstash配置mysql-conf" tabindex="-1"><a class="header-anchor" href="#_5、logstash配置mysql-conf"><span>5、logstash配置mysql.conf</span></a></h4><p>1、ES采用UTC时区问题</p><p>ES采用UTC 时区，比北京时间早8小时，所以ES读取数据时让最后更新时间加8小时</p><p>where timestamp &gt; date_add(:sql_last_value,INTERVAL 8 HOUR)</p><p>2、logstash每个执行完成会在/config/logstash_metadata记录执行时间下次以此时间为基准进行增量同步数据到索引库。</p><h4 id="_6、启动" tabindex="-1"><a class="header-anchor" href="#_6、启动"><span>6、启动</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.\\logstash.bat -f ..\\config\\mysql.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1</p><h4 id="_7、后端代码" tabindex="-1"><a class="header-anchor" href="#_7、后端代码"><span>7、后端代码</span></a></h4><p>（1）Controller</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@RestController</span></span>
<span class="line"><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/search/course&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EsCourseController</span>  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Autowired</span></span>
<span class="line">    <span class="token class-name">EsCourseService</span> esCourseService<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;/list/{page}/{size}&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">QueryResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CoursePub</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token class-name">CourseSearchParam</span> courseSearchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> esCourseService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span>size<span class="token punctuation">,</span>courseSearchParam<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@Service</span>
<span class="line">public class EsCourseService {</span>
<span class="line">    @Value(&quot;\${heima.course.source_field}&quot;)</span>
<span class="line">    private String source_field;</span>
<span class="line"></span>
<span class="line">    @Autowired</span>
<span class="line">    RestHighLevelClient restHighLevelClient;</span>
<span class="line"></span>
<span class="line">    //课程搜索</span>
<span class="line">    public QueryResponseResult&lt;CoursePub&gt; list(int page, int size, CourseSearchParam courseSearchParam) {</span>
<span class="line">        if (courseSearchParam == null) {</span>
<span class="line">            courseSearchParam = new CourseSearchParam();</span>
<span class="line">        }</span>
<span class="line">        //1创建搜索请求对象</span>
<span class="line">        SearchRequest searchRequest = new SearchRequest(&quot;xc_course&quot;);</span>
<span class="line"></span>
<span class="line">        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();</span>
<span class="line">        //过虑源字段</span>
<span class="line">        String[] source_field_array = source_field.split(&quot;,&quot;);</span>
<span class="line">        searchSourceBuilder.fetchSource(source_field_array, new String[]{});</span>
<span class="line">        //创建布尔查询对象</span>
<span class="line">        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();</span>
<span class="line">        //搜索条件</span>
<span class="line">        //根据关键字搜索</span>
<span class="line">        if (StringUtils.isNotEmpty(courseSearchParam.getKeyword())) {</span>
<span class="line">            MultiMatchQueryBuilder multiMatchQueryBuilder = QueryBuilders.multiMatchQuery(courseSearchParam.getKeyword(), &quot;name&quot;, &quot;description&quot;, &quot;teachplan&quot;)</span>
<span class="line">                    .minimumShouldMatch(&quot;70%&quot;)</span>
<span class="line">                    .field(&quot;name&quot;, 10);</span>
<span class="line">            boolQueryBuilder.must(multiMatchQueryBuilder);</span>
<span class="line">        }</span>
<span class="line">        if (StringUtils.isNotEmpty(courseSearchParam.getMt())) {</span>
<span class="line">            //根据一级分类</span>
<span class="line">            boolQueryBuilder.filter(QueryBuilders.termQuery(&quot;mt&quot;, courseSearchParam.getMt()));</span>
<span class="line">        }</span>
<span class="line">        if (StringUtils.isNotEmpty(courseSearchParam.getSt())) {</span>
<span class="line">            //根据二级分类</span>
<span class="line">            boolQueryBuilder.filter(QueryBuilders.termQuery(&quot;st&quot;, courseSearchParam.getSt()));</span>
<span class="line">        }</span>
<span class="line">        if (StringUtils.isNotEmpty(courseSearchParam.getGrade())) {</span>
<span class="line">            //根据难度等级</span>
<span class="line">            boolQueryBuilder.filter(QueryBuilders.termQuery(&quot;grade&quot;, courseSearchParam.getGrade()));</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        //设置boolQueryBuilder到searchSourceBuilder</span>
<span class="line">        searchSourceBuilder.query(boolQueryBuilder);</span>
<span class="line">        //设置分页参数</span>
<span class="line">        if (page &lt;= 0) {</span>
<span class="line">            page = 1;</span>
<span class="line">        }</span>
<span class="line">        if (size &lt;= 0) {</span>
<span class="line">            size = 12;</span>
<span class="line">        }</span>
<span class="line">        //起始记录下标</span>
<span class="line">        int from = (page - 1) * size;</span>
<span class="line">        searchSourceBuilder.from(from);</span>
<span class="line">        searchSourceBuilder.size(size);</span>
<span class="line"></span>
<span class="line">        //设置高亮</span>
<span class="line">        HighlightBuilder highlightBuilder = new HighlightBuilder();</span>
<span class="line">        highlightBuilder.preTags(&quot;&lt;font class=&#39;eslight&#39;&gt;&quot;);</span>
<span class="line">        highlightBuilder.postTags(&quot;&lt;/font&gt;&quot;);</span>
<span class="line">        //设置高亮字段</span>
<span class="line">//        &lt;font class=&#39;eslight&#39;&gt;node&lt;/font&gt;学习</span>
<span class="line">        highlightBuilder.fields().add(new HighlightBuilder.Field(&quot;name&quot;));</span>
<span class="line">        searchSourceBuilder.highlighter(highlightBuilder);</span>
<span class="line"></span>
<span class="line">        searchRequest.source(searchSourceBuilder);</span>
<span class="line"></span>
<span class="line">        QueryResult&lt;CoursePub&gt; queryResult = new QueryResult();</span>
<span class="line">        List&lt;CoursePub&gt; list = new ArrayList&lt;CoursePub&gt;();</span>
<span class="line">        try {</span>
<span class="line">            //2执行搜索</span>
<span class="line">            SearchResponse searchResponse = restHighLevelClient.search(searchRequest, RequestOptions.DEFAULT);</span>
<span class="line">            //3获取响应结果</span>
<span class="line">            SearchHits hits = searchResponse.getHits();</span>
<span class="line">            long totalHits=hits.getTotalHits().value;</span>
<span class="line">            //匹配的总记录数</span>
<span class="line">//            long totalHits = hits.totalHits;</span>
<span class="line">            queryResult.setTotal(totalHits);</span>
<span class="line">            SearchHit[] searchHits = hits.getHits();</span>
<span class="line">            for (SearchHit hit : searchHits) {</span>
<span class="line">                CoursePub coursePub = new CoursePub();</span>
<span class="line">                //源文档</span>
<span class="line">                Map&lt;String, Object&gt; sourceAsMap = hit.getSourceAsMap();</span>
<span class="line">                //取出id</span>
<span class="line">                String id = (String) sourceAsMap.get(&quot;id&quot;);</span>
<span class="line">                coursePub.setId(id);</span>
<span class="line">                //取出name</span>
<span class="line">                String name = (String) sourceAsMap.get(&quot;name&quot;);</span>
<span class="line">                //取出高亮字段name</span>
<span class="line">                Map&lt;String, HighlightField&gt; highlightFields = hit.getHighlightFields();</span>
<span class="line">                if (highlightFields != null) {</span>
<span class="line">                    HighlightField highlightFieldName = highlightFields.get(&quot;name&quot;);</span>
<span class="line">                    if (highlightFieldName != null) {</span>
<span class="line">                        Text[] fragments = highlightFieldName.fragments();</span>
<span class="line">                        StringBuffer stringBuffer = new StringBuffer();</span>
<span class="line">                        for (Text text : fragments) {</span>
<span class="line">                            stringBuffer.append(text);</span>
<span class="line">                        }</span>
<span class="line">                        name = stringBuffer.toString();</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">                coursePub.setName(name);</span>
<span class="line">                //图片</span>
<span class="line">                String pic = (String) sourceAsMap.get(&quot;pic&quot;);</span>
<span class="line">                coursePub.setPic(pic);</span>
<span class="line">                //价格</span>
<span class="line">                Double price = null;</span>
<span class="line">                try {</span>
<span class="line">                    if (sourceAsMap.get(&quot;price&quot;) != null) {</span>
<span class="line">                        price = (Double) sourceAsMap.get(&quot;price&quot;);</span>
<span class="line">                    }</span>
<span class="line"></span>
<span class="line">                } catch (Exception e) {</span>
<span class="line">                    e.printStackTrace();</span>
<span class="line">                }</span>
<span class="line">                coursePub.setPrice(price);</span>
<span class="line">                //旧价格</span>
<span class="line">                Double price_old = null;</span>
<span class="line">                try {</span>
<span class="line">                    if (sourceAsMap.get(&quot;price_old&quot;) != null) {</span>
<span class="line">                        price_old = (Double) sourceAsMap.get(&quot;price_old&quot;);</span>
<span class="line">                    }</span>
<span class="line">                } catch (Exception e) {</span>
<span class="line">                    e.printStackTrace();</span>
<span class="line">                }</span>
<span class="line">                coursePub.setPrice_old(price_old);</span>
<span class="line">                //将coursePub对象放入list</span>
<span class="line">                list.add(coursePub);</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        } catch (IOException e) {</span>
<span class="line">            e.printStackTrace();</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        queryResult.setList(list);</span>
<span class="line">        QueryResponseResult&lt;CoursePub&gt; queryResponseResult = new QueryResponseResult&lt;CoursePub&gt;(CommonCode.SUCCESS, queryResult);</span>
<span class="line"></span>
<span class="line">        return queryResponseResult;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,900),t=[i];function p(c,o){return a(),n("div",null,t)}const d=s(l,[["render",p],["__file","elk2.html.vue"]]),r=JSON.parse('{"path":"/elk2/elk2.html","title":"ELK","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"第十一章 索引Index入门","slug":"第十一章-索引index入门","link":"#第十一章-索引index入门","children":[{"level":3,"title":"一、索引管理","slug":"一、索引管理","link":"#一、索引管理","children":[]},{"level":3,"title":"二、定制分词器","slug":"二、定制分词器","link":"#二、定制分词器","children":[]},{"level":3,"title":"#三、type底层结构及弃用原因","slug":"三、type底层结构及弃用原因","link":"#三、type底层结构及弃用原因","children":[]},{"level":3,"title":"#四、定制dynamic mapping","slug":"四、定制dynamic-mapping","link":"#四、定制dynamic-mapping","children":[]},{"level":3,"title":"#五、零停机重建索引","slug":"五、零停机重建索引","link":"#五、零停机重建索引","children":[]}]},{"level":2,"title":"#第十二章 中文分词器 IK分词器","slug":"第十二章-中文分词器-ik分词器","link":"#第十二章-中文分词器-ik分词器","children":[{"level":3,"title":"#一、Ik分词器安装使用","slug":"一、ik分词器安装使用","link":"#一、ik分词器安装使用","children":[]},{"level":3,"title":"#二、 ik配置文件","slug":"二、-ik配置文件","link":"#二、-ik配置文件","children":[]},{"level":3,"title":"#三、使用mysql热更新 词库","slug":"三、使用mysql热更新-词库","link":"#三、使用mysql热更新-词库","children":[]}]},{"level":2,"title":"#第十三章 java api 实现索引管理","slug":"第十三章-java-api-实现索引管理","link":"#第十三章-java-api-实现索引管理","children":[]},{"level":2,"title":"#第十四章 search搜索入门","slug":"第十四章-search搜索入门","link":"#第十四章-search搜索入门","children":[{"level":3,"title":"#一、搜索语法入门","slug":"一、搜索语法入门","link":"#一、搜索语法入门","children":[]},{"level":3,"title":"#二、multi-index 多索引搜索","slug":"二、multi-index-多索引搜索","link":"#二、multi-index-多索引搜索","children":[]},{"level":3,"title":"#三、分页搜索","slug":"三、分页搜索","link":"#三、分页搜索","children":[]},{"level":3,"title":"#四、 query string基础语法","slug":"四、-query-string基础语法","link":"#四、-query-string基础语法","children":[]},{"level":3,"title":"#五、query DSL入门","slug":"五、query-dsl入门","link":"#五、query-dsl入门","children":[]},{"level":3,"title":"#六、full-text search 全文检索","slug":"六、full-text-search-全文检索","link":"#六、full-text-search-全文检索","children":[]},{"level":3,"title":"#七、DSL 语法练习","slug":"七、dsl-语法练习","link":"#七、dsl-语法练习","children":[]},{"level":3,"title":"#八、 Filter","slug":"八、-filter","link":"#八、-filter","children":[]},{"level":3,"title":"#九、定位错误语法","slug":"九、定位错误语法","link":"#九、定位错误语法","children":[]},{"level":3,"title":"#十、定制排序规则","slug":"十、定制排序规则","link":"#十、定制排序规则","children":[]},{"level":3,"title":"#十一、 Text字段排序问题","slug":"十一、-text字段排序问题","link":"#十一、-text字段排序问题","children":[]},{"level":3,"title":"#十二、Scroll分批查询","slug":"十二、scroll分批查询","link":"#十二、scroll分批查询","children":[]}]},{"level":2,"title":"#第十五章 java api实现搜索","slug":"第十五章-java-api实现搜索","link":"#第十五章-java-api实现搜索","children":[]},{"level":2,"title":"#第十六章 评分机制详解","slug":"第十六章-评分机制详解","link":"#第十六章-评分机制详解","children":[{"level":3,"title":"#一、评分机制 TF\\\\IDF","slug":"一、评分机制-tf-idf","link":"#一、评分机制-tf-idf","children":[]},{"level":3,"title":"#二、Doc value","slug":"二、doc-value","link":"#二、doc-value","children":[]},{"level":3,"title":"#三、query phase","slug":"三、query-phase","link":"#三、query-phase","children":[]},{"level":3,"title":"#四、 fetch phase","slug":"四、-fetch-phase","link":"#四、-fetch-phase","children":[]},{"level":3,"title":"#五、搜索参数小总结","slug":"五、搜索参数小总结","link":"#五、搜索参数小总结","children":[]}]},{"level":2,"title":"#第十七章 聚合入门","slug":"第十七章-聚合入门","link":"#第十七章-聚合入门","children":[{"level":3,"title":"#一、聚合示例","slug":"一、聚合示例","link":"#一、聚合示例","children":[]},{"level":3,"title":"#二、两个核心概念：bucket和metric","slug":"二、两个核心概念-bucket和metric","link":"#二、两个核心概念-bucket和metric","children":[]}]},{"level":2,"title":"#第十八章 java api实现聚合","slug":"第十八章-java-api实现聚合","link":"#第十八章-java-api实现聚合","children":[]},{"level":2,"title":"#第十九章 es7 sql新特性","slug":"第十九章-es7-sql新特性","link":"#第十九章-es7-sql新特性","children":[{"level":3,"title":"#一、快速入门","slug":"一、快速入门","link":"#一、快速入门","children":[]},{"level":3,"title":"#二、启动方式","slug":"二、启动方式","link":"#二、启动方式","children":[]},{"level":3,"title":"#三、显示方式","slug":"三、显示方式","link":"#三、显示方式","children":[]},{"level":3,"title":"#四、sql 翻译","slug":"四、sql-翻译","link":"#四、sql-翻译","children":[]},{"level":3,"title":"#五、与其他DSL结合","slug":"五、与其他dsl结合","link":"#五、与其他dsl结合","children":[]},{"level":3,"title":"#六、 java 代码实现sql功能","slug":"六、-java-代码实现sql功能","link":"#六、-java-代码实现sql功能","children":[]}]},{"level":2,"title":"#第二十章 Logstash学习","slug":"第二十章-logstash学习","link":"#第二十章-logstash学习","children":[{"level":3,"title":"#一、Logstash基本语法组成","slug":"一、logstash基本语法组成","link":"#一、logstash基本语法组成","children":[]},{"level":3,"title":"#二、Logstash输入插件（input）","slug":"二、logstash输入插件-input","link":"#二、logstash输入插件-input","children":[]},{"level":3,"title":"#三、Logstash过滤器插件(Filter)","slug":"三、logstash过滤器插件-filter","link":"#三、logstash过滤器插件-filter","children":[]},{"level":3,"title":"#四、Logstash输出插件（output）","slug":"四、logstash输出插件-output","link":"#四、logstash输出插件-output","children":[]},{"level":3,"title":"#五、综合案例","slug":"五、综合案例","link":"#五、综合案例","children":[]}]},{"level":2,"title":"第二十一章 kibana学习","slug":"第二十一章-kibana学习","link":"#第二十一章-kibana学习","children":[{"level":3,"title":"一、基本查询","slug":"一、基本查询","link":"#一、基本查询","children":[]},{"level":3,"title":"二、可视化","slug":"二、可视化","link":"#二、可视化","children":[]},{"level":3,"title":"三、仪表盘","slug":"三、仪表盘","link":"#三、仪表盘","children":[]},{"level":3,"title":"四、使用模板数据指导绘图","slug":"四、使用模板数据指导绘图","link":"#四、使用模板数据指导绘图","children":[]},{"level":3,"title":"五、其他功能","slug":"五、其他功能","link":"#五、其他功能","children":[]}]},{"level":2,"title":"第二十二章 集群部署","slug":"第二十二章-集群部署","link":"#第二十二章-集群部署","children":[{"level":3,"title":"结点的三个角色","slug":"结点的三个角色","link":"#结点的三个角色","children":[]}]},{"level":2,"title":"第二十三章 项目实战","slug":"第二十三章-项目实战","link":"#第二十三章-项目实战","children":[{"level":3,"title":"一、项目一：ELK用于日志分析","slug":"一、项目一-elk用于日志分析","link":"#一、项目一-elk用于日志分析","children":[]},{"level":3,"title":"二、项目二：学成在线站内搜索模块","slug":"二、项目二-学成在线站内搜索模块","link":"#二、项目二-学成在线站内搜索模块","children":[]}]}],"git":{"updatedTime":1723708439000,"contributors":[{"name":"zqb","email":"2506956864@qq.com","commits":1}]},"filePathRelative":"elk2/elk2.md","excerpt":"\\n<h2>第十一章 索引Index入门</h2>\\n<h3>一、索引管理</h3>\\n<h4>1、为什么我们要手动创建索引</h4>\\n<p>直接put数据 PUT index/_doc/1,es会自动生成索引，并建立动态映射dynamic mapping。</p>\\n<p>在生产上，我们需要自己手动建立索引和映射，为了更好地管理索引。就像数据库的建表语句一样。</p>\\n<h4>2、索引管理</h4>\\n<h5>（1）创建索引</h5>\\n<p>创建索引的语法</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">PUT /index</span>\\n<span class=\\"line\\">{</span>\\n<span class=\\"line\\">    \\"settings\\": { ... any settings ... },</span>\\n<span class=\\"line\\">    \\"mappings\\": {</span>\\n<span class=\\"line\\">       \\"properties\\" : {</span>\\n<span class=\\"line\\">            \\"field1\\" : { \\"type\\" : \\"text\\" }</span>\\n<span class=\\"line\\">        }</span>\\n<span class=\\"line\\">    },</span>\\n<span class=\\"line\\">    \\"aliases\\": {</span>\\n<span class=\\"line\\">    \\t\\"default_index\\": {}</span>\\n<span class=\\"line\\">  } </span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,r as data};
