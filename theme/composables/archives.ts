/* eslint-disable style/max-statements-per-line */
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'
import { computed } from 'vue'
import dayjs from 'dayjs'

interface ArchiveYearMaps {
  [year: string]: {
    [month: string]: { count: number, posts: Post[] }
  }
}
interface ArchiveYear {
  year: string
  month: string
  count: number
  posts: Post[]
}

export function useYearArchives() {
  const posts = usePostList()
  const archives = computed(() => {
    const maps: ArchiveYearMaps = {}
    const items: ArchiveYear[] = []
    for (const post of posts.value) {
      if (!post.date)
        continue
      const days = dayjs(post.date)
      const [year, month] = [days.format('YYYY'), days.format('MM')]
      if (!maps[year])
        maps[year] = {}
      if (!maps[year][month]) { maps[year][month] = { count: 1, posts: [post as any] } }
      else {
        maps[year][month].count++
        maps[year][month].posts.unshift(post as any)
      }
    }
    for (const [year, months] of Object.entries(maps)) {
      for (const [month, { count, posts }] of Object.entries(months))
        items.unshift({ year, month, count, posts })
    }
    return items.sort((a, b) => {
      const aTime = `${a.year}-${a.month}`
      const bTime = `${b.year}-${b.month}`
      return bTime > aTime ? 1 : -1
    })
  })
  return archives
}
