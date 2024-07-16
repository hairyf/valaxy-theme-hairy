---
title: NodeJS 加密系统（crypto）
date: 2020-05-04 14:00:00
categories:
  - Server
  - NodeJS
tags:
  - NodeJS
---

`crypto` 模块提供了加密功能，实现了包括对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。`Hash` 类是用于创建数据加密哈希值的工具类。

查看 crypto 模块支持的 hash 函数：`crypto.getHashes()`

<!-- more -->

~~~js
[
  'RSA-MD4',
  'RSA-MD5',
  'RSA-MDC2',
  'RSA-RIPEMD160',
  'RSA-SHA1',
  'RSA-SHA1-2',
  'RSA-SHA224',
  'RSA-SHA256',
  'RSA-SHA384',
  'RSA-SHA512',
  'blake2b512',
  'blake2s256',
  'md4',
  'md4WithRSAEncryption',
  'md5',
  'md5-sha1',
  'md5WithRSAEncryption',
  'mdc2',
  'mdc2WithRSA',
  'ripemd',
  'ripemd160',
  'ripemd160WithRSA',
  'rmd160',
  'sha1',
  'sha1WithRSAEncryption',
  'sha224',
  'sha224WithRSAEncryption',
  'sha256',
  'sha256WithRSAEncryption',
  'sha384',
  'sha384WithRSAEncryption',
  'sha512',
  'sha512WithRSAEncryption',
  'ssl3-md5',
  'ssl3-sha1',
  'whirlpool'
]
~~~

## HASH 加密（SHA-256）

hash 算法加密使用 `hash.update()` 方法将要计算的数据以流（stream）的方式写入，流输入结束后，使用 `hash.digest()` 方法计算数据的 hash 值解析为字符串。

~~~js
const crypto = require('node:crypto')
// 创建哈希函数 sha256
const hash = crypto.createHash('sha256')

// 输入流编码：utf8、ascii、binary（默认）
hash.update('some data to hash', 'utf8')
// 输出编码：hex、binary、base64
console.log(hash.digest('hex'))

// 输出
// 6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
~~~

### PBKDF2 加密(SHA-256)

PBKDF2 算法加密通过多次 hash 来对密码进行加密。原理是通过 str(加密字符串) 和 salt(盐值) 进行 hash(哈希值加密)，然后将结果作为 salt 在与 str 进行 hash，多次重复此过程，生成最终的密文。

PBKDF2 是 Node.js 的 crypto 模块原生支持的标准方法。

同步函数示例：

~~~js
const crypto = require('node:crypto')
// crypto.randomBytes() 方法生成 32 字节的随机数 - 这里作为盐值
const salt = crypto.randomBytes(32)
// 参数列表：(未加密字符串, 盐值, 迭代次数, 密钥长度, 摘要函数-hash加密)
const result = crypto.pbkdf2Sync(password, salt, 4096, 512, 'sha256')
~~~

## SALT 盐值加密(MD5)

盐值就是随机数值，用于在计算密码的哈希值时插入特定的字符串，加强数据的安全性，可以有效抵御诸如字典攻击、彩虹表攻击等密码攻击媒介。

常见的 Hash 算法使用示例：

~~~js
const crypto = require('node:crypto')
const md5 = crypto.createHash('md5')
const str = '123456'
// 直接对密码原文进行 Hash
md5.update(str)
console.log(md5.digest('hex'))
// 输出
// e10adc3949ba59abbe56e057f20f883e
// 可以通过 <https://www.cmd5.com/> 反向查询得到密码，不够安全。
~~~

加“盐”的 Hash 算法：

~~~js
const crypto = require('node:crypto')
const md5 = crypto.createHash('md5')

// 生成强加密的伪随机数
const buf = crypto.randomBytes(32)
const salt = buf.toString('hex')

// 将密码拼接上任意长度的随机字符串后，再进行 Hash
const password = '123456'
md5.update(password + salt)
console.log(md5.digest('hex'))
// 输出
// a43bfb9f12b6f69ad9fcd4338a981efbed2569a
~~~

