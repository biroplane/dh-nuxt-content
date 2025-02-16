
<script setup lang="ts">
defineProps<{container?:boolean, center?:boolean, halfPage?:boolean, noSnap?:boolean}>()
</script>
<template>

<div class="" :class="[!halfPage?'h-full':'h-1/2',!noSnap?' snap-center':'snap-start']">
  <div :class="{'container mx-auto':container, 'flex items-center justify-center':center}" class="h-full">
    <slot />
  </div>
</div>
</template>