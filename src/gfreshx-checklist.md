# Gfreshx checklist

# 之前问题

-   页面验证没法自动化，要靠肉眼检测
-   漏掉了重要的状态改变事件


# 引入集成测试

-   Integration Testing (Cucumber)
-   直接 html 内容进行验证（需要给标签添加定位用的 class 或 id）


# 记录所有事件

-   关注所有会改变系统状态的行为，测试状态改变后的情况


## 状态


### 项目相关

-   创建项目（库存，初始价格）
-   转换状态（preorder -> market, bid -> market）（页面数据）


### 用户相关

-   注册
-   充值【四种方式】 (balance)
-   取款 (balance)
-   利息 (balance)


### 都相关

-   购买 (库存， balance)
-   出售 (库存， balance)
-   卖出 (库存， balance)
-   分红 (分红比例， balance)