# 打造你自己的技术雷达

author: 马陆骋 <malucheng@boohee.com>

http://insights.thoughtworkers.org/build-your-own-technology-radar/

## 什么是技术雷达

> 一份评估既有技术与新生技术的风险和利益的动态文档

[2016 年最新的 ThoughtWorks 技术雷达](http://insights.thoughtworkers.org/wp-content/uploads/2015/12/technology-radar-apr-2016-cn.pdf)

## 为什么需要技术雷达

- 可视化数据对人类更友好
- 跟踪将要或已经到来的技术
- 促进交流和开阔视野

## 规则

- 象限区分类型
- 坐标区分状态

### 象限

- 技术
- 工具
- 平台
- 语言和框架

### 环(半径)

- 采用
- 试验
- 评估
- 暂缓

### 备注

- 雷达跟踪的是将要到来的事物(习以为常的东西不需要收入)
- 雷达不具备时间维度的属性(可以隔一段时间重新创建一个雷达)
- 雷达的象限,环和内容都可以自定义(e.g 读书雷达)

## 技术上如何实现?

D3.js

![D3](../assets/images/build-your-own-technology-radar/d3.png)

## D3 是什么?

JavaScript 的数据可视化库.

## 制作步骤

1. 构建数据
2. 获取数据
3. 绑定元素
4. 添加样式
5. 持续集成

### 构建数据

https://github.com/teddy-ma/technology-radar/blob/master/build.js

从数据源中获取数据并结构化

### 获取数据

```javascript
var data = [];
$.ajax({
    url: "./data/items.json",
    type: 'get',
    dataType: 'json',
    success: function(ret) {
        data = ret;
    }
});
```

### 绑定元素

```javascript
bgsvg = d3.select('body').append('svg');
bgsvg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return d.x
    })
    .attr("y", function(d, i) {
        return d.y
    })
    .attr("width", item_width).attr("height", item_height)
    .attr("opacity", 0.3)
```

### 添加样式

```javascript
render_circle();
render_items();
render_axis();
```

### 持续集成

```yaml
language: node_js
node_js:
- 5.10.1
script:
- git config --global user.email "mlc880926@gmail.com"
- git config --global user.name "Ma Lucheng"
- git config --global push.default simple
- git remote add upstream "https://${GH_TOKEN}@github.com/teddy-ma/technology-radar.git"
- git fetch upstream
- git reset upstream/gh-pages
- npm install
- npm run build
- rm .gitignore
- git add -A .
- git commit -m "update from travis"
- git push -q upstream HEAD:gh-pages
```

## 内容上如何实现?

- 列出自己现有的技术栈并分级
- 列出自己关注的技术栈并分级
- 为相应的技术添加注解

## 不同的雷达

- [ThoughtWorks读书雷达](http://insights.thoughtworkers.org/wp-content/uploads/2015/12/thoughtworks%E8%AF%BB%E4%B9%A6%E9%9B%B7%E8%BE%BE%EF%BC%882016%EF%BC%89.pdf)

- [自己的雷达](https://teddy-ma.github.io/technology-radar/)
- 公司的雷达 (TODO)

## Thanks & Question
