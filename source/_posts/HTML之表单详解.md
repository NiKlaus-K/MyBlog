---
title: "HTML之表单详解"
date: 2019-08-20 08:10:23
tags: [前端,HTML]
categories: 前端
---

## 标签label

```html
<div class="username">
    <label for="username">姓名</label>
    <input id="username"  type="text" name="username" value="Oliver">
</div>
```

* <span style="color:#f59141;background-color:#f8f8f8;"> label </span>是为了给一个input输入框前边加上可点击的说明文字
* <span style="color:#f59141;background-color:#f8f8f8;"> label </span>里边的<span style="color:#f59141;background-color:#f8f8f8;"> for </span>和<span style="color:#f59141;background-color:#f8f8f8;">  input  </span>里边的<span style="color:#f59141;background-color:#f8f8f8;"> id </span>连用，是为了：正常情况下，我要在这个输入框里边输入的话，我仅仅点击前边的说明文字是没反应的，我必须要点击这个输入框才能进入可输入模式。而这里的 label for  和 id  的连用就可以实现点击输入框前边的输入文字也可以进入输入模式。（注意：有 for 就必须有一个 id）

## 选项checked

以下哪种写法会导致 checkbox 被勾选：<br>

✅ `<input type="checkbox" checked=false >` <br>

✅ `<input type="checkbox" checked=true >` <br>

✅ `<input type="checkbox" checked="" >` <br>

✅ `<input type="checkbox" checked>` <br>

❌ `<input type="checkbox" >` <br>

+ <span style="color:#f59141;background-color:#f8f8f8;">   type="radio"  </span> ：单选框框
+ <span style="color:#f59141;background-color:#f8f8f8;">type="checkbox"  </span> ：复选框

## 其他表单元素

###  input 之<span style="color:#f59141;background-color:#f8f8f8;">   type="file"  </span>

```html
<div class="file">
  <input type="file" name="myfile" accept="image/png">
</div>  
```

+ 用于文件上传
+ <span style="color:#f59141;background-color:#f8f8f8;">   accept="image/png"  </span> accept 属性可以用来约束上传文件的格式，例如这里只能上传 image/png （但实际工作中，我们前端这样单方面的限制是不靠谱的，还需要后端也做相应的限制）。

### input 之<span style="color:#f59141;background-color:#f8f8f8;">   type="hidden"  </span>

```html
<input type="hidden" name="csrf" value="123456oliver">
```
+ 这一组代码在页面显示上没有任何效果，但点完“提交”后，这组代码里边的相关参数是会提交给后台的；
+ 这组代码的作用：
  1. 暂存一些信息。比如在 <input type="hidden" name="" value=""> 里边埋了一个值，下次我们要用的时候，就直接可以定位到这个元素去获取它的值，获取到后就可以用了，但用户什么都不知道；
  2. 由于可以暂存信息，那么在使用一些安全策略时，可以用到这个功能—— csrf 攻击。