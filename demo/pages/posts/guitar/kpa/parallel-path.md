---
title: Kemper（KPA）并行路径
date: 2023-02-09 10:18:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

在 KPA 中，可以选择对音频使用并行路径，次功能会将信号流分为了个独立的路径

- Path 1: Input - Stomp (A, B) - Output（输出）
- Path 2: Input - Stomp (C, D) - Stack（音箱） - Effects - Output（输出）

要激活平行路径选项，需要按 RIG 按钮进入音色菜单

<hairy-image src="https://pic.imgdb.cn/item/63e45afe4757feff3388cf53.jpg" />

使用 < PAGE > 按钮翻到第四页：Parallel signal path

<hairy-image src="https://pic.imgdb.cn/item/63e45c064757feff338ac39c.jpg" />

按第一个按钮激活平行路径

<hairy-image src="https://pic.imgdb.cn/item/63e45c334757feff338b17fc.jpg" />

“Parallel Path Mix” 允许在信号的两个部分之间进行平衡。

<!-- more -->

<hairy-image src="https://pic.imgdb.cn/item/63e45c6e4757feff338b7b68.jpg" />

- 将值设置为 `-5` 时，只有第一部分（Path 1）的声音
- 将值设置为 `+5` 时，只有第二部分（Path 2）的声音

当值越低时，Path 1的声音就更明显，值越高时，Path 2 的声音就更明显。

## Dirty Bass（失真贝斯）

平行路径对于贝斯手来说是一项很棒的功能，可以将贝斯 Path 1 信号直接发送到输出，而不经过放大器或效果器，然后使用 Path 2 信号部分通过失真的放大器来增强它。从而达到将清晰的直接声音与放大器产生的失真声音进行混合和匹配。

## Fuzzy tone（法兹音色）

如果喜欢比较特别的失真音色，平行路径是一个很好的试验场。

例如：

Path 1 激活 STOMPS（A、B）单块

- 单块 A 使用的是失真
- 单块 B 是噪音门，用于抑制失真产生的噪音

Path 1 的信号直接发送到输出（-5）听起来非常刺耳

Path 2 发送到重失真的 mesa/boogie 音箱克隆，激活单块 STOMPS（C）

- 单块 C 在放一个八度效果器。

## Wall Sound（Wall 音色）

此功能的另外一个有用的应用场景，在失真音色中混合一个干净的吉他音色，可以使用此技术来重现 《another brick in the wall》的 David Gilmour 经典独奏音色

Path 1 激活 STOMPS（A、B）单块

- 单块 A 压缩效果器
- 单块 B 噪音门

Path 2 则是带有混响和延迟的失真声音

- Guitar - Compressor（C）- Gate（D）- Stack - Chorus - Delay - Reverb - Output
