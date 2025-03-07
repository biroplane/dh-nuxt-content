<script setup lang="ts">
defineProps<{items:any[]}>()
</script>


<template>
  <div class="w-screen overflow-hidden">
    <div class="flex flex-nowrap overflow-x-auto no-scrollbar w-dvw scroll-smooth snap-x snap-mandatory" v-if="items?.length>0">
            <div class="overflow-y-auto  w-dvw flex-[0_0_auto] snap-start"  v-for="(item,i) in items" :key="i">
              <slot :item="item" />
            </div>
          </div>
  </div>
</template>