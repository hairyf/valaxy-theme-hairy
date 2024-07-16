---
title: Kemper（KPA）输出
date: 2023-02-08 16:00:00
categories:
  - Notes
  - Guitar
tags:
  - guitar
---

KPA 提供了多种输出，可以在录音或演出时使用，每一种输出都可以承载不同类型的信号

首先，有立体声主输出，可以使用 TS 或 XLR 的插孔。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e368dc4757feff333769b5.jpg" />

旁边是直接输出和监听输出，并有独立的 TS 插孔。

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e3692c4757feff3337f980.jpg" />

spdif 输出提供了以数字格式录音的方式，其采样率为 44.1KHz，分辨率为 24 位

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e369904757feff3338a841.jpg" />

## Ground Lift（接地断开）

KPA 为每个模拟输出以及返回输入提供了一个接地断开的开关，如果执行输出中，碰巧遇到了接地的嗡嗡声，按下相应的红色按钮，来解决这些问题。

<!-- more -->

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e36a3d4757feff3339d0d3.jpg" />

## Simple Setup Analog（简单设置模拟）

> 1-2 Tracks（轨道）

使用模拟输出进行录音时的标准设置

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e36aaa4757feff333a8e64.jpg" />

将 KPA 的主输出插孔连接到声卡，在将正确的输出源分配给主输出。

- KPA Main Out L(主输出 L) ------------ Input 1(Audio Interface 声卡)
- KPA Main Out R(主输出 R) ------------ Input 2(Audio Interface 声卡)

按下 OUTPUT 设置输出选项，翻到输出菜单的第一个选项（Main Output 主输出）滚轮调整为 master stereo

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e36ca54757feff333e3647.jpg" />

如果是单声道，则选择 master mono，这种情况下，只需要一根电缆连接到声卡即可。

## Simple Setup Digital（简单设置数字）

> 2 Tracks（轨道）

如果你想使用数字录音，需要将 KPA 连接的 spdif out 连接到声卡的 spdif input

- KPA S/PDIF Out ------------ S/PDIF In(Audio Interface 声卡)

按下 OUTPUT 设置输出选项，翻到输出菜单的第四个选项（SPDIF Output 数字输出）滚轮调整为 master stereo

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e36ebe4757feff3341fc07.jpg" />

## Analog Dry Guitar（模拟干吉他）

> 3 Tracks（轨道）

通常的做法是另外单独录制干吉他信号，这些信号可以重新放大（reamp）而 KPA 可以直接实现，无需使用任何其他设备。

需要设置下面的信号接口：

- KPA Main Out L(主输出 L) ------------ Input 1(Audio Interface 声卡)
- KPA Main Out R(主输出 R) ------------ Input 2(Audio Interface 声卡)
- KPA Direct out(直接输出) ------------ Input 3(Audio Interface 声卡)

“direct out 直接输出” 连接用于发送未处理的吉他 di 信号。

按下 OUTPUT 设置输出选项

<hairy-image style="max-width: 800px" src="https://pic.imgdb.cn/item/63e374c64757feff334dcd32.jpg" />

第一个选项（Main Output 主输出）调整为 master stereo。

第三个选项（Direct Output 直接输出）调整为 Git Analog。

## Advanced Setup（进阶设置）

> 4 Tracks（轨道）

要分开录制放大器和立体声效果的声音，使用下面的信号接口:

- KPA Main Out L(主输出 L)  ------------ Input 1(Audio Interface 声卡)
- KPA Main Out R(主输出 R)  ------------ Input 2(Audio Interface 声卡)
- KPA Monitor Out(监听输出) ------------ Input 3(Audio Interface 声卡)
- KPA Direct out(直接输出)  ------------ Input 4(Audio Interface 声卡)

Main Output 设置为 Delay/reverb wet，这样主输出中就只有延迟和混响的湿信号。

Monitor Output 设置为 Stack，这是来自“Stack 音箱”部分的纯放大器和箱体信号。

Direct Output 设置为 Git Analog，这是直接来自输入的，没有任何效果的纯吉他信号，这些信号可以很好的录制并用于“reamp 重新放大”

## Monster Setup（极限设置）

> 6 Tracks（轨道）

这种方法使用所有可用资源，典型的 80 年代的声音具有延迟、合唱、和混响，一次就可以录制所有内容，但都是在独立的轨道中，而随后可以对这些效果的平衡进行调整。

- KPA Main Out L(主输出 L)  ------------ Input 1(Audio Interface 声卡)
- KPA Main Out R(主输出 R)  ------------ Input 2(Audio Interface 声卡)
- KPA Monitor Out(监听输出) ------------ Input 3(Audio Interface 声卡)
- KPA Direct out(直接输出)  ------------ Input 4(Audio Interface 声卡)
- KPA S/PDIF Out  ------------ S/PDIF In(Audio Interface 声卡)

按下 OUTPUT 设置输出选项

<hairy-image style="max-width: 1200px" src="https://pic.imgdb.cn/item/63e3746c4757feff334d18dd.jpg" />

Main Output 设置为 Delay/reverb wet

Monitor Output 设置为 mod left

Direct Output 设置为 mod left

SPDIF Output 设置为 Git / Stack，包含吉他和音箱部分
