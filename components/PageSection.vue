<script setup lang="ts">
defineProps<{
  container?: boolean
  center?: boolean
  size?: 'auto' | 'full' | 'half' | 'third'
  noSnap?: boolean
}>()
</script>

<template>
  <div class="" :class="[{ 'h-1/2': size === 'half', 'h-dvh': size === 'full', 'h-1/3': size === 'third', 'h-auto': size === 'auto' || !size }, !noSnap ? ' snap-center' : 'snap-start']">
    <div :class="{ 'container mx-auto': container, 'flex items-center justify-center': center }" class="h-full">
      <slot />
    </div>
  </div>
</template>
