import{_ as n,c as s,o as a,a as e}from"./app-CiSBoDQ3.js";const i={},l=e(`<h1 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api"><span>常用API</span></a></h1><h2 id="一、api是什么" tabindex="-1"><a class="header-anchor" href="#一、api是什么"><span>一、api是什么</span></a></h2><p>（1）概述</p><p>API（Application Programming Interface）应用程序接口，是一些预先定义的接口。我们现在理解接口课程很狭隘，因为jdk中本身就有接口的概念。</p><p>其实我们类的方法，接口的方法在宏观上都能称之为接口。</p><p>（2）api文档</p><p>我们现在可以狭义的去理解它，就是一个文档，描述了jdk内置类的说明。</p><p>文档地址：https://www.matools.com/api/java8，离线版本也有。我放在咱们的资料区中。</p><p>在学习这一章节的时候，千万不要陷入记忆的魔障，api文档不是用来背的，是用来查的。我们要做到心中大概知道有一个类能实现某一类方法就好了，剩下的我们在使用的时候去查阅就好了。</p><p>（3）idea打包api doc</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210825103101043.0053154b.png" alt="image-20210825103101043"></p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210825103122401.5a6910c7.png" alt="image-20210825103122401"></p><p>为了防止乱码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">-encoding utf-8 -charset utf-8</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="二、时间相关api" tabindex="-1"><a class="header-anchor" href="#二、时间相关api"><span>二、时间相关api</span></a></h2><h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h4><p>学习时间类我们先要了解两个概念：</p><p>1、时间：需要解释的吗？就是1991年4月8日12点12分40秒，时间会因为时区的不同而不同。</p><p>2、时区：都学过，都知道东八区吧！</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210809160109166.e5cefa2d.png" alt="image-20210809160109166"></p><p>2、时间戳：时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总毫秒数。时间戳在全世界都是固定的。</p><p>格林尼治标（英国伦敦郊区的皇家格林尼治天文台的标准时间）准时间的正午是指当太阳横穿格林尼治子午线时（也就是在格林尼治时）的时间。因为本初子午线被定义在通过那里的经线。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们思考，java中一切皆对象，那时间也是对象，时区也是对象，但时间戳只是个毫秒数，就是个Long类型的数字。</p><h3 id="_1、date" tabindex="-1"><a class="header-anchor" href="#_1、date"><span>1、Date</span></a></h3><h4 id="_1-初步使用" tabindex="-1"><a class="header-anchor" href="#_1-初步使用"><span>（1）初步使用</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// 不能引入错误的包哈</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DateTest</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">结果：</span>
<span class="line"><span class="token class-name">Mon</span> <span class="token class-name">Aug</span> <span class="token number">09</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">46</span><span class="token operator">:</span><span class="token number">13</span> <span class="token constant">GMT</span><span class="token operator">+</span><span class="token number">08</span><span class="token operator">:</span><span class="token number">00</span> <span class="token number">2021</span></span>
<span class="line"><span class="token comment">// 这是美国表示时间的方法</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**GMT(**Greenwich Mean Time)是格林尼治标准时间 ，格林尼治标准时间的正午是指当太阳横穿格林尼治子午线时（也就是在格林尼治时）的时间。</p><p>+08:00 就是北京时间，这是时间区域的标示，用以区别时间，以英国格林威治标准时间为基准，台湾,香港,中国为往东8个时区。</p><h4 id="_2-构造方法" tabindex="-1"><a class="header-anchor" href="#_2-构造方法"><span>（2）构造方法</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建一个当时的时间对象，就是new的那一瞬间，精确到毫秒。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">long</span> date<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建一个时间对象，需要传入一个时间戳，代表时间戳表示的时间。</p><p>其实我们能看到，Date中的很多的构造器已经被启用了，只留下几个常用的。但是我们不能否认Date是十分常用的一个类。我会给大家介绍时间api的演进。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210809160955704.bdfc98cd.png" alt="image-20210809160955704"></p><h4 id="_3-常用方法" tabindex="-1"><a class="header-anchor" href="#_3-常用方法"><span>（3）常用方法</span></a></h4><p>测试此日期是否在指定日期之后</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">boolean after(Date when)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>测试此日期是否在指定日期之前</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">boolean before(Date when)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回自1970年1月1日以来，由此 Date对象表示的00:00:00 GMT的毫秒数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">getTime()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210809161151339.193d18f2.png" alt="image-20210809161151339"></p><p>其实我们要学习的最重要的是看文档的能力。</p><p>小作业（案例）：</p><p>仅仅使用Date类，计算七天后是哪一天：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token operator">*</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、calendar" tabindex="-1"><a class="header-anchor" href="#_2、calendar"><span>2、Calendar</span></a></h3><h4 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>（1）简介</span></a></h4><p>一个相对比较新的日期类，Calendar是一个抽象类，它本身就是日历的意思</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210809161855620.da6f5979.png" alt="image-20210809161855620"></p><h4 id="_2-初始化" tabindex="-1"><a class="header-anchor" href="#_2-初始化"><span>（2）初始化</span></a></h4><ul><li>Calendar类是一个日历抽象类，提供了一组对“年月日时分秒星期”等日期信息的操作的函数，并针对不同国家和地区的日历提供了相应的子类，即本地化。比如公历GregorianCalendar，佛历BuddhistCalendar，日本帝国历JapaneseImperialCalendar等。</li><li>从JDK1.1版本开始，在处理日期和时间时，系统推荐使用Calendar类进行实现(Date的一些方法都过时了)。在设计上，Calendar类的功能要比Date类强大很多，而且在实现方式上也比Date类要复杂一些，下面就介绍一下Calendar类的使用。</li></ul><p>我们看一下源代码：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> zone<span class="token punctuation">,</span></span>
<span class="line">                                       <span class="token class-name">Locale</span> aLocale<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> zone<span class="token punctuation">,</span></span>
<span class="line">                                           <span class="token class-name">Locale</span> aLocale<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">hasExtensions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">String</span> caltype <span class="token operator">=</span> aLocale<span class="token punctuation">.</span><span class="token function">getUnicodeLocaleType</span><span class="token punctuation">(</span><span class="token string">&quot;ca&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>caltype <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">switch</span> <span class="token punctuation">(</span>caltype<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">case</span> <span class="token string">&quot;buddhist&quot;</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">// BuddhistCalendar</span></span>
<span class="line">                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuddhistCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">case</span> <span class="token string">&quot;japanese&quot;</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">// 日本帝国历</span></span>
<span class="line">                    cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JapaneseImperialCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">case</span> <span class="token string">&quot;gregory&quot;</span><span class="token operator">:</span></span>
<span class="line">                        <span class="token comment">// 公历</span></span>
<span class="line">                    cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由以上代码我们也能知道，我们可以通过子类直接构造：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuddhistCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-常用的方法" tabindex="-1"><a class="header-anchor" href="#_3-常用的方法"><span>（3）常用的方法</span></a></h4><p>记住看文档，其实我们不妨也多去思考一下，日历有什么功能啊：</p><p>获得年、月、日？设置年、月、日？比较两个日期，看看星期几？其实这个类的方法特别多。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用来获取实例化的Calendar对象储存的“年月日时分秒星期”等等信息。方法的参数通过Calendar.XXXX的形式填写，比如要想获取年份信息就用Calendar.YEAR、月份Calendar.MONTH、日期Calendar.Date、时Calendar.HOUR、分Calendar.MINUTE、秒Calendar.SECOND等等。</p><p>其实参数就是一堆静态常量，1、2、3...</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210809173447284.e93bf840.png" alt="image-20210809173447284"></p><p>所以你使用<code>calendar.get(1)</code> 也是能够获取到年份的，我们这里就要体会了，静态常量能给我们带来什么好处，问你一下，这里把final去掉可以吗？</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">,</span> <span class="token keyword">int</span> month<span class="token punctuation">,</span> <span class="token keyword">int</span> date<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>set方法有很多重载的方法，从api文档中我们也能看明白。</p><p>具体的参数 field 就是上边的Calendar.YEAR、Calendar.MONTH....</p><p>当然Calendar有非常多的方法：</p><p>我们可以预览一下：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">,</span> <span class="token keyword">int</span> amount<span class="token punctuation">)</span></span>
<span class="line">根据日历的规则，将指定的时间量添加或减去给定的日历字段。</span>
<span class="line">    </span>
<span class="line"><span class="token function">after</span><span class="token punctuation">(</span><span class="token class-name">Object</span> when<span class="token punctuation">)</span></span>
<span class="line">返回 <span class="token class-name">Calendar</span>是否 <span class="token class-name">Calendar</span>指定时间之后的时间 <span class="token class-name">Object</span> 。</span>
<span class="line">    </span>
<span class="line"><span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">Object</span> when<span class="token punctuation">)</span></span>
<span class="line">返回此 <span class="token class-name">Calendar</span>是否 <span class="token class-name">Calendar</span>指定的时间之前指定的时间 <span class="token class-name">Object</span> 。</span>
<span class="line">    </span>
<span class="line"><span class="token class-name">Date</span>	<span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">返回一个 <span class="token class-name">Date</span>表示此物体 <span class="token class-name">Calendar</span>的时间值（毫秒从偏移 <span class="token class-name">Epoch</span> “）。</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">long</span>	<span class="token function">getTimeInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">以毫秒为单位返回此日历的时间值。</span>
<span class="line">    </span>
<span class="line"><span class="token class-name">TimeZone</span>	<span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">获取时区。</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">int</span>	<span class="token function">getWeeksInWeekYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">返回由这个 <span class="token class-name">Calendar</span>表示的星期内的星期 <span class="token class-name">Calendar</span> 。</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">int</span>	<span class="token function">getWeekYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">返回这个 <span class="token class-name">Calendar</span> 。</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">void</span>	<span class="token function">setTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span></span>
<span class="line">使用给定的 <span class="token class-name">Date</span>设置此日历的时间。</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">void</span>	<span class="token function">setTimeInMillis</span><span class="token punctuation">(</span><span class="token keyword">long</span> millis<span class="token punctuation">)</span></span>
<span class="line">从给定的长值设置此日历的当前时间。</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">void</span>	<span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> value<span class="token punctuation">)</span></span>
<span class="line">以给定的时区值设置时区。</span>
<span class="line">    </span>
<span class="line"><span class="token class-name">Instant</span>	<span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">将此对象转换为<span class="token class-name">Instant</span> 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小例子，显示1949年10月1号的时间戳！</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">long</span> timeInMillis <span class="token operator">=</span> calendar<span class="token punctuation">.</span><span class="token function">getTimeInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>timeInMillis<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">结果：<span class="token number">1572599846380</span>     </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、时区timezone" tabindex="-1"><a class="header-anchor" href="#_3、时区timezone"><span>3、时区TimeZone</span></a></h3><p>时区也是通过静态方法获取</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>util<span class="token punctuation">.</span>calendar<span class="token punctuation">.</span></span>ZoneInfo</span><span class="token punctuation">[</span>id<span class="token operator">=</span><span class="token string">&quot;GMT+08:00&quot;</span><span class="token punctuation">,</span>offset<span class="token operator">=</span><span class="token number">28800000</span><span class="token punctuation">,</span>dstSavings<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>useDaylight<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">,</span>transitions<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>lastRule<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>static String[]</th><th>getAvailableIDs()获取支持的所有可用ID。</th></tr></thead><tbody><tr><td>static String[]</td><td>getAvailableIDs(int rawOffset)根据给定的时区偏移（以毫秒为单位）获取可用ID。</td></tr><tr><td>static TimeZone</td><td>getDefault()获取Java虚拟机的默认值 <code>TimeZone</code> 。</td></tr><tr><td>static TimeZone</td><td>getTimeZone(String ID)获取给定ID的 <code>TimeZone</code> 。</td></tr><tr><td>static TimeZone</td><td>getTimeZone(ZoneId zoneId)获取 <code>TimeZone</code>对于给定 <code>zoneId</code> 。</td></tr><tr><td>static void</td><td>setDefault(TimeZone zone)设置 <code>TimeZone</code>由返回 <code>getDefault</code>方法。</td></tr></tbody></table><p>比如现在想获取美国的时间：</p><p>注：美国本土横跨西五区至西八区，共四个时区，每个时区对应一个标准时间。以华盛顿的西五区为例，西五区的id就是（GMT-05:00）；</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    calendar<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;GMT-08:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果：</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Mon Aug 09 18:20:12 GMT+08:00 2021</span>
<span class="line">5</span>
<span class="line">美国华盛顿的时间是5点，我们的是18点</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、zoneid" tabindex="-1"><a class="header-anchor" href="#_4、zoneid"><span>4、ZoneId</span></a></h3><p>ZoneId是指区域ID，可以这样表示 Europe/London Asia/Shanghai America/New_York Japan</p><p>也可以这样 GMT+8:00 也行</p><p>就是地区的表示方法</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">calendar<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;America/New_York&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">calendar<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;America/New_York&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calendar<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、simpledateformat" tabindex="-1"><a class="header-anchor" href="#_5、simpledateformat"><span>5、simpleDateFormat</span></a></h3><p>我们有这种需求，将时间显示成 1999年10月1号。</p><p>java给我们提供了时间的格式化器。</p><p>（2）构造方法</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用默认的模式和默认语言环境的日期格式符号构造 <code>SimpleDateFormat</code>。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SimpleDateFormat(String pattern); </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用给定的模式和日期符号构造 <code>SimpleDateFormat</code>。</p><p>以下示例显示了如何在美国语言环境中解释日期和时间模式。给定的日期和时间为美国太平洋时区的本地时间 2001-07-04 12:08:56。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210810184847979.f3620b55.png" alt="image-20210810184847979"></p><p>时间模式其实就是一种时间显示的格式：</p><p>从这张图中我们了解：</p><ul><li>yyyy 代表年 yy只显示后两位</li><li>MM 代表月</li><li>dd 代表日</li><li>HH代表小时 24小时制 hh 12小时</li><li>mm代表分钟</li><li>ss代表秒</li></ul><p>yyyy年MM月dd日 HH小时mm分ss秒 就是一种日期时间模式。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">SimpleDateFormat</span> simpleDateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy年MM月dd日  HH小时mm分ss秒&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">String</span> format <span class="token operator">=</span> simpleDateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">结果<span class="token operator">:</span><span class="token number">2021</span>年<span class="token number">08</span>月<span class="token number">10</span>日  <span class="token number">18</span>小时<span class="token number">51</span>分<span class="token number">54</span>秒</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）主要方法</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">applyPattern</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>给定的模式字符串应用于此日期格式。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">String</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将日期格式化成日期/时间字符串。–进行了重写</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Date</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">String</span> source<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>从给定字符串的开始解析文本以生成日期。–进行了重写</p><p>小案例，写一个工具类，能够将时间和字符优雅转化：</p><h2 id="三、jdk8的时间类" tabindex="-1"><a class="header-anchor" href="#三、jdk8的时间类"><span>三、jdk8的时间类</span></a></h2><p>在JDK8之前，处理日期时间，我们用的都是上边几个类，所谓百足之虫死而不僵，即使上边几个类的方法大面积过时，同时还存在一些问题，比如<code>SimpleDateFormat</code> 不是线程安全的，比如 <code>Date</code> 和 <code>Calendar</code> 获取到的月份是0到11，而不是现实生活中的1到12，我们还是能在绝大部分代码中看到它的影子。</p><p>阿里巴巴规约中这样说，如果是jdk8的应用，可以使用Instant代替date，LocalDateTime代替Canlendar，DateTimeFormatter代替SimpleDateFormat。</p><p>我们今天就从以下几个类讲讲新的时间类，主要是下面几个：</p><ol><li>Instant</li><li>LocalDate</li><li>LocalTime</li><li>LocalDateTime</li><li>DateTimeFormatter</li></ol><h3 id="_1、instant" tabindex="-1"><a class="header-anchor" href="#_1、instant"><span>1、Instant</span></a></h3><p>在时间线上的瞬间点。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210811142937519.30f3715f.png" alt="image-20210811142937519"></p><p>我们会发现，这货又将构造器私有化了。</p><h4 id="_1-构造一个instant" tabindex="-1"><a class="header-anchor" href="#_1-构造一个instant"><span>（1）构造一个Instant</span></a></h4><p>事实上它给我们提供了很多静态方法，方便我们使用：</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210811143150372.5e221071.png" alt="image-20210811143150372"></p><p>既然<code>Instant</code>可以代替<code>Date</code>类，那它肯定可以获取当前时间：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Instant instant = Instant.now();</span>
<span class="line">System.out.println(instant);</span>
<span class="line"></span>
<span class="line">2021-08-11T06:24:42.051Z</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>细心的你会发现，这个时间比北京时间少了8个小时，如果要输出北京时间，可以加上默认时区：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">System.out.println(instant.atZone(ZoneId.systemDefault()));</span>
<span class="line"></span>
<span class="line">2021-08-11T14:24:15.025+08:00[GMT+08:00]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-获取时间戳" tabindex="-1"><a class="header-anchor" href="#_2-获取时间戳"><span>（2）获取时间戳</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Instant instant = Instant.now();</span>
<span class="line"></span>
<span class="line">// 当前时间戳:单位为秒</span>
<span class="line">System.out.println(instant.getEpochSecond());</span>
<span class="line">// 当前时间戳:单位为毫秒</span>
<span class="line">System.out.println(instant.toEpochMilli());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，也可以通过<code>System.currentTimeMillis()</code>获取当前毫秒数。</p><h4 id="_3-将时间戳转换为instant" tabindex="-1"><a class="header-anchor" href="#_3-将时间戳转换为instant"><span>（3）将时间戳转换为Instant</span></a></h4><p>根据秒数时间戳转换：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Instant instant = Instant.now();</span>
<span class="line">System.out.println(instant);</span>
<span class="line"></span>
<span class="line">long epochSecond = instant.getEpochSecond();</span>
<span class="line">System.out.println(Instant.ofEpochSecond(epochSecond));</span>
<span class="line">System.out.println(Instant.ofEpochSecond(epochSecond, instant.getNano()));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据毫秒数时间戳转换：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Instant instant = Instant.now();</span>
<span class="line">System.out.println(instant);</span>
<span class="line"></span>
<span class="line">long epochMilli = instant.toEpochMilli();</span>
<span class="line">System.out.println(Instant.ofEpochMilli(epochMilli));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-将表达式转换为instant" tabindex="-1"><a class="header-anchor" href="#_4-将表达式转换为instant"><span>（4）将表达式转换为Instant</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">String text = &quot;2020-06-10T08:46:55.967Z&quot;;</span>
<span class="line">Instant parseInstant = Instant.parse(text);</span>
<span class="line">System.out.println(&quot;秒时间戳:&quot; + parseInstant.getEpochSecond());</span>
<span class="line">System.out.println(&quot;毫秒时间戳:&quot; + parseInstant.toEpochMilli());</span>
<span class="line">System.out.println(&quot;纳秒:&quot; + parseInstant.getNano());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instant给我们提供了非常多的实用的方法，我们要独自尝试。</p><h3 id="_2、duration" tabindex="-1"><a class="header-anchor" href="#_2、duration"><span>2、Duration</span></a></h3><p>Duration（持续时间）是TemporalAmount（时间量）的子类。</p><p>主要用在，instant的日期计算</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Instant</span> instant <span class="token operator">=</span> <span class="token class-name">Instant</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 当前的时间加五天</span></span>
<span class="line"><span class="token class-name">Instant</span> plus <span class="token operator">=</span> instant<span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofDays</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">ofInstant</span><span class="token punctuation">(</span>plus<span class="token punctuation">,</span><span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以轻易的通过of方法获取一段持续的时间，用来做计算。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofDays</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofHours</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMinutes</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofSeconds</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 次方法时通用的，第一个参数是数字，第二个是单位，ChronoUnit是一个枚举类，就是枚举了一堆的时间单位：年月日时分秒。</span></span>
<span class="line"><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">ChronoUnit</span><span class="token punctuation">.</span><span class="token constant">YEARS</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、localdate" tabindex="-1"><a class="header-anchor" href="#_3、localdate"><span>3、LocalDate</span></a></h3><h4 id="_1-获取当前日期" tabindex="-1"><a class="header-anchor" href="#_1-获取当前日期"><span>（1）获取当前日期</span></a></h4><p>使用<code>LocalDate</code>获取当前日期非常简单，如下所示：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;LocalDate.now() = &quot;</span> <span class="token operator">+</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2021</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">11</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不用任何格式化，输出结果就非常友好，如果使用<code>Date</code>，输出这样的格式，还得配合<code>SimpleDateFormat</code>指定<code>yyyy-MM-dd</code>进行格式化。</p><h4 id="_2-获取年月日" tabindex="-1"><a class="header-anchor" href="#_2-获取年月日"><span>（2）获取年月日</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;today.getYear() = &quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;today.getDayOfWeek() = &quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;today.getMonth() = &quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">today<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2021</span></span>
<span class="line">today<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token constant">WEDNESDAY</span></span>
<span class="line">today<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token constant">AUGUST</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Month month = today.getMonth();</span>
<span class="line">System.out.println(month.getValue());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现Month是一个枚举类，而且LocalDate的月份居然是从1开始的，从此月份的困扰就解决了。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210811144447836.2b0a92a0.png" alt="image-20210811144447836"></p><h4 id="_3-指定日期" tabindex="-1"><a class="header-anchor" href="#_3-指定日期"><span>（3）指定日期</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDate</span> birthday <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1991</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;birthday: &quot;</span> <span class="token operator">+</span> birthday<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote><p>如果确定月份，推荐使用另一个重载方法，使用枚举指定月份：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LocalDate specifiedDate = LocalDate.of(1991, Month.JULY, 16);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_4-比较日期是否相等" tabindex="-1"><a class="header-anchor" href="#_4-比较日期是否相等"><span>（4）比较日期是否相等</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDate</span> localDate1 <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">LocalDate</span> localDate2 <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1991</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>localDate1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>localDate2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;localDate1 equals localDate2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-获取日期是本周-本月-本年的第几天" tabindex="-1"><a class="header-anchor" href="#_5-获取日期是本周-本月-本年的第几天"><span>（5）获取日期是本周/本月/本年的第几天</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Today:&quot;</span> <span class="token operator">+</span> today<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Today is:&quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天是本周的第&quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;天&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天是本月的第&quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;天&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天是本年的第&quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;天&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-判断是否为闰年" tabindex="-1"><a class="header-anchor" href="#_6-判断是否为闰年"><span>（6）判断是否为闰年</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; is leap year:&quot;</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">isLeapYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、localtime" tabindex="-1"><a class="header-anchor" href="#_4、localtime"><span>4、LocalTime</span></a></h3><p>见名知意，上一个是本地日期，而这里是本地时间。</p><h3 id="_5、localdatetime" tabindex="-1"><a class="header-anchor" href="#_5、localdatetime"><span>5、LocalDateTime</span></a></h3><p>见名知意，自学吧，都一样。</p><h3 id="_6、datetimeformatter" tabindex="-1"><a class="header-anchor" href="#_6、datetimeformatter"><span>6、DateTimeFormatter</span></a></h3><p>JDK8中推出了<code>java.time.format.DateTimeFormatter</code>来处理日期格式化问题，《阿里巴巴Java开发手册》中也是建议使用<code>DateTimeFormatter</code>代替<code>SimpleDateFormat</code>，因为SimpleDateFormate不是线程安全的。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">DateTimeFormatter</span> dateTimeFormatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy年MM月dd日&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">String</span> format <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>dateTimeFormatter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2021</span>年<span class="token number">08</span>月<span class="token number">11</span>日</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LocalTime和 LocalDateTime自行脑补，DateTimeFormatter同时给我们提供了很多国际时间格式化的规则，自己看看就行了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LocalDateTime today = LocalDateTime.now();</span>
<span class="line">DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_DATE_TIME;</span>
<span class="line"></span>
<span class="line">String format = today.format(dateTimeFormatter);</span>
<span class="line">System.out.println(format);</span>
<span class="line"></span>
<span class="line">2021-08-11T14:55:08.259</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-类型相互转换" tabindex="-1"><a class="header-anchor" href="#_7-类型相互转换"><span>7. 类型相互转换</span></a></h3><h4 id="_1-instant和date" tabindex="-1"><a class="header-anchor" href="#_1-instant和date"><span>（1）Instant和Date</span></a></h4><p>JDK8中，<code>Date</code>新增了<code>from()</code>方法，将<code>Instant</code>转换为<code>Date</code>，代码如下所示：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>instant<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Instant</span> dateToInstant <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-instance和localdatetime" tabindex="-1"><a class="header-anchor" href="#_2-instance和localdatetime"><span>（2）Instance和LocalDateTime</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDateTime</span> localDateTime <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">ofInstant</span><span class="token punctuation">(</span>instant<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Instant instant1 = LocalDateTime.now().toInstant(ZoneOffset.UTC);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_3-date和localdatetime" tabindex="-1"><a class="header-anchor" href="#_3-date和localdatetime"><span>（3）Date和LocalDateTime</span></a></h4><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Instant</span> instant <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">LocalDateTime</span> localDateTimeOfInstant <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">ofInstant</span><span class="token punctuation">(</span>instant<span class="token punctuation">,</span> <span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">LocalDateTime</span> localDateTime <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Instant</span> toInstant <span class="token operator">=</span> localDateTime<span class="token punctuation">.</span><span class="token function">atZone</span><span class="token punctuation">(</span><span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Date</span> dateFromInstant <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>toInstant<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、数学类" tabindex="-1"><a class="header-anchor" href="#四、数学类"><span>四、数学类</span></a></h2><h3 id="_1、math" tabindex="-1"><a class="header-anchor" href="#_1、math"><span>1、Math</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math<span class="token punctuation">.</span>E</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//比任何其他值都更接近 e（即自然对数的底数）的 double 值。</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//比任何其他值都更接近 pi（即圆的周长与直径之比）的 double 值。</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1.9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出-0.2</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出[0,100)间的随机数</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//ceil(a) 返回大于a的第一个整数所对应的浮点数(值是整的，类型是浮点型)</span></span>
<span class="line"><span class="token comment">//可以通过强制转换将类型换成整型</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">1.3443</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2.0</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">1.3443</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//floor(a) 返回小于a的第一个整数所对应的浮点数(值是整的，类型是浮点型)</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">1.3443</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出1.0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//rint(a) 返回最接近a的整数的double值</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">rint</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出1.0</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">rint</span><span class="token punctuation">(</span><span class="token number">1.8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2.0</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">4.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2.0</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">8.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出2.0</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出10</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个类其实超级简单但是不用背诵啊，只要我们能想到的和数学有关系的代码，我们都可以在Math中找一找，说不定就会有收获啊。</p><h3 id="_2、bigdecimal" tabindex="-1"><a class="header-anchor" href="#_2、bigdecimal"><span>2、BigDecimal</span></a></h3><h4 id="_1-为什么不能用double表示钱" tabindex="-1"><a class="header-anchor" href="#_1-为什么不能用double表示钱"><span>（1）为什么不能用double表示钱</span></a></h4><p>因为浮点数不能准确代表我们用于货币的基数10的倍数。这个问题不仅仅针对Java，而且还针对任何使用base 2浮点类型的编程语言。适用于几乎所有语言的解决方案是改用整数，然后计算分。例如，1025为$ 10.25。</p><ul><li>举一个例子：钱，我们有一百块 五十块 十块 五块 一块 一毛 五毛 一分 ，不知道你见过两分没？</li><li>大于零的无所谓，但是一毛钱也就是0.1元，二进制是无法表示的，两毛也是，五毛倒是可以，一分又不行了。 至于为什么，我们之前讲浮点数的时候讲过。</li></ul><p>在商业计算中要用java.math.BigDecimal。BigDecimal所创建的是对象，我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。</p><p>十进制整数在转化成二进制数时不会有精度问题，那么把十进制小数扩大N倍让它在整数的维度上进行计算，并保留相应的精度信息。所以本质是记录一个精度信息，使用正数进行计算，然后再转化为二进制数。</p><h4 id="_2-构造器" tabindex="-1"><a class="header-anchor" href="#_2-构造器"><span>（2）构造器</span></a></h4><p>BigDecimal 有很多重载的构造器，我们几乎可以将任何数字相关的类型转化为一个BigDecimal 对象。</p><table><thead><tr><th>构造器</th><th></th></tr></thead><tbody><tr><td>BigDecimal(int)</td><td>创建一个具有参数所指定整数值的对象。</td></tr><tr><td>BigDecimal(double)</td><td>创建一个具有参数所指定双精度值的对象。</td></tr><tr><td>BigDecimal(long)</td><td>创建一个具有参数所指定长整数值的对象。</td></tr><tr><td>BigDecimal(String)</td><td>创建一个具有参数所指定以字符串表示的数值的对象。</td></tr></tbody></table><h4 id="_3-常用方法-1" tabindex="-1"><a class="header-anchor" href="#_3-常用方法-1"><span>（3）常用方法</span></a></h4><p>BigDecimal提供了大量的计算方法，我们举几个例子</p><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>BigDecimal</td><td>add(BigDecimal)</td><td>BigDecimal对象中的值相加，然后返回这个对象。</td></tr><tr><td>BigDecimal</td><td>subtract(BigDecimal)</td><td>BigDecimal对象中的值相减，然后返回这个对象。</td></tr><tr><td>BigDecimal</td><td>multiply(BigDecimal)</td><td>BigDecimal对象中的值相乘，然后返回这个对象。</td></tr><tr><td>BigDecimal</td><td>divide(BigDecimal)</td><td>BigDecimal对象中的值相除，然后返回这个对象。</td></tr><tr><td>BigDecimal</td><td><strong><a href="https://www.matools.com/file/manual/jdk_api_1.8_google/java/math/BigDecimal.html#max-java.math.BigDecimal-" target="_blank" rel="noopener noreferrer">maxopen in new window</a></strong>(<a href="https://www.matools.com/file/manual/jdk_api_1.8_google/java/math/BigDecimal.html" target="_blank" rel="noopener noreferrer">BigDecimalopen in new window</a> val)</td><td></td></tr><tr><td>BigDecimal</td><td>min(BigDecimal val)</td><td></td></tr></tbody></table><p>我们可以从BigDecimal中获取对应的值：</p><table><thead><tr><th>返回值</th><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>double</td><td>doubleValue()</td><td>将BigDecimal对象中的值以双精度数返回</td></tr><tr><td>float</td><td>floatValue()</td><td>将BigDecimal对象中的值以单精度数返回</td></tr><tr><td>long</td><td>longValue()</td><td>将BigDecimal对象中的值以长整数返回</td></tr><tr><td>int</td><td>intValue()</td><td>将BigDecimal对象中的值以整数返回</td></tr></tbody></table><h3 id="_3、random类" tabindex="-1"><a class="header-anchor" href="#_3、random类"><span>3、Random类</span></a></h3><p>Random类位于java.util.Random包下，是产生随机数的类。</p><p>当然 Math类的Random方法可以生成随机数</p><p>https://blog.csdn.net/weixin_37730482/article/details/80664928</p><h4 id="_1-构造方法" tabindex="-1"><a class="header-anchor" href="#_1-构造方法"><span>（1）构造方法</span></a></h4><p>1.Random()：创建一个新的随机数生成器。</p><p>2.Random(long seed)：使用单个 long 种子创建一个新的随机数生成器。</p><p>我们可以在构造Random对象的时候指定种子。如：Random r1 = new Random(20);</p><p>也可以默认当前系统时间的毫秒数作为种子数:Random r1 = new Random();</p><h4 id="_2-常用方法" tabindex="-1"><a class="header-anchor" href="#_2-常用方法"><span>（2）常用方法</span></a></h4><p>1.protected int next(int bits)：生成下一个伪随机数。</p><p>2.boolean nextBoolean()：返回下一个伪随机数，它是取自此随机数生成器序列的均匀分布的boolean值。</p><p>3.void nextBytes(byte[] bytes)：生成随机字节并将其置于用户提供的 byte 数组中。</p><p>4.double nextDouble()：返回下一个伪随机数，它是取自此随机数生成器序列的、在0.0和1.0之间均匀分布的 double值。</p><p>5.float nextFloat()：返回下一个伪随机数，它是取自此随机数生成器序列的、在0.0和1.0之间均匀分布float值。</p><p>6.double nextGaussian()：返回下一个伪随机数，它是取自此随机数生成器序列的、呈高斯（“正态”）分布的double值，其平均值是0.0 标准差是1.0。</p><p>7.int nextInt()：返回下一个伪随机数，它是此随机数生成器的序列中均匀分布的 int 值。</p><p>8.int nextInt(int n)：返回一个伪随机数，它是取自此随机数生成器序列的、在（包括和指定值（不包括）之间均匀分布的int值。</p><p>9.long nextLong()：返回下一个伪随机数，它是取自此随机数生成器序列的均匀分布的 long 值。</p><h2 id="五、工具类" tabindex="-1"><a class="header-anchor" href="#五、工具类"><span>五、工具类</span></a></h2><h3 id="_1、arrays" tabindex="-1"><a class="header-anchor" href="#_1、arrays"><span>1、Arrays</span></a></h3><p>该类包含用于操作数组的各种方法（如排序和搜索）。 该类还包含一个静态工厂，可以将数组视为列表。</p><p>包含了大量的关于数组的工具方法，比如数组拷贝，排序，二分查找等。其实，这里边的每一个方法，我们都能自己实现。</p><h3 id="_1-更友好的显示数组" tabindex="-1"><a class="header-anchor" href="#_1-更友好的显示数组"><span>（1）更友好的显示数组</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span></span>
<span class="line">否则就是：<span class="token class-name">I</span><span class="token annotation punctuation">@1b6d3586</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-排序" tabindex="-1"><a class="header-anchor" href="#_2-排序"><span>（2）排序</span></a></h3><p>这里的排序算法要远远的胜过我们写的</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">parallelSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-二分查找" tabindex="-1"><a class="header-anchor" href="#_3-二分查找"><span>（3）二分查找</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">int[] nums = {1, 2, 3, 5, 6, 9};</span>
<span class="line">int i = Arrays.binarySearch(nums, 5);</span>
<span class="line">System.out.println(i);</span>
<span class="line"></span>
<span class="line">结果：3   这是下标</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-数组拷贝" tabindex="-1"><a class="header-anchor" href="#_4-数组拷贝"><span>（4）数组拷贝</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> newLength<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">int[] nums = {1, 2, 3, 5, 6, 9};</span>
<span class="line">nums = Arrays.copyOf(nums,10);</span>
<span class="line">System.out.println(Arrays.toString(nums));</span>
<span class="line"></span>
<span class="line">结果：[1, 2, 3, 5, 6, 9, 0, 0, 0, 0]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">copyOfRange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> from<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token keyword">to</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">nums <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">结果：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-两个数组的比较" tabindex="-1"><a class="header-anchor" href="#_5-两个数组的比较"><span>（5）两个数组的比较</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>nums2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">结果：<span class="token boolean">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其余的方法，可以自行研究。</p><h3 id="_2、system类" tabindex="-1"><a class="header-anchor" href="#_2、system类"><span>2、System类</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">  <span class="token comment">//用于垃圾回收</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">//终止正在运行的java虚拟机。参数用作状态码，根据惯例，非0表示异常终止</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exit</span><span class="token punctuation">(</span><span class="token keyword">int</span> status<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">//System.out.println(System.currentTimeMillis());</span></span>
<span class="line">  <span class="token comment">//返回从1970年1月1日到现在时间的毫秒数（协调时间）</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">native</span> <span class="token keyword">long</span> <span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">native</span> <span class="token keyword">long</span> <span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">arraycopy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> src<span class="token punctuation">,</span> <span class="token keyword">int</span> srcPos<span class="token punctuation">,</span> <span class="token class-name">Object</span> dest<span class="token punctuation">,</span> <span class="token keyword">int</span> destPos<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">//src - 源数组。 </span></span>
<span class="line">  <span class="token comment">//srcPos - 源数组中的起始位置。 </span></span>
<span class="line">  <span class="token comment">//dest - 目标数组。 </span></span>
<span class="line">  <span class="token comment">//destPos - 目的地数据中的起始位置。 </span></span>
<span class="line">  <span class="token comment">//length - 要复制的数组元素的数量。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、objects" tabindex="-1"><a class="header-anchor" href="#_3、objects"><span>3、Objects</span></a></h3><p>这个咱们看一看，一起读文档学习一下。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">private static Properties props;</span>
<span class="line">    private static native Properties initProperties(Properties props);</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * Determines the current system properties.</span>
<span class="line">     * &lt;p&gt;</span>
<span class="line">     * First, if there is a security manager, its</span>
<span class="line">     * &lt;code&gt;checkPropertiesAccess&lt;/code&gt; method is called with no</span>
<span class="line">     * arguments. This may result in a security exception.</span>
<span class="line">     * &lt;p&gt;</span>
<span class="line">     * The current set of system properties for use by the</span>
<span class="line">     * {@link #getProperty(String)} method is returned as a</span>
<span class="line">     * &lt;code&gt;Properties&lt;/code&gt; object. If there is no current set of</span>
<span class="line">     * system properties, a set of system properties is first created and</span>
<span class="line">     * initialized. This set of system properties always includes values</span>
<span class="line">     * for the following keys:</span>
<span class="line">     * &lt;table summary=&quot;Shows property keys and associated values&quot;&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;th&gt;Key&lt;/th&gt;</span>
<span class="line">     *     &lt;th&gt;Description of Associated Value&lt;/th&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.version&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Runtime Environment version&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vendor&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Runtime Environment vendor&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vendor.url&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java vendor URL&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.home&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java installation directory&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vm.specification.version&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Virtual Machine specification version&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vm.specification.vendor&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Virtual Machine specification vendor&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vm.specification.name&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Virtual Machine specification name&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vm.version&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Virtual Machine implementation version&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vm.vendor&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Virtual Machine implementation vendor&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.vm.name&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Virtual Machine implementation name&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.specification.version&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Runtime Environment specification  version&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.specification.vendor&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Runtime Environment specification  vendor&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.specification.name&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java Runtime Environment specification  name&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.class.version&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java class format version number&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.class.path&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Java class path&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.library.path&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;List of paths to search when loading libraries&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.io.tmpdir&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Default temp file path&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.compiler&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Name of JIT compiler to use&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;java.ext.dirs&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Path of extension directory or directories</span>
<span class="line">     *         &lt;b&gt;Deprecated.&lt;/b&gt; &lt;i&gt;This property, and the mechanism</span>
<span class="line">     *            which implements it, may be removed in a future</span>
<span class="line">     *            release.&lt;/i&gt; &lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;os.name&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Operating system name&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;os.arch&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Operating system architecture&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;os.version&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Operating system version&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;file.separator&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;File separator (&quot;/&quot; on UNIX)&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;path.separator&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Path separator (&quot;:&quot; on UNIX)&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;line.separator&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;Line separator (&quot;\\n&quot; on UNIX)&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;user.name&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;User&#39;s account name&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;user.home&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;User&#39;s home directory&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;tr&gt;&lt;td&gt;&lt;code&gt;user.dir&lt;/code&gt;&lt;/td&gt;</span>
<span class="line">     *     &lt;td&gt;User&#39;s current working directory&lt;/td&gt;&lt;/tr&gt;</span>
<span class="line">     * &lt;/table&gt;</span>
<span class="line">     * &lt;p&gt;</span>
<span class="line">     * Multiple paths in a system property value are separated by the path</span>
<span class="line">     * separator character of the platform.</span>
<span class="line">     * &lt;p&gt;</span>
<span class="line">     * Note that even if the security manager does not permit the</span>
<span class="line">     * &lt;code&gt;getProperties&lt;/code&gt; operation, it may choose to permit the</span>
<span class="line">     * {@link #getProperty(String)} operation.</span>
<span class="line">     *</span>
<span class="line">     * @return     the system properties</span>
<span class="line">     * @exception  SecurityException  if a security manager exists and its</span>
<span class="line">     *             &lt;code&gt;checkPropertiesAccess&lt;/code&gt; method doesn&#39;t allow access</span>
<span class="line">     *              to the system properties.</span>
<span class="line">     * @see        #setProperties</span>
<span class="line">     * @see        java.lang.SecurityException</span>
<span class="line">     * @see        java.lang.SecurityManager#checkPropertiesAccess()</span>
<span class="line">     * @see        java.util.Properties</span>
<span class="line">     */</span>
<span class="line">    public static Properties getProperties() {</span>
<span class="line">        SecurityManager sm = getSecurityManager();</span>
<span class="line">        if (sm != null) {</span>
<span class="line">            sm.checkPropertiesAccess();</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return props;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、其他" tabindex="-1"><a class="header-anchor" href="#六、其他"><span>六、其他</span></a></h2><h3 id="_1、stringbuffer和stringbuilder" tabindex="-1"><a class="header-anchor" href="#_1、stringbuffer和stringbuilder"><span>1、StringBuffer和StringBuilder</span></a></h3><p>可变的字符序列，这个String是有本质的区别的</p><p>StringBuffer：可变字符串、效率低、线程安全</p><p>StringBuilder：可变字符序列、效率高、线程不安全</p><table><thead><tr><th>构造器说明</th></tr></thead><tbody><tr><td>StringBuilder() 构造一个没有字符的字符串构建器，初始容量为16个字符。</td></tr><tr><td>StringBuilder(CharSequence seq) 构造一个包含与指定的相同字符的字符串构建器 <code>CharSequence</code> 。</td></tr><tr><td>StringBuilder(int capacity) 构造一个没有字符的字符串构建器，由 <code>capacity</code>参数指 定的初始容量</td></tr><tr><td>StringBuilder(String str) 构造一个初始化为指定字符串内容的字符串构建器。</td></tr></tbody></table><p>首先这两个类有大量的重载方法，一个是append</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210811152631410.afa9a0bc.png" alt="image-20210811152631410"></p><p>还有insert</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210811152653212.e3ff61b9.png" alt="image-20210811152653212"></p><p>和String一样，它还有一些好用的方法：</p><table><thead><tr><th>返回值</th><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>String</td><td>substring(int start)</td><td>截取指定位置开始到最后的字符串</td></tr><tr><td>String</td><td>substring(int start, int end)</td><td>截取字符串</td></tr><tr><td>StringBuilder</td><td>reverse() 。</td><td>字符序列反转</td></tr><tr><td>int</td><td>lastIndexOf(String str)</td><td>返回指定子字符串最右边出现的字符串内的索引</td></tr><tr><td>StringBuilder</td><td>delete(int start, int end)</td><td>删除此序列的子字符串中的字符。</td></tr><tr><td>StringBuilder</td><td>deleteCharAt(int index)</td><td>删除 char在这个序列中的指定位置。</td></tr><tr><td>String</td><td>toString()</td><td>转为String</td></tr></tbody></table><h2 id="七、附表" tabindex="-1"><a class="header-anchor" href="#七、附表"><span>七、附表</span></a></h2><p>可用的ZoneId</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Asia/Aden</span>
<span class="line">America/Cuiaba</span>
<span class="line">Etc/GMT+9</span>
<span class="line">Etc/GMT+8</span>
<span class="line">Africa/Nairobi</span>
<span class="line">America/Marigot</span>
<span class="line">Asia/Aqtau</span>
<span class="line">Pacific/Kwajalein</span>
<span class="line">America/El_Salvador</span>
<span class="line">Asia/Pontianak</span>
<span class="line">Africa/Cairo</span>
<span class="line">Pacific/Pago_Pago</span>
<span class="line">Africa/Mbabane</span>
<span class="line">Asia/Kuching</span>
<span class="line">Pacific/Honolulu</span>
<span class="line">Pacific/Rarotonga</span>
<span class="line">America/Guatemala</span>
<span class="line">Australia/Hobart</span>
<span class="line">Europe/London</span>
<span class="line">America/Belize</span>
<span class="line">America/Panama</span>
<span class="line">Asia/Chungking</span>
<span class="line">America/Managua</span>
<span class="line">America/Indiana/Petersburg</span>
<span class="line">Asia/Yerevan</span>
<span class="line">Europe/Brussels</span>
<span class="line">GMT</span>
<span class="line">Europe/Warsaw</span>
<span class="line">America/Chicago</span>
<span class="line">Asia/Kashgar</span>
<span class="line">Chile/Continental</span>
<span class="line">Pacific/Yap</span>
<span class="line">CET</span>
<span class="line">Etc/GMT-1</span>
<span class="line">Etc/GMT-0</span>
<span class="line">Europe/Jersey</span>
<span class="line">America/Tegucigalpa</span>
<span class="line">Etc/GMT-5</span>
<span class="line">Europe/Istanbul</span>
<span class="line">America/Eirunepe</span>
<span class="line">Etc/GMT-4</span>
<span class="line">America/Miquelon</span>
<span class="line">Etc/GMT-3</span>
<span class="line">Europe/Luxembourg</span>
<span class="line">Etc/GMT-2</span>
<span class="line">Etc/GMT-9</span>
<span class="line">America/Argentina/Catamarca</span>
<span class="line">Etc/GMT-8</span>
<span class="line">Etc/GMT-7</span>
<span class="line">Etc/GMT-6</span>
<span class="line">Europe/Zaporozhye</span>
<span class="line">Canada/Yukon</span>
<span class="line">Canada/Atlantic</span>
<span class="line">Atlantic/St_Helena</span>
<span class="line">Australia/Tasmania</span>
<span class="line">Libya</span>
<span class="line">Europe/Guernsey</span>
<span class="line">America/Grand_Turk</span>
<span class="line">US/Pacific-New</span>
<span class="line">Asia/Samarkand</span>
<span class="line">America/Argentina/Cordoba</span>
<span class="line">Asia/Phnom_Penh</span>
<span class="line">Africa/Kigali</span>
<span class="line">Asia/Almaty</span>
<span class="line">US/Alaska</span>
<span class="line">Asia/Dubai</span>
<span class="line">Europe/Isle_of_Man</span>
<span class="line">America/Araguaina</span>
<span class="line">Cuba</span>
<span class="line">Asia/Novosibirsk</span>
<span class="line">America/Argentina/Salta</span>
<span class="line">Etc/GMT+3</span>
<span class="line">Africa/Tunis</span>
<span class="line">Etc/GMT+2</span>
<span class="line">Etc/GMT+1</span>
<span class="line">Pacific/Fakaofo</span>
<span class="line">Africa/Tripoli</span>
<span class="line">Etc/GMT+0</span>
<span class="line">Israel</span>
<span class="line">Africa/Banjul</span>
<span class="line">Etc/GMT+7</span>
<span class="line">Indian/Comoro</span>
<span class="line">Etc/GMT+6</span>
<span class="line">Etc/GMT+5</span>
<span class="line">Etc/GMT+4</span>
<span class="line">Pacific/Port_Moresby</span>
<span class="line">US/Arizona</span>
<span class="line">Antarctica/Syowa</span>
<span class="line">Indian/Reunion</span>
<span class="line">Pacific/Palau</span>
<span class="line">Europe/Kaliningrad</span>
<span class="line">America/Montevideo</span>
<span class="line">Africa/Windhoek</span>
<span class="line">Asia/Karachi</span>
<span class="line">Africa/Mogadishu</span>
<span class="line">Australia/Perth</span>
<span class="line">Brazil/East</span>
<span class="line">Etc/GMT</span>
<span class="line">Asia/Chita</span>
<span class="line">Pacific/Easter</span>
<span class="line">Antarctica/Davis</span>
<span class="line">Antarctica/McMurdo</span>
<span class="line">Asia/Macao</span>
<span class="line">America/Manaus</span>
<span class="line">Africa/Freetown</span>
<span class="line">Europe/Bucharest</span>
<span class="line">Asia/Tomsk</span>
<span class="line">America/Argentina/Mendoza</span>
<span class="line">Asia/Macau</span>
<span class="line">Europe/Malta</span>
<span class="line">Mexico/BajaSur</span>
<span class="line">Pacific/Tahiti</span>
<span class="line">Africa/Asmera</span>
<span class="line">Europe/Busingen</span>
<span class="line">America/Argentina/Rio_Gallegos</span>
<span class="line">Africa/Malabo</span>
<span class="line">Europe/Skopje</span>
<span class="line">America/Catamarca</span>
<span class="line">America/Godthab</span>
<span class="line">Europe/Sarajevo</span>
<span class="line">Australia/ACT</span>
<span class="line">GB-Eire</span>
<span class="line">Africa/Lagos</span>
<span class="line">America/Cordoba</span>
<span class="line">Europe/Rome</span>
<span class="line">Asia/Dacca</span>
<span class="line">Indian/Mauritius</span>
<span class="line">Pacific/Samoa</span>
<span class="line">America/Regina</span>
<span class="line">America/Fort_Wayne</span>
<span class="line">America/Dawson_Creek</span>
<span class="line">Africa/Algiers</span>
<span class="line">Europe/Mariehamn</span>
<span class="line">America/St_Johns</span>
<span class="line">America/St_Thomas</span>
<span class="line">Europe/Zurich</span>
<span class="line">America/Anguilla</span>
<span class="line">Asia/Dili</span>
<span class="line">America/Denver</span>
<span class="line">Africa/Bamako</span>
<span class="line">Europe/Saratov</span>
<span class="line">GB</span>
<span class="line">Mexico/General</span>
<span class="line">Pacific/Wallis</span>
<span class="line">Europe/Gibraltar</span>
<span class="line">Africa/Conakry</span>
<span class="line">Africa/Lubumbashi</span>
<span class="line">Asia/Istanbul</span>
<span class="line">America/Havana</span>
<span class="line">NZ-CHAT</span>
<span class="line">Asia/Choibalsan</span>
<span class="line">America/Porto_Acre</span>
<span class="line">Asia/Omsk</span>
<span class="line">Europe/Vaduz</span>
<span class="line">US/Michigan</span>
<span class="line">Asia/Dhaka</span>
<span class="line">America/Barbados</span>
<span class="line">Europe/Tiraspol</span>
<span class="line">Atlantic/Cape_Verde</span>
<span class="line">Asia/Yekaterinburg</span>
<span class="line">America/Louisville</span>
<span class="line">Pacific/Johnston</span>
<span class="line">Pacific/Chatham</span>
<span class="line">Europe/Ljubljana</span>
<span class="line">America/Sao_Paulo</span>
<span class="line">Asia/Jayapura</span>
<span class="line">America/Curacao</span>
<span class="line">Asia/Dushanbe</span>
<span class="line">America/Guyana</span>
<span class="line">America/Guayaquil</span>
<span class="line">America/Martinique</span>
<span class="line">Portugal</span>
<span class="line">Europe/Berlin</span>
<span class="line">Europe/Moscow</span>
<span class="line">Europe/Chisinau</span>
<span class="line">America/Puerto_Rico</span>
<span class="line">America/Rankin_Inlet</span>
<span class="line">Pacific/Ponape</span>
<span class="line">Europe/Stockholm</span>
<span class="line">Europe/Budapest</span>
<span class="line">America/Argentina/Jujuy</span>
<span class="line">Australia/Eucla</span>
<span class="line">Asia/Shanghai</span>
<span class="line">Universal</span>
<span class="line">Europe/Zagreb</span>
<span class="line">America/Port_of_Spain</span>
<span class="line">Europe/Helsinki</span>
<span class="line">Asia/Beirut</span>
<span class="line">Asia/Tel_Aviv</span>
<span class="line">Pacific/Bougainville</span>
<span class="line">US/Central</span>
<span class="line">Africa/Sao_Tome</span>
<span class="line">Indian/Chagos</span>
<span class="line">America/Cayenne</span>
<span class="line">Asia/Yakutsk</span>
<span class="line">Pacific/Galapagos</span>
<span class="line">Australia/North</span>
<span class="line">Europe/Paris</span>
<span class="line">Africa/Ndjamena</span>
<span class="line">Pacific/Fiji</span>
<span class="line">America/Rainy_River</span>
<span class="line">Indian/Maldives</span>
<span class="line">Australia/Yancowinna</span>
<span class="line">SystemV/AST4</span>
<span class="line">Asia/Oral</span>
<span class="line">America/Yellowknife</span>
<span class="line">Pacific/Enderbury</span>
<span class="line">America/Juneau</span>
<span class="line">Australia/Victoria</span>
<span class="line">America/Indiana/Vevay</span>
<span class="line">Asia/Tashkent</span>
<span class="line">Asia/Jakarta</span>
<span class="line">Africa/Ceuta</span>
<span class="line">Asia/Barnaul</span>
<span class="line">America/Recife</span>
<span class="line">America/Buenos_Aires</span>
<span class="line">America/Noronha</span>
<span class="line">America/Swift_Current</span>
<span class="line">Australia/Adelaide</span>
<span class="line">America/Metlakatla</span>
<span class="line">Africa/Djibouti</span>
<span class="line">America/Paramaribo</span>
<span class="line">Europe/Simferopol</span>
<span class="line">Europe/Sofia</span>
<span class="line">Africa/Nouakchott</span>
<span class="line">Europe/Prague</span>
<span class="line">America/Indiana/Vincennes</span>
<span class="line">Antarctica/Mawson</span>
<span class="line">America/Kralendijk</span>
<span class="line">Antarctica/Troll</span>
<span class="line">Europe/Samara</span>
<span class="line">Indian/Christmas</span>
<span class="line">America/Antigua</span>
<span class="line">Pacific/Gambier</span>
<span class="line">America/Indianapolis</span>
<span class="line">America/Inuvik</span>
<span class="line">America/Iqaluit</span>
<span class="line">Pacific/Funafuti</span>
<span class="line">UTC</span>
<span class="line">Antarctica/Macquarie</span>
<span class="line">Canada/Pacific</span>
<span class="line">America/Moncton</span>
<span class="line">Africa/Gaborone</span>
<span class="line">Pacific/Chuuk</span>
<span class="line">Asia/Pyongyang</span>
<span class="line">America/St_Vincent</span>
<span class="line">Asia/Gaza</span>
<span class="line">Etc/Universal</span>
<span class="line">PST8PDT</span>
<span class="line">Atlantic/Faeroe</span>
<span class="line">Asia/Qyzylorda</span>
<span class="line">Canada/Newfoundland</span>
<span class="line">America/Kentucky/Louisville</span>
<span class="line">America/Yakutat</span>
<span class="line">Asia/Ho_Chi_Minh</span>
<span class="line">Antarctica/Casey</span>
<span class="line">Europe/Copenhagen</span>
<span class="line">Africa/Asmara</span>
<span class="line">Atlantic/Azores</span>
<span class="line">Europe/Vienna</span>
<span class="line">ROK</span>
<span class="line">Pacific/Pitcairn</span>
<span class="line">America/Mazatlan</span>
<span class="line">Australia/Queensland</span>
<span class="line">Pacific/Nauru</span>
<span class="line">Europe/Tirane</span>
<span class="line">Asia/Kolkata</span>
<span class="line">SystemV/MST7</span>
<span class="line">Australia/Canberra</span>
<span class="line">MET</span>
<span class="line">Australia/Broken_Hill</span>
<span class="line">Europe/Riga</span>
<span class="line">America/Dominica</span>
<span class="line">Africa/Abidjan</span>
<span class="line">America/Mendoza</span>
<span class="line">America/Santarem</span>
<span class="line">Kwajalein</span>
<span class="line">America/Asuncion</span>
<span class="line">Asia/Ulan_Bator</span>
<span class="line">NZ</span>
<span class="line">America/Boise</span>
<span class="line">Australia/Currie</span>
<span class="line">EST5EDT</span>
<span class="line">Pacific/Guam</span>
<span class="line">Pacific/Wake</span>
<span class="line">Atlantic/Bermuda</span>
<span class="line">America/Costa_Rica</span>
<span class="line">America/Dawson</span>
<span class="line">Asia/Chongqing</span>
<span class="line">Eire</span>
<span class="line">Europe/Amsterdam</span>
<span class="line">America/Indiana/Knox</span>
<span class="line">America/North_Dakota/Beulah</span>
<span class="line">Africa/Accra</span>
<span class="line">Atlantic/Faroe</span>
<span class="line">Mexico/BajaNorte</span>
<span class="line">America/Maceio</span>
<span class="line">Etc/UCT</span>
<span class="line">Pacific/Apia</span>
<span class="line">GMT0</span>
<span class="line">America/Atka</span>
<span class="line">Pacific/Niue</span>
<span class="line">Australia/Lord_Howe</span>
<span class="line">Europe/Dublin</span>
<span class="line">Pacific/Truk</span>
<span class="line">MST7MDT</span>
<span class="line">America/Monterrey</span>
<span class="line">America/Nassau</span>
<span class="line">America/Jamaica</span>
<span class="line">Asia/Bishkek</span>
<span class="line">America/Atikokan</span>
<span class="line">Atlantic/Stanley</span>
<span class="line">Australia/NSW</span>
<span class="line">US/Hawaii</span>
<span class="line">SystemV/CST6</span>
<span class="line">Indian/Mahe</span>
<span class="line">Asia/Aqtobe</span>
<span class="line">America/Sitka</span>
<span class="line">Asia/Vladivostok</span>
<span class="line">Africa/Libreville</span>
<span class="line">Africa/Maputo</span>
<span class="line">Zulu</span>
<span class="line">America/Kentucky/Monticello</span>
<span class="line">Africa/El_Aaiun</span>
<span class="line">Africa/Ouagadougou</span>
<span class="line">America/Coral_Harbour</span>
<span class="line">Pacific/Marquesas</span>
<span class="line">Brazil/West</span>
<span class="line">America/Aruba</span>
<span class="line">America/North_Dakota/Center</span>
<span class="line">America/Cayman</span>
<span class="line">Asia/Ulaanbaatar</span>
<span class="line">Asia/Baghdad</span>
<span class="line">Europe/San_Marino</span>
<span class="line">America/Indiana/Tell_City</span>
<span class="line">America/Tijuana</span>
<span class="line">Pacific/Saipan</span>
<span class="line">SystemV/YST9</span>
<span class="line">Africa/Douala</span>
<span class="line">America/Chihuahua</span>
<span class="line">America/Ojinaga</span>
<span class="line">Asia/Hovd</span>
<span class="line">America/Anchorage</span>
<span class="line">Chile/EasterIsland</span>
<span class="line">America/Halifax</span>
<span class="line">Antarctica/Rothera</span>
<span class="line">America/Indiana/Indianapolis</span>
<span class="line">US/Mountain</span>
<span class="line">Asia/Damascus</span>
<span class="line">America/Argentina/San_Luis</span>
<span class="line">America/Santiago</span>
<span class="line">Asia/Baku</span>
<span class="line">America/Argentina/Ushuaia</span>
<span class="line">Atlantic/Reykjavik</span>
<span class="line">Africa/Brazzaville</span>
<span class="line">Africa/Porto-Novo</span>
<span class="line">America/La_Paz</span>
<span class="line">Antarctica/DumontDUrville</span>
<span class="line">Asia/Taipei</span>
<span class="line">Antarctica/South_Pole</span>
<span class="line">Asia/Manila</span>
<span class="line">Asia/Bangkok</span>
<span class="line">Africa/Dar_es_Salaam</span>
<span class="line">Poland</span>
<span class="line">Atlantic/Madeira</span>
<span class="line">Antarctica/Palmer</span>
<span class="line">America/Thunder_Bay</span>
<span class="line">Africa/Addis_Ababa</span>
<span class="line">Asia/Yangon</span>
<span class="line">Europe/Uzhgorod</span>
<span class="line">Brazil/DeNoronha</span>
<span class="line">Asia/Ashkhabad</span>
<span class="line">Etc/Zulu</span>
<span class="line">America/Indiana/Marengo</span>
<span class="line">America/Creston</span>
<span class="line">America/Punta_Arenas</span>
<span class="line">America/Mexico_City</span>
<span class="line">Antarctica/Vostok</span>
<span class="line">Asia/Jerusalem</span>
<span class="line">Europe/Andorra</span>
<span class="line">US/Samoa</span>
<span class="line">PRC</span>
<span class="line">Asia/Vientiane</span>
<span class="line">Pacific/Kiritimati</span>
<span class="line">America/Matamoros</span>
<span class="line">America/Blanc-Sablon</span>
<span class="line">Asia/Riyadh</span>
<span class="line">Iceland</span>
<span class="line">Pacific/Pohnpei</span>
<span class="line">Asia/Ujung_Pandang</span>
<span class="line">Atlantic/South_Georgia</span>
<span class="line">Europe/Lisbon</span>
<span class="line">Asia/Harbin</span>
<span class="line">Europe/Oslo</span>
<span class="line">Asia/Novokuznetsk</span>
<span class="line">CST6CDT</span>
<span class="line">Atlantic/Canary</span>
<span class="line">America/Knox_IN</span>
<span class="line">Asia/Kuwait</span>
<span class="line">SystemV/HST10</span>
<span class="line">Pacific/Efate</span>
<span class="line">Africa/Lome</span>
<span class="line">America/Bogota</span>
<span class="line">America/Menominee</span>
<span class="line">America/Adak</span>
<span class="line">Pacific/Norfolk</span>
<span class="line">Europe/Kirov</span>
<span class="line">America/Resolute</span>
<span class="line">Pacific/Tarawa</span>
<span class="line">Africa/Kampala</span>
<span class="line">Asia/Krasnoyarsk</span>
<span class="line">Greenwich</span>
<span class="line">SystemV/EST5</span>
<span class="line">America/Edmonton</span>
<span class="line">Europe/Podgorica</span>
<span class="line">Australia/South</span>
<span class="line">Canada/Central</span>
<span class="line">Africa/Bujumbura</span>
<span class="line">America/Santo_Domingo</span>
<span class="line">US/Eastern</span>
<span class="line">Europe/Minsk</span>
<span class="line">Pacific/Auckland</span>
<span class="line">Africa/Casablanca</span>
<span class="line">America/Glace_Bay</span>
<span class="line">Canada/Eastern</span>
<span class="line">Asia/Qatar</span>
<span class="line">Europe/Kiev</span>
<span class="line">Singapore</span>
<span class="line">Asia/Magadan</span>
<span class="line">SystemV/PST8</span>
<span class="line">America/Port-au-Prince</span>
<span class="line">Europe/Belfast</span>
<span class="line">America/St_Barthelemy</span>
<span class="line">Asia/Ashgabat</span>
<span class="line">Africa/Luanda</span>
<span class="line">America/Nipigon</span>
<span class="line">Atlantic/Jan_Mayen</span>
<span class="line">Brazil/Acre</span>
<span class="line">Asia/Muscat</span>
<span class="line">Asia/Bahrain</span>
<span class="line">Europe/Vilnius</span>
<span class="line">America/Fortaleza</span>
<span class="line">Etc/GMT0</span>
<span class="line">US/East-Indiana</span>
<span class="line">America/Hermosillo</span>
<span class="line">America/Cancun</span>
<span class="line">Africa/Maseru</span>
<span class="line">Pacific/Kosrae</span>
<span class="line">Africa/Kinshasa</span>
<span class="line">Asia/Kathmandu</span>
<span class="line">Asia/Seoul</span>
<span class="line">Australia/Sydney</span>
<span class="line">America/Lima</span>
<span class="line">Australia/LHI</span>
<span class="line">America/St_Lucia</span>
<span class="line">Europe/Madrid</span>
<span class="line">America/Bahia_Banderas</span>
<span class="line">America/Montserrat</span>
<span class="line">Asia/Brunei</span>
<span class="line">America/Santa_Isabel</span>
<span class="line">Canada/Mountain</span>
<span class="line">America/Cambridge_Bay</span>
<span class="line">Asia/Colombo</span>
<span class="line">Australia/West</span>
<span class="line">Indian/Antananarivo</span>
<span class="line">Australia/Brisbane</span>
<span class="line">Indian/Mayotte</span>
<span class="line">US/Indiana-Starke</span>
<span class="line">Asia/Urumqi</span>
<span class="line">US/Aleutian</span>
<span class="line">Europe/Volgograd</span>
<span class="line">America/Lower_Princes</span>
<span class="line">America/Vancouver</span>
<span class="line">Africa/Blantyre</span>
<span class="line">America/Rio_Branco</span>
<span class="line">America/Danmarkshavn</span>
<span class="line">America/Detroit</span>
<span class="line">America/Thule</span>
<span class="line">Africa/Lusaka</span>
<span class="line">Asia/Hong_Kong</span>
<span class="line">Iran</span>
<span class="line">America/Argentina/La_Rioja</span>
<span class="line">Africa/Dakar</span>
<span class="line">SystemV/CST6CDT</span>
<span class="line">America/Tortola</span>
<span class="line">America/Porto_Velho</span>
<span class="line">Asia/Sakhalin</span>
<span class="line">Etc/GMT+10</span>
<span class="line">America/Scoresbysund</span>
<span class="line">Asia/Kamchatka</span>
<span class="line">Asia/Thimbu</span>
<span class="line">Africa/Harare</span>
<span class="line">Etc/GMT+12</span>
<span class="line">Etc/GMT+11</span>
<span class="line">Navajo</span>
<span class="line">America/Nome</span>
<span class="line">Europe/Tallinn</span>
<span class="line">Turkey</span>
<span class="line">Africa/Khartoum</span>
<span class="line">Africa/Johannesburg</span>
<span class="line">Africa/Bangui</span>
<span class="line">Europe/Belgrade</span>
<span class="line">Jamaica</span>
<span class="line">Africa/Bissau</span>
<span class="line">Asia/Tehran</span>
<span class="line">WET</span>
<span class="line">Europe/Astrakhan</span>
<span class="line">Africa/Juba</span>
<span class="line">America/Campo_Grande</span>
<span class="line">America/Belem</span>
<span class="line">Etc/Greenwich</span>
<span class="line">Asia/Saigon</span>
<span class="line">America/Ensenada</span>
<span class="line">Pacific/Midway</span>
<span class="line">America/Jujuy</span>
<span class="line">Africa/Timbuktu</span>
<span class="line">America/Bahia</span>
<span class="line">America/Goose_Bay</span>
<span class="line">America/Virgin</span>
<span class="line">America/Pangnirtung</span>
<span class="line">Asia/Katmandu</span>
<span class="line">America/Phoenix</span>
<span class="line">Africa/Niamey</span>
<span class="line">America/Whitehorse</span>
<span class="line">Pacific/Noumea</span>
<span class="line">Asia/Tbilisi</span>
<span class="line">America/Montreal</span>
<span class="line">Asia/Makassar</span>
<span class="line">America/Argentina/San_Juan</span>
<span class="line">Hongkong</span>
<span class="line">UCT</span>
<span class="line">Asia/Nicosia</span>
<span class="line">America/Indiana/Winamac</span>
<span class="line">SystemV/MST7MDT</span>
<span class="line">America/Argentina/ComodRivadavia</span>
<span class="line">America/Boa_Vista</span>
<span class="line">America/Grenada</span>
<span class="line">Asia/Atyrau</span>
<span class="line">Australia/Darwin</span>
<span class="line">Asia/Khandyga</span>
<span class="line">Asia/Kuala_Lumpur</span>
<span class="line">Asia/Famagusta</span>
<span class="line">Asia/Thimphu</span>
<span class="line">Asia/Rangoon</span>
<span class="line">Europe/Bratislava</span>
<span class="line">Asia/Calcutta</span>
<span class="line">America/Argentina/Tucuman</span>
<span class="line">Asia/Kabul</span>
<span class="line">Indian/Cocos</span>
<span class="line">Japan</span>
<span class="line">Pacific/Tongatapu</span>
<span class="line">America/New_York</span>
<span class="line">Etc/GMT-12</span>
<span class="line">Etc/GMT-11</span>
<span class="line">Etc/GMT-10</span>
<span class="line">SystemV/YST9YDT</span>
<span class="line">Europe/Ulyanovsk</span>
<span class="line">Etc/GMT-14</span>
<span class="line">Etc/GMT-13</span>
<span class="line">W-SU</span>
<span class="line">America/Merida</span>
<span class="line">EET</span>
<span class="line">America/Rosario</span>
<span class="line">Canada/Saskatchewan</span>
<span class="line">America/St_Kitts</span>
<span class="line">Arctic/Longyearbyen</span>
<span class="line">America/Fort_Nelson</span>
<span class="line">America/Caracas</span>
<span class="line">America/Guadeloupe</span>
<span class="line">Asia/Hebron</span>
<span class="line">Indian/Kerguelen</span>
<span class="line">SystemV/PST8PDT</span>
<span class="line">Africa/Monrovia</span>
<span class="line">Asia/Ust-Nera</span>
<span class="line">Egypt</span>
<span class="line">Asia/Srednekolymsk</span>
<span class="line">America/North_Dakota/New_Salem</span>
<span class="line">Asia/Anadyr</span>
<span class="line">Australia/Melbourne</span>
<span class="line">Asia/Irkutsk</span>
<span class="line">America/Shiprock</span>
<span class="line">America/Winnipeg</span>
<span class="line">Europe/Vatican</span>
<span class="line">Asia/Amman</span>
<span class="line">Etc/UTC</span>
<span class="line">SystemV/AST4ADT</span>
<span class="line">Asia/Tokyo</span>
<span class="line">America/Toronto</span>
<span class="line">Asia/Singapore</span>
<span class="line">Australia/Lindeman</span>
<span class="line">America/Los_Angeles</span>
<span class="line">SystemV/EST5EDT</span>
<span class="line">Pacific/Majuro</span>
<span class="line">America/Argentina/Buenos_Aires</span>
<span class="line">Europe/Nicosia</span>
<span class="line">Pacific/Guadalcanal</span>
<span class="line">Europe/Athens</span>
<span class="line">US/Pacific</span>
<span class="line">Europe/Monaco</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,267),t=[l];function p(c,o){return a(),s("div",null,t)}const u=n(i,[["render",p],["__file","api.html.vue"]]),r=JSON.parse('{"path":"/JavaSE1/api.html","title":"常用API","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、api是什么","slug":"一、api是什么","link":"#一、api是什么","children":[]},{"level":2,"title":"二、时间相关api","slug":"二、时间相关api","link":"#二、时间相关api","children":[{"level":3,"title":"1、Date","slug":"_1、date","link":"#_1、date","children":[]},{"level":3,"title":"2、Calendar","slug":"_2、calendar","link":"#_2、calendar","children":[]},{"level":3,"title":"3、时区TimeZone","slug":"_3、时区timezone","link":"#_3、时区timezone","children":[]},{"level":3,"title":"4、ZoneId","slug":"_4、zoneid","link":"#_4、zoneid","children":[]},{"level":3,"title":"5、simpleDateFormat","slug":"_5、simpledateformat","link":"#_5、simpledateformat","children":[]}]},{"level":2,"title":"三、jdk8的时间类","slug":"三、jdk8的时间类","link":"#三、jdk8的时间类","children":[{"level":3,"title":"1、Instant","slug":"_1、instant","link":"#_1、instant","children":[]},{"level":3,"title":"2、Duration","slug":"_2、duration","link":"#_2、duration","children":[]},{"level":3,"title":"3、LocalDate","slug":"_3、localdate","link":"#_3、localdate","children":[]},{"level":3,"title":"4、LocalTime","slug":"_4、localtime","link":"#_4、localtime","children":[]},{"level":3,"title":"5、LocalDateTime","slug":"_5、localdatetime","link":"#_5、localdatetime","children":[]},{"level":3,"title":"6、DateTimeFormatter","slug":"_6、datetimeformatter","link":"#_6、datetimeformatter","children":[]},{"level":3,"title":"7. 类型相互转换","slug":"_7-类型相互转换","link":"#_7-类型相互转换","children":[]}]},{"level":2,"title":"四、数学类","slug":"四、数学类","link":"#四、数学类","children":[{"level":3,"title":"1、Math","slug":"_1、math","link":"#_1、math","children":[]},{"level":3,"title":"2、BigDecimal","slug":"_2、bigdecimal","link":"#_2、bigdecimal","children":[]},{"level":3,"title":"3、Random类","slug":"_3、random类","link":"#_3、random类","children":[]}]},{"level":2,"title":"五、工具类","slug":"五、工具类","link":"#五、工具类","children":[{"level":3,"title":"1、Arrays","slug":"_1、arrays","link":"#_1、arrays","children":[]},{"level":3,"title":"（1）更友好的显示数组","slug":"_1-更友好的显示数组","link":"#_1-更友好的显示数组","children":[]},{"level":3,"title":"（2）排序","slug":"_2-排序","link":"#_2-排序","children":[]},{"level":3,"title":"（3）二分查找","slug":"_3-二分查找","link":"#_3-二分查找","children":[]},{"level":3,"title":"（4）数组拷贝","slug":"_4-数组拷贝","link":"#_4-数组拷贝","children":[]},{"level":3,"title":"（5）两个数组的比较","slug":"_5-两个数组的比较","link":"#_5-两个数组的比较","children":[]},{"level":3,"title":"2、System类","slug":"_2、system类","link":"#_2、system类","children":[]},{"level":3,"title":"3、Objects","slug":"_3、objects","link":"#_3、objects","children":[]}]},{"level":2,"title":"六、其他","slug":"六、其他","link":"#六、其他","children":[{"level":3,"title":"1、StringBuffer和StringBuilder","slug":"_1、stringbuffer和stringbuilder","link":"#_1、stringbuffer和stringbuilder","children":[]}]},{"level":2,"title":"七、附表","slug":"七、附表","link":"#七、附表","children":[]}],"git":{},"filePathRelative":"JavaSE1/api.md","excerpt":"\\n<h2>一、api是什么</h2>\\n<p>（1）概述</p>\\n<p>API（Application Programming Interface）应用程序接口，是一些预先定义的接口。我们现在理解接口课程很狭隘，因为jdk中本身就有接口的概念。</p>\\n<p>其实我们类的方法，接口的方法在宏观上都能称之为接口。</p>\\n<p>（2）api文档</p>\\n<p>我们现在可以狭义的去理解它，就是一个文档，描述了jdk内置类的说明。</p>\\n<p>文档地址：https://www.matools.com/api/java8，离线版本也有。我放在咱们的资料区中。</p>\\n<p>在学习这一章节的时候，千万不要陷入记忆的魔障，api文档不是用来背的，是用来查的。我们要做到心中大概知道有一个类能实现某一类方法就好了，剩下的我们在使用的时候去查阅就好了。</p>"}');export{u as comp,r as data};
