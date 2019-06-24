# Hackintosh (黑苹果) 不折腾指南

程序员黑苹果入坑

author: Teddy <teddy@gfresh.io>

## 什么是黑苹果

Macintosh -> Hackintosh

Any non-Mac system that is made to run the Apple operating system is referred to as Hackintosh.

## 为什么做这次分享

- macOS 的确好用
- 家里摆一台苹果台式机没必要
- 很多程序员不是很精通电脑硬件
- 国内社区的资料太复杂

## 免责声明

- 在非苹果认证的设备上安装 macOS 是违反用户协议的

- 这次分享的内容肯肯定不是最优解，细节不保证完全正确，但是保证能用

## 硬件选购

### CPU

Intel 7,8,9 代的 cpu, 一般选 i5 或者 i7

### 主板

主流主板都能驱动，不过板载 wifi 基本没有能用的，买中端水平就行，高端的功能驱动不了也浪费（双系统除外）

### 内存

苹果自家的内容很贵，买黑苹果可以 16G 起步不嫌多，内存频率参考 CPU 和主板支持

### 硬盘

主流 SSD 都可以，建议 256 以上，macOS 不需要分区，一块盘搞定就行

### 电源

建议多花点钱买好点的，功率主要参考显卡，跟着显卡的建议功率走

## 显卡的选购

Mojave 以后苹果貌似放弃了 Nvidia 的支持，强烈建议使用 AMD 显卡。

### 低分辨率

CPU 有集显就用集显，没有就买低端显卡

### 高分辨率/多屏

买中端显卡，RX570/RX580, 注意不要买带 2048sp 字样的，品牌推荐蓝宝石，不要买 XFX

### 游戏（双系统）

Vega 56 和 Vega 64 (macOS 下使用和 RX580 没区别，只建议双系统游戏的情况购买)

## 系统安装

中文社区的资料都特别复杂，很容易劝退，这里我介绍的是傻瓜式安装，只要跟着走就行。

### 前期准备

一个 U 盘，一个已经能工作的 macOS 系统，重要的资料站，www.tonymacx86.com 注册并阅读

https://www.tonymacx86.com/threads/unibeast-install-macos-mojave-on-any-supported-intel-based-pc.259381/

### 自己踩的坑

安装后重启 USB 键盘鼠标失灵，解决方案：插入U盘引导系统，记得安装 multibeast 的 USB 补丁。

## 双系统

分两块硬盘是最简单的方式，网上能搜到的要分区引导的贴子都太复杂了。双硬盘步骤极其简单。

1. 拔掉所有硬盘，仅保留一块安装 windows
2. 拔掉所有硬盘，仅保留另一块安装 macOS
3. 插上所有硬盘，开机进入 BIOS, 把 macOS 所在硬件设为第一启动盘

Hackintosh 的 Clover 引导工具会自动加载 windows 的启动项

## 总结

1. 还是建议手上要有白苹果设备，这样才能体验完整的苹果生态，哪怕配置低点也能作为应急方案。
2. 黑苹果稳定性差，只建议作为提高工作效率的工具，不建议绑定和白苹果设备同一 Apple ID, 要多备份。
3. 不要追求完美黑苹果
