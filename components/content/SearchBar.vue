<script setup lang="ts">
import MiniSearch from 'minisearch'

const query = ref('')
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('blog'))

const miniSearch = new MiniSearch({
  fields: ['title'],
  storeFields: ['title'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})

// Add data to the MiniSearch instance
miniSearch.addAll(toValue(data.value) || [])
const results = computed(() => miniSearch.search(toValue(query)))
</script>

<template>
  <div class="">
    <div class="p-2 border rounded-md bg-white/10">
      <input v-model="query" class="border-b-2 w-full p-2 bg-transparent focus:outline-none">
    </div>
    <ul class=" not-prose p-4 bg-white/10 text-wrap mt-4 rounded-md">
      <li v-for="(link, r) in results" :key="r" class="p-1">
        <NuxtLink :to="link.id">
          {{ link.title }}
        </NuxtLink>
        <p class="text-gray-500 text-xs">
          {{ link.content }}
        </p>
      </li>
    </ul>
  </div>
</template>
