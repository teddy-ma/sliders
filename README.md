# 我的 sliders

自己做的小工具, 可以直接把 markdown 文件转换成 revealjs 的 ppt 文件.

配合 gh-pages 可以很方便的制作 ppt.

## 使用方式

### 克隆项目(可以 fork 到自己的仓库)

    git clone https://github.com/teddy-ma/sliders.git
    cd sliders

### 安装依赖(确保 node 环境已安装)

    npm install

### 编辑 slider

在 `src` 目录下新建 `xxx.md` 文件, 然后

    npm run build

来生成 html. 或者使用

    npm run watch

实时修改

### 预览

    npm run preview

然后访问 http://localhost:8000/

### 清理构建

    npm run clean
