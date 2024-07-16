<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import dayjs from 'dayjs'
import { riposte } from '../utils'

const config = useSiteConfig()

const hour = dayjs().hour()
const hello = riposte(
  [hour >= 5 && hour < 12, 'Good morning'],
  [hour >= 12 && hour < 18, 'Good afternoon'],
  [true, 'Good evening'],
)
</script>

<template>
  <HairyContainer>
    <HairyNavbar>
      <template #nav>
        <slot name="header-nav" />
      </template>
    </HairyNavbar>
    <HairyHeader
      :headline="config.title"
      :title="config.author.name"
      :description="`${hello}, how are you doing?`"
    />
    <HairyBody :comment="false">
      <HairyPosts updated pagination :cur-page="parseInt(String($route.params.page || 1))" />
    </HairyBody>
    <HairyFooter />
  </HairyContainer>
</template>
