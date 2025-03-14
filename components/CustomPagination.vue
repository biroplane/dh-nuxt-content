<script setup lang="ts">
defineProps<{ items: any[] }>()
const currentSlide = defineModel<number>()
</script>

<template>
  <Pagination>
    <div class="flex items-center px-8">
      <ul class="flex gap-2 mx-auto mt-4 flex-wrap items-center justify-center">
        <li v-for="(page, p) in items" :key="p">
          <button
            class="w-3 h-3 transition-all duration-700 rounded-full bg-primary-300"
            :class="{ active: currentSlide === p }"
            aria-label="Call to action"
            @click.prevent="currentSlide = p"
          />
        </li>
      </ul>
    </div>
  </Pagination>
</template>
