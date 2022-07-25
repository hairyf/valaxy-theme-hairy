# valaxy-addon-statistics

Statistical article information

## Usage

Added post attribute

- length:number (Article word count)
- duration:{minutes, time, words} (Reading time)

Use anywhere you can think of

```ts
frontmatter.duration
frontmatter.length
// or
post.duration
post.length
```

## Options

- [readingTime](https://github.com/ngryman/reading-time#readme)