### HMAC 加密(SHA-1)

HMAC 算法加密是将散列算法与一个密钥结合在一起，以阻止对签名完整性破坏，其实就是类似于上面的提到的md5密码中加盐道理是类似的。

~~~js
const crypto = require('node:crypto')
// 创建hmac_hash函数(算法, 密匙)
const hmac = crypto.createHmac('sha1', 'BDvDYUmfdykkBLgX')
// 对字符串进行 hash 加密
hmac.update('data to crypt')
// 解析hash为字符串格式
console.log(hmac.digest('hex'))
// 输出
// a43bfb9f12b6f69ad9fcd4338a981efbed2569ae
~~~

## Cipher（加密）和 Decipher（解密）

Cipher类用于加密数据，属于对称密钥加密，假设通信双方 A、B，通讯方 A 使用 key 对明文进行加密传输，通讯方 B 接收到密文后，使用同样的 key 进行解密得到明文。Cipher 加密算法字符串格式是 `算法-秘钥长度-模式` node.js 支持的有以下

~~~js
[
  'aes-128-cbc',
  'aes-128-cbc-hmac-sha1',
  'aes-128-cbc-hmac-sha256',
  'aes-128-ccm',
  'aes-128-cfb',
  'aes-128-cfb1',
  'aes-128-cfb8',
  'aes-128-ctr',
  'aes-128-ecb',
  'aes-128-gcm',
  'aes-128-ocb',
  'aes-128-ofb',
  'aes-128-xts',
  'aes-192-cbc',
  'aes-192-ccm',
  'aes-192-cfb',
  'aes-192-cfb1',
  'aes-192-cfb8',
  'aes-192-ctr',
  'aes-192-ecb',
  'aes-192-gcm',
  'aes-192-ocb',
  'aes-192-ofb',
  'aes-256-cbc',
  'aes-256-cbc-hmac-sha1',
  'aes-256-cbc-hmac-sha256',
  'aes-256-ccm',
  'aes-256-cfb',
  'aes-256-cfb1',
  'aes-256-cfb8',
  'aes-256-ctr',
  'aes-256-ecb',
  'aes-256-gcm',
  'aes-256-ocb',
  'aes-256-ofb',
  'aes-256-xts',
  'aes128',
  'aes128-wrap',
  'aes192',
  'aes192-wrap',
  'aes256',
  'aes256-wrap',
  'bf',
  'bf-cbc',
  'bf-cfb',
  'bf-ecb',
  'bf-ofb',
  'blowfish',
  'des',
  'des-cbc',
  'des-cfb',
  'des-cfb1',
  'des-cfb8',
  'des-ecb',
  'des3',
  // 后面还有 39 个...
]
~~~

### AES 与 DES

高级加密标准（英语：Advanced Encryption Standard，缩写：AES），在密码学中又称 Rijndael 加密法，是美国联邦政府采用的一种区块加密标准。这个标准用来替代原先的 DES，已经被多方分析且广为全世界所使用。经过五年的甄选流程，高级加密标准由美国国家标准与技术研究院（NIST）于2001年11月26日发布于 FIPS PUB 197，并在2002年5月26日成为有效的标准。2006年，高级加密标准已然成为对称密钥加密中最流行的算法之一。

