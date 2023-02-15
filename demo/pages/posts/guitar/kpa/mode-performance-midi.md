---
title: Kemper（KPA）表演模式 - MIDI
date: 2023-02-09 16:00:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

在演奏模式下，可以发送 MIDI 程序更改，以切换外部效果设备上的预设。

例如我们使用 KPA 通过 MIDI 来控制外部 Whammy 单块

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e4ae904757feff332f5bf8.jpg" />

当然也可以使用 KPA 内部的效果器来替代，不过也会有人想继续使用他们的单块效果器。

在这种情况下，KPA 则扮演着集线器的角色，通过 MIDI 来控制外部设备。

KPA 可以控制两个的外部效果器，通过连接 KPA 背面的 MIDI OUT 和 MIDI THRU：

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e4af444757feff3330a916.jpg" />

通过 MIDI 连接外部设备有许多选项，例如以串行方式连接多个设备：

- Profiler MIDI Out --------- Effect 1 MIDI In (CH 1)
- Effect 1 MIDI Out --------- Effect 2 MIDI In (CH 2)

并将每个设备设置为不同的 MIDI 通道。

要连接 2 个设备，应该将 KPA 的 MIDI OUT 连接到其中的 1 个，将 KPA 的 MIDI THRU 连接到另外一个设备的 MIDI In：

- Profiler MIDI Out --------- Effect 1 MIDI In
- Profiler MIDI Thru --------- Effect 2 MIDI In

将 MIDI THRU 更改为第二个 MIDI 输出。

<!-- more -->

## Example（例子）

通过 whammy 单块连接到 MIDI OUT，MIDI THRU 则没有使用。

首先接入 Whammy，替换 STOMPS A：

Profiler Direct Out --------- Whammy Input
Profiler Return --------- Whammy Output

在轻按 STOMPS A，使用 TYPE 旋钮选择末尾的 Loop Mono 算法。

使用预设：Mix：100%，Ducking 和 Volume 为 0，则可以听到外部 Whammy 的效果了。

> TODO
