---
title: Kemper（KPA）循环录音机
date: 2023-02-10 12:00:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

将循环录音机放置在信号流不同的位置，需要按“SYSTEM系统”按钮，然后使用“PAGE页面”按钮翻到 Remote 设置页面：

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e5bb3d4757feff339ab780.jpg" />

屏幕的右上角则会显示循环录音机的位置。

如果显示 `Looper Loc.: Pre` 则循环录音机直接在输出后面

这意味着`<Stomp>``<Stack>` 和 `<Effect>` 这些模块的效果都没有被录制：

`Input - Looper - Stomp - Stack - Effects - Output`

当您要编辑音色而不必同时弹奏吉他时，可以使用 `Looper Loc.: Pre` 设置。

如果设置 `Looper Loc.:Post`，循环录音机会录制整个信号链的内容，包括所有单块和效果。

`Input - Stomp - Stack - Effects - Looper - Output`

可以使用这种方法，首先录制一轨清音的信号，然后加入一轨失真音色。

<!-- more -->

## Record & Stop（录音|停止）

REMOTE 的 Looper 踩钉可以激活循环录音机，LED 钉亮起，则代表循环录音模式已经被激活。

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e5bef04757feff339fe5a3.jpg" />

此时 1 号踩钉被用于录制音轨，踩下 1 号踩钉，开始录制第 1 轨循环录音，并确定循环录音的起点。

再踩下，将设置循环录音的终点，同时激活回放模式。可以踩下 2 号踩钉，来停止回放。

## Overdub & Undo（叠录|撤销）

一共有三个用于特殊用途的踩钉，踩钉 3 号，只要踩下这个踩钉，就会触发之前的循环录音。

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e5c04e4757feff33a1c34e.jpg" />

如果在回放循环录音时踩下此踩钉，循环录音将从头开始播放，在现场演出时，需要重新同步循环录音时非常有效。

踩钉 4 号，可以使循环录音反向播放。

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e5c2c64757feff33a5bcdd.jpg" />

循环录音未回放时，踩下踩钉时则下方的 LED 会亮起，在按下 1 号踩钉播放循环录音，则开始反向播放。

踩钉 5 号，用于半速播放循环录音。

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e5c36f4757feff33a69d0b.jpg" />

循环录音未播放时，踩下踩钉时则下方的 LED 会亮起，在按下 1 号踩钉播放循环录音，则以一半的速度播放。

> 如果已经开始播放，将立即切换为反向或半速播放

## Direct Overdub（直接叠录）

如果在设置循环录音结束点后，继续踩住踩钉 1 号，循环录音机则会立即进入叠录模式

## Double Speed（倍速）

可以使用半速功能创建倍速版本，在录制开始前，踩下踩钉 5 号，录制时间将会翻倍，延长到 60 秒，录制结束后取消半速功能，可以以两倍的速度播放循环录音。

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e5c5274757feff33a8ce78.jpg" />
