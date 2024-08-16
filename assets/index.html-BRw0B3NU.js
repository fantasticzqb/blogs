import{_ as s,c as e,o as n,a}from"./app-DTribdQX.js";const i={},l=a(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h1><p>git：分布式版本控制工具</p><p>代码托管平台：github、gitee、gitlab</p><h2 id="_1、git安装" tabindex="-1"><a class="header-anchor" href="#_1、git安装"><span>1、git安装</span></a></h2><p>windows安装：进入网站https://git-scm.com/下载安装，然后在cmd命令行配置</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token operator">&gt;</span> git config <span class="token operator">--</span><span class="token keyword">global</span> user<span class="token operator">.</span>name <span class="token string double-quoted-string">&quot;itnanls&quot;</span></span>
<span class="line"><span class="token operator">&gt;</span> git config <span class="token operator">--</span><span class="token keyword">global</span> user<span class="token operator">.</span>email <span class="token string double-quoted-string">&quot;itnanls@163.com&quot;</span></span>
<span class="line"><span class="token comment">#检查信息是否写入成功</span></span>
<span class="line">git config <span class="token operator">--</span><span class="token keyword">list</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ubuntu配置：apt-get install git</p><p>centos配置：yum install git</p><p>git的命令其实和linux命令类似</p><h2 id="_2、git基本操作" tabindex="-1"><a class="header-anchor" href="#_2、git基本操作"><span>2、git基本操作</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">通过以下命令查看git所有的配置：</span>
<span class="line">$ <span class="token function">git</span> config <span class="token parameter variable">--list</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-console line-numbers-mode" data-highlighter="prismjs" data-ext="console" data-title="console"><pre><code><span class="line">安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改</span>
<span class="line">$ git config --global user.name &quot;itnanls&quot;</span>
<span class="line">$ git config --global user.email &quot;510180298@qq.com&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次强调，如果使用了 <code>--global</code> 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 <code>--global</code> 选项的命令来配置。</p><p>很多 GUI 工具都会在第一次运行时帮助你配置这些信息。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">进行版本控制：</span>
<span class="line">1、初始化git，生成隐藏的git文件夹进行管理代码。在同一个目录中，只执行一次。</span>
<span class="line">git init</span>
<span class="line">2、把代码托管给git管理。简称追踪文件。每次文件在同一个目录中如果要放到暂存区，每次新增一个文件就要执行一次。</span>
<span class="line">git add a.txt</span>
<span class="line">3、把代码提交到版本库，进行完这一步之后才可以日后对代码进行回滚。</span>
<span class="line">git commit -m &#39;这里可以写提交信息，这就是-m参数的作用&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3、git的状态" tabindex="-1"><a class="header-anchor" href="#_3、git的状态"><span>3、git的状态</span></a></h2><p>git存在三种状态：<strong>已提交（committed）</strong>、<strong>已修改（modified）</strong> 和 <strong>已暂存（staged）</strong>。</p><p>这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。</p><p>当输入了add命令后，代码会进入暂存区</p><p>输入了commit命令则会进入git目录，也就是版本库中</p><p>基本的 Git 工作流程如下：</p><ol><li>在工作区中修改文件。</li><li>将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。</li><li>提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。</li><li>如果 Git 目录中保存着特定版本的文件，就属于 <strong>已提交</strong> 状态。 如果文件已修改并放入暂存区，就属于 <strong>已暂存</strong> 状态。 如果自上次检出后，作了修改但还没有放到暂存区域，就是 <strong>已修改</strong> 状态。</li></ol><hr><h2 id="_4、git如何保持完整性" tabindex="-1"><a class="header-anchor" href="#_4、git如何保持完整性"><span>4、git如何保持完整性</span></a></h2><p>Git 中所有的数据在存储前都计算校验和，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。 这个功能建构在 Git 底层，是构成 Git 哲学不可或缺的部分。 若你在传送过程中丢失信息或损坏文件，Git 就能发现。</p><p>Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）。 这是一个由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容或目录结构计算出来。 SHA-1 哈希看起来是这样：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">24b9da6552252987aa493b52f8696cd6d3b00373</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Git 中使用这种哈希值的情况很多，你将经常看到这种哈希值。 实际上，Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名。</p><h2 id="_5、git-status" tabindex="-1"><a class="header-anchor" href="#_5、git-status"><span>5、git status</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">查看状态，可以查看文件是否已经加入了暂存区域、以及是否提交</span>
<span class="line">git status</span>
<span class="line">如果后面出现了(use &quot;git restore --staged &lt;file&gt;...&quot; to unstage)，表示某文件并未放到暂存区域。</span>
<span class="line">如果后面出现了 (use &quot;git add &lt;file&gt;...&quot; to include in what will be committed)，表示某文件并未提交</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在输入add命令添加到暂存区后：如果代码报错：git上传代码报错-The file will have its original line endings in your working directory</p><p>原因是因为文件中换行符的差别导致的。这个对结果影响不大。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">解决方案：</span>
<span class="line">删除文件在暂存区的缓存，此代码是.代表所有文件，根据实际情况调整</span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> config core.autocrlf <span class="token boolean">false</span></span>
<span class="line">然后重新上传<span class="token punctuation">(</span>add<span class="token punctuation">)</span>代码即可。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、git-log" tabindex="-1"><a class="header-anchor" href="#_6、git-log"><span>6、git log</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">显示git历史操作记录，git日志(里面包含提交文件的信息以及编码，作者信息，提交日期)。其中commit后的文件使用了SHA-1算法生成了一大堆编号，这样防止篡改文件。</span>
<span class="line">git log</span>
<span class="line">当日志过长时，可以查看简单一点的格式化好的日志</span>
<span class="line">git log --pretty=oneline</span>
<span class="line">以分支的方式查看日志</span>
<span class="line">git log --pretty=oneline --graph</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、版本回退" tabindex="-1"><a class="header-anchor" href="#_7、版本回退"><span>7、版本回退</span></a></h2><p><em>快照即提交的版本，每个版本我们称之为一个快照。</em></p><p>版本回退的本质是改变了head指针的指向</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">回退到上一个版本</span>
<span class="line">git reset head~</span>
<span class="line">hard参数回退上一个版本</span>
<span class="line">git reset --hard head~</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注：HEAD 表示最新提交的快照，而 HEAD~ 表示 HEAD 的上一个快照，HEAD~~表示上上个快照，如果表示上10个快照，则可以用HEAD ~10</em></p><ul><li><p>参数选择（必须掌握）</p><p>--hard : 回退版本库，暂存区，工作区。（因此我们修改过的代码就没了，需要谨慎使用）。reset 不仅移动 HEAD 的指向，将快照回滚动到暂存区域，它还将暂存区域的文件还原到工作目录。</p><p>--mixed: 回退版本库，暂存区。(--mixed为git reset的默认参数，即当任何参数都不加的时候的参数)</p><p>--soft: 回退版本库。就相当于只移动 HEAD 的指向，但并不会将快照回滚到暂存区域。相当于撤消了上一次的提交（commit）。</p><p>如果版本回退遇到这样的报错，输入：git commit --allow-empty -n -m &quot;Initial commit&quot;</p></li></ul><h2 id="_8、回退指定的版本" tabindex="-1"><a class="header-anchor" href="#_8、回退指定的版本"><span>8、回退指定的版本</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">参数部分是hard以及指定版本的SHA-1值</span>
<span class="line">git reset --hard c71321435465487swaw</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">也查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）</span>
<span class="line">git reflog</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>git reflog与git log的区别：</p><p>例如执行 git reset --hard head~，退回到上一个版本，用git log则是看不出来被删除的commitid，用git reflog则可以看到被删除的commitid，我们就可以买后悔药，恢复到被删除的那个版本。</p><h2 id="_9、git-diff" tabindex="-1"><a class="header-anchor" href="#_9、git-diff"><span>9、git diff</span></a></h2><p>用来对比工作区、暂存区、版本库中的版本是否相同</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">比较暂存区与工作树(工作区)的不同</span>
<span class="line">git diff</span>
<span class="line"></span>
<span class="line">解释：</span>
<span class="line">**第一行：**diff --git a/b.txt b/b.txt 表示对比的是存放在暂存区域和工作目录的b.txt。a是暂存区的文件，b是工作区的文件。</span>
<span class="line">**第二行：**index 9ab39d5..4d37a8a 100644 表示对应文件的 ID 分别是 9ab39d5和 4d37a8a，左边暂存区域，后边当前目录。最后的 100644 是指定文件的类型和权限</span>
<span class="line">第三行：--- a/b.txt</span>
<span class="line">--- 表示该文件是旧文件（存放在暂存区域）</span>
<span class="line">第四行：+++ b/b.txt +++ 表示该文件是新文件（存放在工作区域）</span>
<span class="line">第五行：@@ -2,3 +2,4 @@ 以 @@ 开头和结束，中间的“-”表示旧文件，“+”表示新文件，后边的数字表示“开始行号，显示行数”</span>
<span class="line">内容：+代表新增的行 -代表少了的行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">比较工作树(工作区)与最新提交(版本库)的不同。head指的是当前最新版本库中的版本</span>
<span class="line">git diff head</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">比较仓库(版本库)和暂存区的不同。参数是SHA-1值</span>
<span class="line">git diff --cached 0c78c78</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">比较两个历史快照的不同。参数是两个SHA-1值</span>
<span class="line">git diff 5ada78a c12aws4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10、删除文件" tabindex="-1"><a class="header-anchor" href="#_10、删除文件"><span>10、删除文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">不小心删除了工作区中的b文件，想恢复b文件。前提是b文件必须是暂存区中的文件才行。</span>
<span class="line">git checkout -- b.txt</span>
<span class="line"></span>
<span class="line">我想撤销所有加入暂存区的文件</span>
<span class="line">git reset HEAD -- .</span>
<span class="line"></span>
<span class="line">删除b文件。会删除工作区与暂存区的文件，后面可以直接进行提交来删除版本库中的文件</span>
<span class="line">git rm b.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11、重命名" tabindex="-1"><a class="header-anchor" href="#_11、重命名"><span>11、重命名</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">把a.txt重命名为b.txt。修改了工作区和暂存区。后面提交即可到版本库中。</span>
<span class="line">git mv a.txt b.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12、忽略文件" tabindex="-1"><a class="header-anchor" href="#_12、忽略文件"><span>12、忽略文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">有一些文件我不想让git进行管理。例如程序的配置文件等等。</span>
<span class="line">过程：首先，要新建一个gitignore文件。然后在该文件里去写要让git忽略哪些文件</span>
<span class="line"></span>
<span class="line">创建文件</span>
<span class="line">touch .gitigore</span>
<span class="line"></span>
<span class="line">把所有以temp为后缀的文件让git忽略掉不要管理</span>
<span class="line">echo *.temp &gt;&gt; .gitignore</span>
<span class="line"></span>
<span class="line">也可以把gitignore文件也忽略掉</span>
<span class="line">echo .gitignore &gt;&gt; .gitignore</span>
<span class="line"></span>
<span class="line">不过呢，一般不建议忽略掉gitignore文件，可以把它提交到版本库中</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13、分支-多人协同开发的精髓" tabindex="-1"><a class="header-anchor" href="#_13、分支-多人协同开发的精髓"><span>13、分支（多人协同开发的精髓）</span></a></h2><p>例如图中的head -&gt; master（head是个指针，指向当前的主分支master）</p><p>这里的master就是主分支，是一个较成熟的版本，是可以发布上线的</p><p>假设你的大项目已经上线了（有上百万人在使用），过了一段时间</p><p>你突然觉得应该添加一些新的功能，但是为了保险起见，你肯定不能在当前项目上直接进行开发，这时候你就有创建分支的需要了。</p><p>把主分支master的版本复制过来，作为分支。在分支上进行开发新的需求。如果分支开发成功，最后把分支合并到主分支master中，成为新的主分支master。最后再进行add以及commit放到版本库中即可。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">创建名为login的分支</span>
<span class="line">git branch login</span>
<span class="line"></span>
<span class="line">查看当前是哪个分支</span>
<span class="line">git status</span>
<span class="line"></span>
<span class="line">切换到login分支</span>
<span class="line">git checkout login</span>
<span class="line"></span>
<span class="line">切换到master主分支</span>
<span class="line">git checkout master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14、分支合并" tabindex="-1"><a class="header-anchor" href="#_14、分支合并"><span>14、分支合并</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">分支合并的过程：首先要切换到主分支，再合并分支</span>
<span class="line"></span>
<span class="line">切换成主分支</span>
<span class="line">git checkout master</span>
<span class="line"></span>
<span class="line">合并分支login</span>
<span class="line">git merge login</span>
<span class="line"></span>
<span class="line">当有多个分支修改了同一个文件，并且之后进行分支合并时，会出现冲突现象。解决方法也简单，只要从工作区打开代码根据需要进行修改即可。</span>
<span class="line"></span>
<span class="line">如何尽量避免冲突现象呢？</span>
<span class="line">每天下班都要提交新的代码。每天上班时要从主分支去选择一个最新的版本，把它放到自己新建的分支中。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15、删除分支" tabindex="-1"><a class="header-anchor" href="#_15、删除分支"><span>15、删除分支</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在开发完对应的功能，以及已经合并到主分支master后，要把分支删除</span>
<span class="line"></span>
<span class="line">删除login分支</span>
<span class="line">git branch -d login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16、码云" tabindex="-1"><a class="header-anchor" href="#_16、码云"><span>16、码云</span></a></h2><p>私有仓库需要管理员把开发者添加到仓库管理中，以后才能拉取代码。作为管理员可以在gitee里设置保护分支规则，防止master主分支被其他人修改</p><p>合并到master主分支一般由项目经理负责合并</p><p>git remote -v —查看远程仓库的地址</p><p>git remote add origin xxxxx —表示把gitee的源写入git中，xxxxx表示gitee的仓库地址</p><p>git push -u origin master —表示把git中当前的主分支推送到到orgin源中，-u以及后面的参数只用在第1次使用，以后直接写git push即可。git push之后就可以把主分支的代码提交到gitee的代码仓库中。</p><h2 id="_17、多人协作工作流程" tabindex="-1"><a class="header-anchor" href="#_17、多人协作工作流程"><span>17、多人协作工作流程</span></a></h2><p>首先根据公司的规模：分支划分一般为master branch主分支，develop branch开发分支，feature branch功能分支</p><p>每天的工作，首先开发人员从代码托管平台拉取（clone克隆）代码（master+develop），然后切换分支为develop，再新建分支例如：feature，从新建feature分支中完成代码开发，然后commit提交到版本库。后续会把feature分支与develop分支进行合并，形成新的develop分支。合并成功后，把feature分支删除。再把新的develop分支push到托管平台的仓库中。等到以后功能完成后，由项目经理把develop分支合并到master分支中。(自己为了开发而创建的新的分支不要push到托管平台中，要合并后的分支再push到托管平台中)</p><p>push也可能出现冲突现象，需要输入git pull，解决冲突现象（也可以不解决直接保存），之后再psuh进去仓库。<strong>因此应该养成好习惯，在push前先pull一下</strong>（pull相当于把别人合并的develop分支和你自己的develop分支再进行合并的过程）</p><p>备用方案是强推：git push -f origin master，优先使用pull</p><h2 id="_18、多人协作实战" tabindex="-1"><a class="header-anchor" href="#_18、多人协作实战"><span>18、多人协作实战</span></a></h2><h2 id="_19、多团队合作实战" tabindex="-1"><a class="header-anchor" href="#_19、多团队合作实战"><span>19、多团队合作实战</span></a></h2><p>多团队的话，仓库管理员创建仓库要公开</p><p>公开仓库一定要设置权限，管理分支保护。</p><p>然后开发人员进行fork，把该仓库添加到自己的仓库中</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316162529369.89eebb82.png" alt="image-20210316162529369"></p><p>在自己的仓库中进行clone、push、pull等操作。之后进行pull request操作，请求把自己仓库中的源分支与项目仓库的目标分支进行合并。后面由项目经理审查合并分支。对于开发人员来说，pull request操作代替的是push操作。</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316162936698.574f16d7.png" alt="image-20210316162936698"></p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316162907857.f8f42c87.png" alt="image-20210316162907857"></p><h2 id="_20、issue介绍" tabindex="-1"><a class="header-anchor" href="#_20、issue介绍"><span>20、issue介绍</span></a></h2><p>issue可以理解为日常工作的指派。也有禅道这样的项目管理工具里面都具有issue的功能</p><p>给开源项目提供解决方案，也是和19多团队合作实战是一样的操作</p><h2 id="_21、rebase合并提交信息" tabindex="-1"><a class="header-anchor" href="#_21、rebase合并提交信息"><span>21、rebase合并提交信息</span></a></h2><p>每次commit都会留下一条记录，使用rebase合并一些commit会使commit信息看起来更加清晰。</p><p>合并后会弹出黑窗口，在窗口里写提交信息</p><p>合并 commit 尽量在 push 前完成。或者说在rebase之前要先进行pull</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">合并commit，xxx指的是SHA-1值。这条命令指的是：通过SHA-1值指定的commit时间节点，到现在最新的commit全部合并成一个commit</span>
<span class="line">git rebase -i xxx</span>
<span class="line"></span>
<span class="line">把时间节点最新的两个commit，合并成一个commit</span>
<span class="line">git rebase -i head~~</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>弹出黑窗口后的操作：</p><p>vi指令 <code>i</code> 进入编辑模式，修改你不想保留的 commit 记录前的 <code>pick</code> 为 <code>squash</code>(或者<code>s</code>)。<code>git</code> 会把前面为 <code>squash</code>的 commit 记录与它的上一条记录合并为一条。</p><p>注意要确保第一条为 <code>pick</code>，因为<code>squash</code>的作用是把 commit 合并到上一个提交，所以必须保证至少第一个提交被 <code>pick</code>。</p><p>如果你不小心把所有的<code>pick</code>都改为了<code>s</code>，然后保存退出，会收到一个错误提示：<code>cannot &#39;squash&#39; without a previous commit</code>。不要怕，根据它的下一个提示操作就可以了：尽管它提示了2种方法来处理，我还是推荐你使用<code>git rebase --abort</code>，然后重来一次 rebase，这样最稳妥。</p><p>后面会弹出第二个黑窗口：</p><p>没有#号的行，就是commit的提交信息，改成自己的提交信息即可。#号就是注释。</p><h2 id="_22、clone和pull代码拉取的区别" tabindex="-1"><a class="header-anchor" href="#_22、clone和pull代码拉取的区别"><span>22、clone和pull代码拉取的区别</span></a></h2><p>1、git clone 与 git pull 相同点 相同点：都是从远程服务器拉取代码到本地</p><p>2、git clone 与 git pull 不同点 git clone 是在本地没有版本库的时候，从远程服务器克隆整个版本库到本地，是一个本地从无到有的过程。</p><p>git pull 在本地有版本库的情况下，从远程库获取最新commit 数据（如果有的话），并merge（合并）到本地。</p><p>git pull = git fetch + git merge</p><p>3、使用场景 通常情况下，远程操作的第一步，是使用git clone从远程主机克隆一个版本库到本地。</p><p>本地修改代码后，每次从本地仓库push到远程仓库之前都要先进行git pull操作，保证push到远程仓库时没有版本冲突。</p><h2 id="_23、idea中使用git" tabindex="-1"><a class="header-anchor" href="#_23、idea中使用git"><span>23、idea中使用git</span></a></h2><p>在idea右下角可以选择分支</p><p>配置</p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316223514317.e5ebf480.png" alt="image-20210316223514317"></p><p>可以下载码云插件 gitee</p><blockquote><p>从远程仓库拉项目</p></blockquote><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316223943198.e938cc5b.png" alt="image-20210316223943198"></p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316224009006.380c58a5.png" alt="image-20210316224009006"></p><blockquote><p>控制台查看分支提交等信息</p></blockquote><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316223754144.d07d1ad2.png" alt="image-20210316223754144"></p><blockquote><p>提交代码</p></blockquote><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316223853465.8dca464a.png" alt="image-20210316223853465"></p><p><img src="https://www.ydlclass.com/doc21xnv/assets/image-20210316223911336.c8762fc5.png" alt="image-20210316223911336"></p><h2 id="_24、git传输的两种协议" tabindex="-1"><a class="header-anchor" href="#_24、git传输的两种协议"><span>24、git传输的两种协议</span></a></h2><p>首先是git传输的两种协议：https、SSH</p><p>https的优点：</p><p>1、只需要在push的时候输入gitee的账号和密码就行</p><p>2、企业上线项目一般会打开80和443这两个常见的http和https协议的端口（只有打开这两个端口，http和https才能用），使用这两个协议就能在架设防火墙的企业中绕过安全限制来正常使用git，非常方便。</p><p>https的缺点：</p><p>1、每次push都需要输入口令非常麻烦，但windows也有自带的凭证管理器去记录我们的账户密码</p><p>SSH的优点：</p><p>1、架设git服务器时常用SSH协议作为传输协议，同时SSH协议也是一个验证授权的网络协议，非常的普遍而且架设使用都很容易</p><p>2、SSH协议在push的时候不需要输入用户名和密码</p><p>SSH的缺点：</p><p>1、SSH的服务器端一般使用22端口，企业防火墙可能没有打开这个端口。使用xshell工具连接linux系统开放的也是22端口</p><p>2、SSH 协议的缺点在于你不能通过他实现匿名访问。 即便只要读取数据，使用者也要有通过 SSH 访问你的主机的权限，这使得 SSH 协议不利于开源的项目。 如果你只在公司网络使用，SSH 协议可能是你唯一要用到的协议。 如果你要同时提供匿名只读访问和 SSH 协议，那么你除了为自己推送架设 SSH 服务以外，还得架设一个可以让其他人访问的服务。</p><p>总结：</p><p>https利于匿名访问，适合开源项目可以方便被别人克隆和读取(但他没有push权限)；毕竟为了克隆别人一个仓库学习一下你就要生成个ssh-key折腾一番还是比较麻烦，所以github除了支持ssh协议必然提供了https协议的支持。</p><p>而SSH协议使用公钥认证比较适合内部项目。 当然了现在的代码管理平台例如github、gitliab，两种协议都是支持的，基本上看自己喜好和需求来选择就可以了。</p><p>一般来说代码托管平台中如果有https就用它，没有的话在企业中就用ssh</p><h2 id="_25、ssh免密登录" tabindex="-1"><a class="header-anchor" href="#_25、ssh免密登录"><span>25、ssh免密登录</span></a></h2><p>Gitee 提供了基于SSH协议的Git服务，在使用SSH协议访问仓库仓库之前，需要先配置好账户/仓库的SSH公钥。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在任何一个命令提示符中，生成ssh key（使用了rsa非对称加密算法）</span>
<span class="line">ssh-keygen -t rsa -C &quot;xxxxx@xxxxx.com&quot;  </span>
<span class="line"></span>
<span class="line">注意：这里的 xxxxx@xxxxx.com 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。 现网的大部分教程均讲解的使用邮箱生成，其一开始的初衷仅仅是为了便于辨识所以使用了邮箱。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照提示完成三次回车，即可生成 ssh key。通过查看 <code>~/.ssh/id_rsa.pub</code> 文件内容，获取到你的 public key</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">查看公钥</span>
<span class="line">cat ~/.ssh/id_rsa.pub</span>
<span class="line"></span>
<span class="line">查看私钥</span>
<span class="line">cat ~/.ssh/id_rsa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制生成后的 ssh key，通过gitee <strong>「设置」-&gt;「SSH公钥」-&gt;「添加部署公钥」</strong> ，添加生成的 public key 添加到仓库中。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">添加后，在终端（Terminal）中输入：</span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>首次使用需要确认并添加主机到本机SSH可信列表。若返回 <code>Hi XXX! You&#39;ve successfully authenticated, but Gitee.com does not provide shell access.</code> 内容，则证明添加成功。</p><p>添加成功后，就可以使用SSH协议对仓库进行操作了。</p><h2 id="_26、针对push到远程仓库的代码有误的情况" tabindex="-1"><a class="header-anchor" href="#_26、针对push到远程仓库的代码有误的情况"><span>26、针对push到远程仓库的代码有误的情况</span></a></h2><ol><li>如果出错的内容是提交在远程自己的 branch：只需要在本地把内容修正后，强制 push (push -f）一次就可以解决；</li><li>如果出错内容已经合并到master上：不要强制 push，而要用 git revert HEAD^把上一次写错的 commit 撤销。</li></ol>`,152),t=[l];function p(d,c){return n(),e("div",null,t)}const o=s(i,[["render",p],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/tools/","title":"git","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、git安装","slug":"_1、git安装","link":"#_1、git安装","children":[]},{"level":2,"title":"2、git基本操作","slug":"_2、git基本操作","link":"#_2、git基本操作","children":[]},{"level":2,"title":"3、git的状态","slug":"_3、git的状态","link":"#_3、git的状态","children":[]},{"level":2,"title":"4、git如何保持完整性","slug":"_4、git如何保持完整性","link":"#_4、git如何保持完整性","children":[]},{"level":2,"title":"5、git status","slug":"_5、git-status","link":"#_5、git-status","children":[]},{"level":2,"title":"6、git log","slug":"_6、git-log","link":"#_6、git-log","children":[]},{"level":2,"title":"7、版本回退","slug":"_7、版本回退","link":"#_7、版本回退","children":[]},{"level":2,"title":"8、回退指定的版本","slug":"_8、回退指定的版本","link":"#_8、回退指定的版本","children":[]},{"level":2,"title":"9、git diff","slug":"_9、git-diff","link":"#_9、git-diff","children":[]},{"level":2,"title":"10、删除文件","slug":"_10、删除文件","link":"#_10、删除文件","children":[]},{"level":2,"title":"11、重命名","slug":"_11、重命名","link":"#_11、重命名","children":[]},{"level":2,"title":"12、忽略文件","slug":"_12、忽略文件","link":"#_12、忽略文件","children":[]},{"level":2,"title":"13、分支（多人协同开发的精髓）","slug":"_13、分支-多人协同开发的精髓","link":"#_13、分支-多人协同开发的精髓","children":[]},{"level":2,"title":"14、分支合并","slug":"_14、分支合并","link":"#_14、分支合并","children":[]},{"level":2,"title":"15、删除分支","slug":"_15、删除分支","link":"#_15、删除分支","children":[]},{"level":2,"title":"16、码云","slug":"_16、码云","link":"#_16、码云","children":[]},{"level":2,"title":"17、多人协作工作流程","slug":"_17、多人协作工作流程","link":"#_17、多人协作工作流程","children":[]},{"level":2,"title":"18、多人协作实战","slug":"_18、多人协作实战","link":"#_18、多人协作实战","children":[]},{"level":2,"title":"19、多团队合作实战","slug":"_19、多团队合作实战","link":"#_19、多团队合作实战","children":[]},{"level":2,"title":"20、issue介绍","slug":"_20、issue介绍","link":"#_20、issue介绍","children":[]},{"level":2,"title":"21、rebase合并提交信息","slug":"_21、rebase合并提交信息","link":"#_21、rebase合并提交信息","children":[]},{"level":2,"title":"22、clone和pull代码拉取的区别","slug":"_22、clone和pull代码拉取的区别","link":"#_22、clone和pull代码拉取的区别","children":[]},{"level":2,"title":"23、idea中使用git","slug":"_23、idea中使用git","link":"#_23、idea中使用git","children":[]},{"level":2,"title":"24、git传输的两种协议","slug":"_24、git传输的两种协议","link":"#_24、git传输的两种协议","children":[]},{"level":2,"title":"25、ssh免密登录","slug":"_25、ssh免密登录","link":"#_25、ssh免密登录","children":[]},{"level":2,"title":"26、针对push到远程仓库的代码有误的情况","slug":"_26、针对push到远程仓库的代码有误的情况","link":"#_26、针对push到远程仓库的代码有误的情况","children":[]}],"git":{"updatedTime":1723726527000,"contributors":[{"name":"zqb","email":"2506956864@qq.com","commits":1}]},"filePathRelative":"tools/README.md","excerpt":"\\n<p>git：分布式版本控制工具</p>\\n<p>代码托管平台：github、gitee、gitlab</p>\\n<h2>1、git安装</h2>\\n<p>windows安装：进入网站https://git-scm.com/下载安装，然后在cmd命令行配置</p>\\n<div class=\\"language-php line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"php\\" data-title=\\"php\\"><pre><code><span class=\\"line\\"><span class=\\"token operator\\">&gt;</span> git config <span class=\\"token operator\\">--</span><span class=\\"token keyword\\">global</span> user<span class=\\"token operator\\">.</span>name <span class=\\"token string double-quoted-string\\">\\"itnanls\\"</span></span>\\n<span class=\\"line\\"><span class=\\"token operator\\">&gt;</span> git config <span class=\\"token operator\\">--</span><span class=\\"token keyword\\">global</span> user<span class=\\"token operator\\">.</span>email <span class=\\"token string double-quoted-string\\">\\"itnanls@163.com\\"</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#检查信息是否写入成功</span></span>\\n<span class=\\"line\\">git config <span class=\\"token operator\\">--</span><span class=\\"token keyword\\">list</span> </span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,u as data};
