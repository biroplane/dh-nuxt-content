<script setup lang="ts">
defineProps<{level:number}>()
</script>
<template>
  <component :is="`h${level}`" class="prose">
    <slot />
  </component>
</template>