AES使用的秘钥长度可以128位、192位或256位，所以通常看到的加密算法：`aes-128/196/256`，表示的都是秘钥的位数。而最后的一段是 AES 的工作模式，最常用的工作模式是 ECB、CBC、CFB 和 OFB 四种。
  1. ECB（电子密码本模式：Electronic codebook）是最简单的块密码加密模式，加密前根据加密块大小（如AES为128位）分成若干块，之后将每块使用相同的密钥单独加密，解密同理。ECB模式由于每块数据的加密是独立的因此加密和解密都可以并行计算，ECB 模式最大的缺点是相同的明文块会被加密成相同的密文块，这种方法在某些环境下不能提供严格的数据保密性。
  2. CBC 模式对于每个待加密的密码块在加密前会先与前一个密码块的密文异或然后再用加密器加密。第一个明文块与一个叫初始化向量的数据块异或。CBC模式相比ECB有更高的保密性，但由于对每个数据块的加密依赖与前一个数据块的加密所以加密无法并行。与ECB一样在加密前需要对数据进行填充，不是很适合对流数据进行加密。
  3. 与ECB 和 CBC 模式只能够加密块数据不同，CFB(密文反馈:Cipher feedback)能够将块密文（Block Cipher）转换为流密文（Stream Cipher）。
  4. OFB（输出反馈：Output feedback）是先用块加密器生成密钥流（Keystream），然后再将密钥流与明文流异或得到密文流，解密是先用块加密器生成密钥流，再将密钥流与密文流异或得到明文，由于异或操作的对称性所以加密和解密的流程是完全一样的。
  5. GCM 可以提供对消息的加密和完整性校验，另外，它还可以提供附加消息的完整性校验。在实际应用场景中，有些信息是我们不需要保密，但信息的接收者需要确认它的真实性的，例如源IP，源端口，目的 IP，IV，等等。因此，我们可以将这一部分作为附加消息加入到 MAC 值的计算当中。最后，密文接收者会收到密文、IV（计数器CTR的初始值）、MAC值。

而 DES 是一种比较传统的加密方式，其加密运算、解密运算使用的是同样的密钥，信息的发送者和信息的接收者在进行信息的传输与处理时，必须共同持有该密码（称为对称密码），是一种对称加密算法。

DES 使用一个 56 位的密钥以及附加的8位奇偶校验位，产生最大64位的分组大小。所以正常我们给 DES 加密的时候都是传递56位秘钥即可。同样 DES 也有几种工作模式：DES、ECB、CBC，工作模式基本和上面的一致。

### AES-256-GCM 示例

~~~js
const crypto = require('node:crypto')

// 初始化参数
const text = 'Encryption Testing AES GCM mode' // 要加密和解密的数据
const key = crypto.randomBytes(32) // 256 位的共享密钥
const iv = crypto.randomBytes(16) // 初始向量(加工密匙)，16 字节
const algorithm = 'aes-256-gcm' // 加密算法和操作模式

// 加密
const cipher = crypto.createCipheriv(algorithm, key, iv) // 初始化加密算法
let encrypted = cipher.update(text, 'utf8', 'hex') // 进行加密+
encrypted += cipher.final('hex') // 加入剩余内容
const tag = cipher.getAuthTag() // 生成标签，用于验证密文的来源

// 解密
const decipher = crypto.createDecipheriv(algorithm, key, iv) // 初始化解密算法
decipher.setAuthTag(tag) // 传入验证标签，验证密文的来源
let decrypted = decipher.update(encrypted, 'hex', 'utf8') // 进行解密
decrypted += decipher.final('utf8') // 加入剩余内容

console.log(decrypted) // Encryption Testing AES GCM mode
~~~

## 非对称加密（RSA）

非对称加密算法需要两个密钥：公开密钥（publickey:简称公钥）和私有密钥（privatekey:简称私钥）。非对称密码体制的特点：算法强度复杂、安全性依赖于算法与密钥但是由于其算法复杂，而使得加密解密速度没有对称加密解密的速度快。对称密码体制中只有一种密钥，并且是非公开的，如果要解密就得让对方知道密钥。

### 生成密匙对

~~~js
const { generateKeyPair, generateKeyPairSync } = require('node:crypto')
generateKeyPair('rsa', { // 算法名称 必须是 rsa / dsa / ec 之一
  modulusLength: 4096, // 密匙长度
  publicKeyEncoding: { // 公钥编码格式
    type: 'spki', // pkcs1、spki
    format: 'pem'
  },
  privateKeyEncoding: { // 私钥编码格式
    type: 'pkcs8', // 私钥输出格式 必须是 pkcs1 / pkcs8 / sec1 之一
    format: 'pem', // 私钥输出格式 必须是 pem / der 之一
    cipher: 'aes-256-cbc', // 对私钥使用 aes-256-cbc 算法加密后返回
    passphrase: 'top secret' // aes-256-cbc 算法密钥
  }
}, (err, publicKey, privateKey) => {
  // 创建文件保存密匙对....
})
// 同步方法
const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {/* ... */})
~~~

