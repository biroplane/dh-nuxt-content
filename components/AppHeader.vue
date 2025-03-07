<script setup lang="ts">
const { data } = await useAsyncData('[navigation]', () => queryCollectionNavigation('blog'))
console.log("Data", data.value)
const isOpen = ref(false)
</script>
<template>

  <header class="absolute z-50 w-screen h-screen overflow-clip pointer-events-none">

    <button
      class="absolute  bg-white w-12 h-12 rounded-full left-5 top-5 shadow-lg flex items-center justify-center pointer-events-auto z-40"
      @click="isOpen = !isOpen">
      <Icon name="fluent:headphones-sound-wave-28-regular"></Icon> 
    </button>

    <Transition name="scale" mode="out-in">

      <nav v-if="isOpen" class=" drawer ">
        <div class="flex justify-between px-8 pt-24 md:p-24 container">
          <Logo />
          <button @click="isOpen = false" class=" pointer-events-auto">
            <Icon name="fluent:add-28-regular" class=" rotate-45" />
          </button>
        </div>
        <ul class="px-8 py-6 flex-grow">
          <li v-for="menu in 5" :key="menu">Menu {{ menu }}</li>
        </ul>
        <div class="px-8 py-4 border-t">
          Whats
        </div>
      </nav>
    </Transition>
  </header>
</template>


<style lang="postcss" scoped>
html,
body {
  max-width: 100vw;
}


.drawer {

  @apply bg-purple-500 overflow-hidden w-dvw h-dvh mt-0 ml-0 rounded-none;
  
  
}

.scale-enter-active,
.scale-leave-active {
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.scale-enter-from,
.scale-leave-to {
  

  border-radius: 500px;
  width: 3rem;
  height: 3rem;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  opacity: 1;
}
</style>