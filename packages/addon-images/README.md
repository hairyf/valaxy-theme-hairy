# valaxy-addon-images

Add beautiful images to each article

## Usage

in any post md file

```md

# Title

![image]({{ image }})

```

`valaxy-addon-images` has built-in 60 beautiful images, If you don't create `images.yml`, it will automatically create it for you

if you want to override the default images, you can add `images.yml` in the root directory and the number of images must be more than 6

```yml
- https://tva3.sinaimg.cn/large/9bd9b167gy1g4lhhtjglaj21hc0xck3n.jpg
- https://tva3.sinaimg.cn/large/9bd9b167gy1fwrszgvaagj21hc0u0n8b.jpg
- https://tva2.sinaimg.cn/large/9bd9b167gy1fwrt774hrkj21hc0u0h10.jpg
- https://tva4.sinaimg.cn/large/9bd9b167gy1fwsfx0f75jj21hc0u01kx.jpg
- https://tva4.sinaimg.cn/large/9bd9b167gy1g4lhmu1w18j21hc0xc1cm.jpg
- https://tva1.sinaimg.cn/large/9bd9b167gy1fwrtkvj112j21hc0u04kv.jpg
```

Of course, it also supports relative paths based on files or folders

> TODO

```yml
- public
```

or

> TODO

```yml
- public/a.jpg
- public/b.jpg
- public/c.jpg
- public/d.jpg
- public/e.jpg
```

## Theme Develop

Added post attribute

- image:string

Add properties to a post object

```ts
post.image
```