### 公私加解密

~~~js
const crypto = require('node:crypto')
const fs = require('node:fs')
// 读取密匙对
const publicKey = fs.readFileSync('/mypubkey.pem')
const privateKey = fs.readFileSync('/ mykey.pem')
// 需要加密的内容
const data = 'data to crypt'
// 公钥加密
const encryptData = crypto.publicEncrypt(publicKey, Buffer.from(data))
console.log('encode', encryptData)
// 私钥解密
const decryptData = crypto.privateDecrypt(privateKey, encryptData)
console.log('decode', decryptData.toString())
~~~

## Sign / Verify (签名与验证)

Sign签名存在目的是为了防止不法分子修改参数数据，进而攻击服务器，导致数据泄露或从中获得利益。例如：一个接口是用户把积分转帐给他的朋友，修改后，变为转帐到攻击者的帐户，这样，攻击者就能得到利益。

~~~js
// 引入REA密匙生成器, 创建签名函数, 验证签名函数
const { generateKeyPairSync, createSign, createVerify } = require('node:crypto')
// 生成REA密匙
const { publicKey, privateKey } = generateKeyPairSync('rsa', { modulusLength: 4096 })// 密匙长度4096
// 私钥生成签名
const sign = createSign('SHA256')
sign.update('签名内容')
const sign_buf = sign.sign(privateKey)
// 公钥验证签名
const verify = createVerify('SHA256')
verify.update('签名内容')
console.log(verify.verify(publicKey, sign_buf))
~~~

## 密匙交换（DH）

DH 密钥交换是1976年由 Diffie 和 Hellman 共同发明的一种算法。使用这种算法，通信双方仅通过交换一些可以公开的信息就能够生成出共享的密码数字，而这一密码数字就可以被用作对称密码的密钥。IPsec 中就使用了经过改良的 DH 密钥交换。

~~~js
const crypto = require('node:crypto')
// Generate(生成) Alice's keys...
// 创建客户端的DH实例, 素数长度为1024
const alice = crypto.createDiffieHellman(1024)
// 产生公/私钥对, Ya = a^Xa mod p
const aliceKey = alice.generateKeys()

// Generate(生成) Bob's keys...
// 创建客户端的DH实例, 采用跟客户端相同的素数
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator())
// 产生公/私钥对, Ya = a^Xa mod p
const bobKey = bob.generateKeys()

// 交换并生成密匙...
// 计算 Ka = Yb^Xa mod p
const aliceSecret = alice.computeSecret(bobKey)
// 计算 Kb = Ya^Xb mod p
const bobSecret = bob.computeSecret(aliceKey)

// 由于素数p是动态生成的，所以每次打印都不一样
// 但是 clientSecret === serverSecret
console.log(aliceSecret === bobSecret)
~~~

## 密匙交换（ECDH）

ECDH 类是创建椭圆曲线 Diffie-Hellman（Elliptic Curve Diffie-Hellman (ECDH)）键交换的实用工具。ECDH 类的实例可以使用 `crypto.createECDH()` 方法。

~~~js
const crypto = require('node:crypto')

// Generate(生成) Alice's keys...
const alice = crypto.createECDH('secp521r1')
const aliceKey = alice.generateKeys()

// Generate(生成) Bob's keys...
const bob = crypto.createECDH('secp521r1')
const bobKey = bob.generateKeys()

// 交换并生成密匙...
// 计算 Ka = Yb^Xa mod p
const aliceSecret = alice.computeSecret(bobKey)
// 计算 Kb = Ya^Xb mod p
const bobSecret = bob.computeSecret(aliceKey)

console.log(aliceSecret === bobSecret)
~~~
