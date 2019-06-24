# Git 这件小事

author: 马陆骋&lt;malucheng@boohee.com&gt;

## 目录

-   git 初始化配置
-   git 分支操作
-   git 高级技巧
-   git 时空穿越
-   git 差异对比
-   git 解决冲突
-   git 黑暗骑士
-   git 好的提交
-   git 拾遗

## 初始化配置

    cat ~/.gitconfig

    [user]
      name = 马陆骋
      email = malucheng@boohee.com
    [push]
      default = simple
    [core]
      excludesfile = /Users/teddy/.gitignore_global
    [commit]
      template = ~/.gitmessage

## 分支操作

轻量级的分支是 git 的杀手特性

### 基本分支操作

    git branch -vr # 查看远程分支
    git checkout -b feature/my_branch # 创建并切换到新分支
    git push origin feature/my_branch # 将本地分支提交到远程（code review）
    git checkout -t origin/feature/login # 自动切换并跟踪远程分支
    git push origin :no_need_more # 删除远程分支
    git remote prune origin # 清除本地残留的无用分支

### 创建孤儿分支

    git checkout --orphan newbranch
    git rm -rf .
    echo "hello" > README.md
    git commit -m 'Initial commit'

## 分支的合并

假设 dev 分支是从 master 分支 checkout 出来的，那么合并的方式有：

-   直接合并
-   rebase 合并
-   squash 合并

### 直接合并

    git checkout master
    git merge dev

产生一次 merge 的 commit

便于查看特性的提交和审查

就是 gitlab 的 pr 形式

### rebase 合并

    git checkout dev
    git rebase master

变基: master 成为了 dev 分支的"基(foundation)"

这样不会创建一次 merge 提交

提交记录更加干净整洁, 但同时也失去了 merge 的记录

不适合需要 code review 的情况

### squash 合并

    git checkout master
    git merge dev --squash

虽然命令是 merge, 但实际不会产生提交, 执行命令的结果是

所有 dev 分支和 master 不同的部分都将以 modified 的形式出现,
需要再次手动 commit

适用场景是实验性质的分支在实验成功后, 由于有很多探索型的提交, 用
--squash 可以一次性消灭掉

另外这样做的话需要手动强制删除 dev 分支 `git branch -D dev`

## 高级技巧

### 暂存

使用场景：当你开发一个新特性时，突然有一个临时的小需求，比如修改提示文案。

    git add .
    git stash
    git checkout master
    git commit -am "update notify message"
    git push
    git checkout feature
    git stash pop

### 提取某次提交

使用场景：在分支上开发时，如果分支短时间内不会合并
而主干又需要分支上的一些特性时。使用:

    git cherry pick

### 子模块

使用场景：rails 引擎，内嵌 gem 等

    git submodule add https://github.com/zsh-users/antigen.git common/.antigen
    git submodule init
    git submodule update

## 时空穿越

-   在 git 的世界中，逆转时空根本不是事

### 回到上一次提交的状态

    git reset HEAD~ --hard # 本次提交的内容不复存在
    git reset HEAD~ --soft # 本次提交的内容进入未提交状态

### 修补上一次没写好的提交

    git add .
    git commit --amend
    git push -f # 如果之前 push 过的话

## 差异对比

### 同一分支对比

    git diff master\~ master -- path/to/file

### 同一文件不同分支对比

    git diff master dev -- path/to/file

### 常用参数

-   --word-diff
-   --stat

## 处理冲突

### 一个常见情景

    git push
    To git@git.boohee.cn:ruby/bingo.git
     ! [rejected]        master -> master (fetch first)
    error: failed to push some refs to 'git@git.boohee.cn:ruby/bingo.git'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

### 可选的解决方案

    git pull --rebase
    remote: Counting objects: 54, done.
    remote: Compressing objects: 100% (14/14), done.
    remote: Total 14 (delta 11), reused 0 (delta 0)
    Unpacking objects: 100% (14/14), done.
    From git.boohee.cn:ruby/bingo
       4bf29b0..564947f  master     -> origin/master
    First, rewinding head to replay your work on top of it...
    Applying: add knowledge routes format

### the bad ending

    git status
    rebase in progress; onto 1fa9bbf
    You are currently rebasing branch 'master' on '1fa9bbf'.
      (fix conflicts and then run "git rebase --continue")
      (use "git rebase --skip" to skip this patch)
      (use "git rebase --abort" to check out the original branch)

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

        modified:   app/controllers/admin/base_controller.rb
        modified:   app/controllers/admin/consultors_controller.rb
        new file:   app/views/admin/consultors/update.js.erb
        modified:   app/views/admin/conversations/index.html.erb

    Unmerged paths:
      (use "git reset HEAD <file>..." to unstage)
      (use "git add <file>..." to mark resolution)

        both modified:   app/controllers/api/v1/home_controller.rb

### the best solution

解决冲突后:

    git add .
    git rebase --continue

实在解决不了:

    git rebase --abort

## Dark Knight

### 元芳你怎么看

    git blame /path/to/file

### 轻装上阵

    ☁ /tmp git clone git@github.com:apiaryio/api-blueprint.git Cloning into
    'api-blueprint'... remote: Counting objects: 1497, done. ^CKilled^ by
    signal 2.4% (659/1497), 1.20 MiB | 29.00 KiB/s fatal: The remote end
    hung up unexpectedly

    ☁ /tmp git clone --depth=1 git@github.com:apiaryio/api-blueprint.git
    Cloning into 'api-blueprint'... remote: Counting objects: 32, done.
    remote: Compressing objects: 100% (31/31), done.

如果事后先要拉取完整的历史记录

    git pull --unshallow

### 乾坤大挪移

使用情景: 在仓库A中, 我进行了一连串的 scaffold generation.
然后发现进错项目了, 应该在仓库B中操作的.

    ☁ /repo_a git diff > patch.txt
    ☁ /repo_a mv patch.txt ../repo_b
    ☁ /repo_b git apply patch.txt

## how to make good commit

任何人都可以从提交记录看到你 **做了什么**

但是你提交的代码不能说明 **为什么**

要这么做:

### the "what" way

```
添加方案修改页面
```

- 相比代码 diff, 没有提供额外的信息

### the "why" way

```
顾问可以在后台修改用户的方案
```

- 提供了完成工作的上下文

### use template

    [commit]
      template = ~/.gitmessage

    Why:

    *

    This change addresses the need by:

    *

    # 50-character subject line
    #
    # 72-character wrapped longer description.

### tips

-   不要使用 \`-m\` 参数

-   第一行总结不要超过50个字

-   空一行后进行更详细的论述

## misc

### 好习惯

-   使用最新版的 git

-   开工前先 pull 一下 `git pull`

-   小步提交, 事后合并

-   切出只属于自己的分支, 就能放心的使用 `-f` 参数

### 代码风格

<https://github.com/aseaday/git-style-guide>

### worktree

分别管理 github-pages 和工作分支

    git worktree add -b gh-pages ../project-gh-pages origin/gh-pages

## Thanks

Question?
