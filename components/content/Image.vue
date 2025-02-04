<script setup lang="ts">
defineProps<{src:string}>()
</script>

<template>
  <img loading="lazy" :src />
</template>