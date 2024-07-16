---
title: Kemper（KPA）表情踏板
date: 2023-02-10 18:00:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

可以直接将表情踏板连接到 KPA，而 REMOTE 上有四个额外的表情踏板输入，出厂默认的踏板分配如下：

- Pedal 1（Profiler） --------- Volume（音量）
- Pedal 2（Profiler） --------- Morph（渐变）
- Pedal 3（REMOTE） --------- Volume（渐变）
- Pedal 4（REMOTE） --------- Morph（渐变）
- Pedal 5（REMOTE） --------- Wah（哇音）
- Pedal 5（REMOTE） --------- Pitch（音高）

<!-- more -->

可以根据需求在系统菜单中更改和分配。

## Volume Pedal（音量踏板）

一些有用的音量踏板设置可以存储在各个音色中，按 RIG 按钮，然后翻到音量踏板设置页面。

<img src="https://pic.imgdb.cn/item/63e612f94757feff33267a45.jpg">

`Location` 设置音量踏板在信号链中的实际位置。

音量踏板在“Pre Stomp单块前”和“Post Stomp单块后”会影响失真度。

如果选择“Pre Effect效果前”或“Post Effect后效果” 踏板则不再影响音箱的增益，而是控制整体音量。

如果是“Pre Effect效果前”，踏板不会影响延迟和混响的信号。

如果是“Post Effect效果后”，音量踏板位于信号端末端，混响和延迟信号均受影响。

<img src="https://pic.imgdb.cn/item/63e614064757feff3328bef6.jpg">

“range范围”参数设置音量踏板的控制范围。

如果将其设置为 `-5`,踏板处于脚跟位置时屏幕上自动显示调音表。

如果将range设置为 `-4.9`，踏板处于脚跟位置时没有任何信号。

可以通过在调音表页面禁用 `Tuner at volume 0` 来阻止此行为。

进入调音模式，然后按软按钮取消选中即可。

<img src="https://pic.imgdb.cn/item/63e614a64757feff332af448.jpg">

也可以使用音量踏板调整独奏的音量，如果将范围设为 `-2`，则踏板处于跟位置时音量不会降为 0。

此时，大约是总音量的 60%，在脚跟位置，则有 100% 的独奏音量。

如果将 `range` 设为正值时，踏板的左右就像推子。

在脚跟位置，可以获得正常的音色音量，在脚尖位置，将获得电平增强，设置为 `+2` 时，可最大增加 `10dB` 电平，踏板最大增强电平为 `24dB`。如果激活音量踏板锁定功能，则会对所有音色生效。

## Wah Pedal（哇音踏板）

哇音踏板的参数设置在哇音效果的编辑菜单中，除了标准的哇音效果，KPA 还有其他类型的哇音效果，例如元音滤波器或哇音环形调制器，都可以由一个踏板控制。

在这个例子里，哇音踏板位于 STOMP A，因此按住 A 按钮，直到屏幕上显示编辑菜单。

<img src="https://pic.imgdb.cn/item/63e617514757feff33341b66.jpg">

在第二页，可以设置 “Pedal Mode 踏板模式”

<img src="https://pic.imgdb.cn/item/63e6177c4757feff3334891b.jpg">

- 设置为 `Touch` 时，踏板被禁用，哇音效果由演奏的动态进行控制。
- 设置为 `On` 时，可以由踏板进行连续控制。
- 设置为 `Bypass@Stop` 时，哇音会在踏板停止移动时自动关闭。
- 设置为 `Bypass@Hell` 时，哇音会在踏板处于脚跟后处自动关闭。
- 设置为 `Bypass@Toll` 时，跟 Hell 差不多也是处于脚跟后处自动关闭。

## Morph Pedal（渐变踏板）

使用 Morphing 功能，可以在一个音色里面无缝融合两种声音。

例如使用踏板控制失真值，首先设置踏板脚跟位置的增益值，在设置脚跟位置的增益值。

<img src="https://pic.imgdb.cn/item/63e618c04757feff333919fa.jpg">

然后就可以使用踏板在该范围内无缝切换了，不需要为渐变进行特殊的设置，KPA 会自动记住所有内容，记得不要忘记保存音色。

## Size XL：4 Pedals（加大号：四个踏板）

控制全部功能，需要 4 个踏板，每个功能都由专用踏板控制，将踏板直接连接到 REMOTE，并使用默认出厂设置。

<img src="https://pic.imgdb.cn/item/63e619724757feff333c83ef.jpg">

踏板3:音量、踏板4:渐变、踏板5:哇音、踏板6:音高

踏板的分配设置在系统菜单中，可以按 SYSTEM 系统按钮，翻到 `<Pedal 3>` 这个页面

<img src="https://pic.imgdb.cn/item/63e619cf4757feff333ddd83.jpg">

这就是 3 号踏板的设置页面。

<img src="https://pic.imgdb.cn/item/63e619ed4757feff333e4ab7.jpg">

- “Mode模式”设置为“Pedal Type 1踏板类型1”。
- “Function功能”设置为“Volume Pedal音量踏板”

可以使用这两个旋钮更改参数，如果连接了新的踏板，必须要对其进行校准。

点击软按钮 1，然后从后往前踩踏板，小的进度条会显示踏板的运动状态。

<img src="https://pic.imgdb.cn/item/63e61ab44757feff3340aec7.jpg">

在往下翻页、可以依次找到渐变、哇音、音高的踏板设置。

## Size L: 3 Pedals（加大号：三个踏板）

可以降低配置，使用一个踏板来交替控制音高和渐变，但也可以让音色同时使用两者，则同时控制音高和渐变。

<img src="https://pic.imgdb.cn/item/63e9978a4757feff3394ac26.jpg">

## Size M：2 Pedals（中号：两个踏板）

2 个踏板是一个很好的折衷方案，在舞台上可以节省空间，但依旧可以使用 2 个踏板控制所有参数，在这种情况，哇音也被分配给了渐变踏板。现在3号踏板控制音量，4号踏板控制哇音、渐变和音高。

<img src="https://pic.imgdb.cn/item/63ea02f24757feff33615272.jpg">

现在如果哇音在音色中被激活，即可由渐变踏板控制，也可以同时控制两个效果，只要在音色中设置。
