
<script setup lang="ts">
defineProps<{container?:boolean, center?:boolean}>()
</script>
<template>

<div class="h-screen relative">
  <div :class="{'container mx-auto':container, 'h-full flex items-center justify-center':center}">
    <slot />
  </div>
</div>
</template>