---
title: Kemper（KPA）效果循环
date: 2023-02-08 19:03:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

KPA 可以在吉他和 KPA 直接连接一个或多个单块修改器，但如果将其放在 KPA 的效果链中间，就可以保持这个单块的状态，并通过 remote 进行控制。

为此，得先使用后面版上的 send 和 return 来连接单块修改器。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e39b874757feff338e5414.jpg" />

使用 STOMPS 或 EFFECTS 中的一个位置放置单块并激活效果循环

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e39bd64757feff338f0c2c.jpg" />

一般有三种不同类型的循环单块。

<!-- more -->

## Loop Mono（循环单声道）

要连接但声道单块，可以使用 loop mono stomp，首先将单块连接到 KPA，将 KPA 的 send 连接到单块的输入，然后 return 连接单块的输出。

- Send（profiler） --------- Input（Effect-Pedal 单块）
- Return（profiler） --------- Output（Effect-Pedal 单块）

为循环单块选择合适的位置，可以是放大器之前的“stomps”上的插槽之一，也可以是“effects”的任意插糟。

插入单块后，轻轻下 A 按键，屏幕上将显示对应的菜单，使用 “type 类型”旋钮，选择 loop mono，可在列表的最后找到它。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e39ded4757feff3392b5bc.jpg" />

现在外部单块就成为效果链的一部分了。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e39e3e4757feff33934684.jpg" />

Loop mono 提供了三个参数：

- “Mix 混合” 用于平衡 KPA 信号和外部单块信号的比例

- “Ducking 闪避” 用于拨弦力度控制效果的深度
  如果选择了较低的值，轻轻拨弦，就听不到循环单块的声音。

- “Volume 音量” 用于控制发送到外部单块的信号电平

## Loop Distortion（循环失真）

如果想使用过载或失真单块，则应该选择 loop distortion stomp，同样，先将单块连接到 KPA

- Send（profiler） --------- Input（Effect-Pedal 单块）
- Return（profiler） --------- Output（Effect-Pedal 单块）

将过载单块放在“stomps 单块”的 B 中，因为 A 已经有了循环单块。

插入单块后，轻轻下 B 按键，屏幕上将显示对应的菜单，使用 “type 类型”旋钮，选择 loop Distortion，可在列表的最后找到它。

Loop mono 只有一个参数，就是 “Volume 音量”，如果想提升单块的输入，可以增加 Volume 的值，但在大多数情况下，最好设置为 0。

## Loop Stereo（循环立体声）

如果想在信号链中使用立体声效果设备，必须使用“alternative input 替代输入" 作为第二个返回。

下面是线缆连接方法：

- Send（profiler） --------- Input（Effect-Pedal 单块）
- Return（profiler） --------- Output L（Effect-Pedal 单块）
- Alternative In（profiler） --------- Output R（Effect-Pedal 单块）

立体声循环提供了单声道循环相同的参数

## Remote（远程控制踏板）

使用效果器将外部效果理解到 KPA 的最大好处是，可以使用远程控制踏板来控制效果循环的状态。

例如在 stomp 的 A 中分配一个效果器，按住 A 并踩下相应的踩定，即可绑定效果。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e3a2004757feff3399bc00.jpg" />
