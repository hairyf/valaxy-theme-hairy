declare module 'valaxy' {
  export interface Post {
    image: string
    durations: Omit<import('reading-time').ReadTimeResults, 'text'>
    length: number
  }
}


export {}