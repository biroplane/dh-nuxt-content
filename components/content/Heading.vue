<script setup lang="ts">
defineProps<{level:number}>()
</script>
<template>
  <component :is="`h${level}`" >
    <slot />
  </component>
</template>