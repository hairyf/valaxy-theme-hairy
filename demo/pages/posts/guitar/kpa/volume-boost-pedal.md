---
title: Kemper（KPA）音量&推子踏板
date: 2023-02-14 14:00:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

如果使用音量踏板功能，需要连接表情踏板，要么连接到 REMOTE 上，要么连接到 KPA 背后的 Switch/Pedal 开关/踏板插孔上。

<hairy-image src="https://pic.imgdb.cn/item/63eb3309f144a010072c5429.jpg" />

按 System 按钮，翻页到对应的踏板页面，这里将踏板连接到了 REMOTE 上的 3 号孔，所以我们翻到 Padal 3 上。

将 Mode 设置为 Pedal Type 1，适用于所有标准的表情踏板，将 Function 设置为 Volume Pedal（音量踏板）现在，可以通过连接的表情踏板控制所有音色的音量。

可以单独为每一个音色的音量踏板设置两个参数，按下 RIG 按钮，然后使用 PAGE 按钮转到音量踏板设置页面。

<!-- more -->

<hairy-image src="https://pic.imgdb.cn/item/63eb33eaf144a010072e22a0.jpg" />

- Range 参数设置踏板扫动覆盖的跨度，中间没有效果，设置负值时，踏板的作用类似于常规音量的踏板，设置为正值时，就将音量踏板变成了推子踏板。
  - 设置为 -5 时，踏板在脚跟的位置没有任何信号。
  - 设置为 -2 时，踏板在脚跟的位置还有 60% 的音量，可以利用这个设置切换节奏和 solo 时的音量。
  - 设置为 5 时，踏板在脚跟的位置没有任何信号，推满音量可提高 24dB。

可以为每个音色单独设置，但如果喜欢全局设置，请按软按钮 1，将音量踏板锁定，这样就对每个音色生效了。

<hairy-image src="https://pic.imgdb.cn/item/63eb35bcf144a0100731f35d.jpg" />

通过踏板在信号链中不同的位置，可以影响音色的表现。

- Location 参数确定音量踏板在信号链中的位置，可选项：Off、Input、Pre Stack、Post Stack、Output
  - 设置为 Post Stack，则音量踏板位于 Stack 后，在效果之前（将音量踏板作为主音量踏板，不影响单块A-D、失真、延迟混响）
  - 设置为 Output，则位于信号链的末端（不影响单块A-D、失真，而延迟混响会被切断）
