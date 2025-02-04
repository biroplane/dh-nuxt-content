<script setup lang="ts">
const { data } = await useAsyncData('[navigation]', () =>  queryCollectionNavigation('blog'))
console.log("Data",data.value)
</script>
<template>
  
  <header class="w-full flex justify-between fixed">
    <div class="">L</div>
    <nav>Nav</nav>
  </header>
</template>


<style lang="postcss" scoped>

</style>