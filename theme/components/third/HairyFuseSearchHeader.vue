<script lang="ts" setup>
import { useModel } from 'vue'

const props = defineProps<{
  text: string
  visible: boolean
}>()

const text = useModel(props, 'text')
const visible = useModel(props, 'visible')
</script>

<template>
  <header class="DocSearch-SearchBar">
    <div class="DocSearch-Form">
      <label id="docsearch-label" class="DocSearch-MagnifierLabel" for="docsearch-input">
        <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </label>
      <input id="docsearch-input" v-model="text" class="DocSearch-Input" aria-autocomplete="both" aria-labelledby="docsearch-label" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="go" spellcheck="false" autofocus="true" placeholder="Search docs" maxlength="64" type="search" aria-activedescendant="docsearch-item-0" aria-controls="docsearch-list">
      <button type="reset" title="Clear the query" class="DocSearch-Reset" aria-label="Clear the query" :hidden="!text" @click="text = ''">
        <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
    <button class="DocSearch-Cancel" type="reset" aria-label="Cancel" @click="visible = false">
      Cancel
    </button>
  </header>
</template>

<style lang="scss" scoped></style>
