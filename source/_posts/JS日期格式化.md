---
title: "JS日期格式化"
date: 2019年8月29日11:51:45
tags: [JavaScript,前端]
categories: 前端
---

## 前言

+在通过JavaScript中<span style="color:#f59141;background-color:#f8f8f8;padding:3px 6px;">new Date()</span>方法获取当前日期时，获取数据为<span style="color:#f59141;background-color:#f8f8f8;padding:3px 6px;">Thu Aug 29 2019 10:51:06 GMT+0800 (中国标准时间）</span> 。

+ 为实现不同的日期格式，需要将获取的date数据格式化，比如<span style="color:#f59141;background-color:#f8f8f8;padding:3px 6px;">2019-08-29 10:51:06 </span>

+ 在实现过程中会用到<span style="color:#f59141;background-color:#f8f8f8;padding:3px 6px;">getFullYear()
  </span>、<span style="color:#f59141;background-color:#f8f8f8;padding:3px 6px;">d.getMonth()
  </span>等日期处理方法

+ 同时发现如果月份、小时、分钟等为一位数的时候，只会显示为<span style="color:#f59141;background-color:#f8f8f8;padding:3px 6px;">2019-8-29 10:8:6
  </span>，为实现完整两位数显示此处可用slice方法解决
+ 关键字：<span style="background-color:#5bc0de;color:#fff;padding:3px 6px;border-radius:6px;">日期格式化</span>、<span style="background-color:#5bc0de;color:#fff;padding:3px 6px;border-radius:6px;">slice()</span>、<span style="background-color:#5bc0de;color:#fff;padding:3px 6px;border-radius:6px;">join()</span>



## 方法

+ `date.getFullYear()`   获取年
+ `date.getMonth()`         获取月，为基于0的值（0表示一年中的第一月）
+ `date.getDate() `         获取日，一个月中的哪一日（从1--31）
+ `date.getHours()`         获取小时数
+ `date.getMinutes()`     获取分钟数
+ `date.getSeconds()`     获取秒数
+ `array.slice(begin,end)`   可提取字符串的某个部分，并以新的字符串返回被提取的部分
+ - `begin`表示提取起始处的索引，如果参数为负数，表示从倒数第几个开始提取
+ - `slice(-2)`表示提取倒数第二个元素到最后一个元素
  
  - `end`表示提取终止处的索引，`slice`会提取原数组中索引从`begin` 到`end`的所有元素（包含`begin`，但不包含`end`）
  
  - `slice(1,4)` 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
  
  - 其中`begin`和`end`皆默认为0
+ `join(separator)` 把数组中的所有元素转换为一个字符串
+ - `separator` 可选，表示元素连接时添加的分隔符
  - 比如 `[2019,08,29].join("-")`，返回为"2019-08-29"；`[2019,08,29].join("")`，返回为"20190829"



## 源码



### 时间格式化函数

```js
function format(d) {
    //参数d必须为Date对象，否则会提示getFullYear()等方法not a function
    //可通过new Date("2018-8-8")的方式将日期字符串转化为日期对象
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-')
        	+ ' '
        	+ [('0' + d.getHours()).slice(-2), 
           	('0' + d.getMinutes()).slice(-2), 
           	('0' + d.getSeconds()).slice(-2)].join(':')
}
```



### 赋值

```js
let date = format(new Date());    //格式化当前时间
//输出："2019-8-29 12:27:39"
```

或者

```js
let d = new Date("2018-08-08");
let date =  format(d);
//输出："2018-8-8 08:00:00"
```

