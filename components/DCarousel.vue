<script setup lang="ts">
import { computed, ref } from 'vue'

// Define props
const props = defineProps<{ items: any[], itemsPerSlide?: number }>()

// Current slide index
const currentIndex = ref(0)
const _itemsPerSlide = computed(() => props.itemsPerSlide || 1)

// Calculate the width of each item based on itemsPerSlide
const itemStyle = computed(() => ({
  width: `${100 / _itemsPerSlide.value}%`,
}))

// Calculate the transform style for the carousel
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / _itemsPerSlide.value)}%)`,
}))

// Navigate to the previous slide
function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Navigate to the next slide
function next() {
  if (currentIndex.value < props.items.length - _itemsPerSlide.value) {
    currentIndex.value++
  }
}
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Carousel Container -->
    <div class="flex transition-transform duration-300 ease-in-out" :style="carouselStyle">
      <!-- Carousel Items -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex-none"
        :style="itemStyle"
      >
        <!-- Slot for custom item content -->
        <slot :item="item" :index="index" />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      @click="prev"
    >
      &lt;
    </button>
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      @click="next"
    >
      &gt;
    </button>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
