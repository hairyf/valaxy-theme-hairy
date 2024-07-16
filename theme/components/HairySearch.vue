<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

const siteConfig = useSiteConfig()
const isAlgolia = computed(() => siteConfig.value.search.type === 'algolia')
const isFuse = computed(() => siteConfig.value.search.type === 'fuse')
</script>

<template>
  <HairyAlgoliaSearch v-if="isAlgolia" />
  <HairyFuseSearch v-if="isFuse" />
</template>

<style lang="scss">
.VPNavBarSearch {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .VPNavBarSearch {
    flex-grow: 1;
    padding-left: 24px;
  }
}

@media (min-width: 960px) {
  .VPNavBarSearch {
    padding-left: 32px;
  }
}

.DocSearch {
  --docsearch-primary-color: var(--hy-c-brand);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-text-color: var(--hy-c-text-1);
  --docsearch-muted-color: var(--hy-c-text-2);
  --docsearch-searchbox-shadow: none;
  --docsearch-searchbox-focus-background: transparent;
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
  --docsearch-modal-background: var(--hy-c-bg-soft);
  --docsearch-footer-background: var(--hy-c-bg);
}

.dark .DocSearch {
  --docsearch-modal-shadow: none;
  --docsearch-footer-shadow: none;
  --docsearch-logo-color: var(--hy-c-text-2);
  --docsearch-hit-background: var(--hy-c-bg-mute);
  --docsearch-hit-color: var(--hy-c-text-2);
  --docsearch-hit-shadow: none;
}

.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 55px;
  background: transparent;
  transition: all 0.25s;
}

.DocSearch-Button:hover {
  background: transparent;
}

.DocSearch-Button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

.DocSearch-Button:focus:not(:focus-visible) {
  outline: none;
}

@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 10px 0 12px;
    width: 100%;
    height: 40px;
    /* background-color: var(--hy-c-bg-alt); */
  }

  .DocSearch-Button:hover {
    background-color: rgba(255, 255, 255, 0.4);
    border-color: var(--hy-c-brand);
  }

  .dark {
    .DocSearch-Button:hover {
      background-color: transparent;
      border-color: var(--hy-c-brand);
    }
  }
}

.DocSearch-Button .DocSearch-Button-Container {
  display: flex;
  align-items: center;
}

.DocSearch-Button .DocSearch-Search-Icon {
  position: relative;
  width: 1em;
  height: 1em;
  color: var(--hy-c-text-1);
  fill: currentColor;
  transition: color 0.5s;
}

.DocSearch-Button:hover .DocSearch-Search-Icon {
  color: var(--hy-c-text-1);
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Search-Icon {
    top: 1px;
    margin-right: 8px;
    width: 14px;
    height: 14px;
    color: var(--hy-c-text-2);
  }
}

.DocSearch-Button .DocSearch-Button-Placeholder {
  display: none;
  margin-top: 2px;
  padding: 0 16px 0 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--hy-c-text-2);
  transition: color 0.5s;
}

.DocSearch-Button:hover .DocSearch-Button-Placeholder {
  color: var(--hy-c-text-1);
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Button-Placeholder {
    display: inline-block;
  }
}

.DocSearch-Button .DocSearch-Button-Keys {
  display: none;
  min-width: auto;
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Button-Keys {
    display: flex;
    align-items: center;
  }
}

.DocSearch-Button .DocSearch-Button-Key {
  display: block;
  margin: 2px 0 0 0;
  border: 1px solid var(--hy-c-divider);
  border-right: none;
  border-radius: 4px 0 0 4px;
  padding-left: 6px;
  min-width: 0;
  width: auto;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.5s, border-color 0.5s;
}

.DocSearch-Button .DocSearch-Button-Key+.DocSearch-Button-Key {
  border-right: 1px solid var(--hy-c-divider);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding-left: 2px;
  padding-right: 6px;
}

.DocSearch-Form {
  border: 1px solid var(--hy-c-brand);
  background-color: var(--hy-c-white);
}

.dark .DocSearch-Form {
  background-color: var(--hy-c-bg-mute);
}

.dark .DocSearch-Footer {
  border-top: 1px solid var(--hy-c-divider);
}
</style>
