---
id: bootstrap-file-input-in-firefox
title: Bootstrap file input in Firefox
date: 2016-01-22T09:20:46+00:00
categories:
  - CSS
tags:
  - Bootstrap
  - Firefox
---
默认的Bootstrap文件上传框在Chrome/Firefox/IE上的表现都不一样，如下所示。 代码：

```
<input class="form-control" type="file">
```

Chrome:

![](https://cloud.githubusercontent.com/assets/5960988/25607295/66f2cc88-2f48-11e7-9268-474d66db6b65.png)

Firefox:

![](https://cloud.githubusercontent.com/assets/5960988/25607296/6715745e-2f48-11e7-80ad-aa54e231e8a8.png)

IE:

![](https://cloud.githubusercontent.com/assets/5960988/25607294/66e5382a-2f48-11e7-9386-cb058c8c7244.png)

先忽略掉文字表述的差异（由浏览器所使用语言引起），可以看到File input在Chrome和FF下的表现比较相似，IE则差距略大。但是至少Chrome和IE是可以正常显示其样式的，FF则出现了奇怪的样式问题，好像因为按钮太大而超出了输入框。 解决方法也很简单，最快捷的：

```
.form-control {
    height: auto;
}
```

但是这个方法可能会影响到其它输入框组，可以稍作修改：

```
.form-control[type=file] {
    height: auto;
}
```

这样CSS就会自动选择类型为file的输入框并且添加以上样式。虽然IE家族对CSS属性选择器的支持有限制（7/8）或者完全不支持（6），但是实际上并不影响。因为Bootstrap最低也只能支持到IE 9或IE 8（添加额外库），所以这个方法已经足够了。 修改后的Firefox（Chrome/IE无变化）：

![](https://cloud.githubusercontent.com/assets/5960988/25607297/67293e1c-2f48-11e7-83d5-b3ac04273edd.png)
