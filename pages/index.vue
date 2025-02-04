<script setup lang="ts">
const { data: home } = await useAsyncData('[home]',() =>  queryCollection('pages').first())
console.log("HOME ",home.value)
// const home=ref()
// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
</script>

<template>
  <div class="main-container">
    <figure class="relative h-screen">
      <!-- https://spacetypegenerator.com/flash -->
        <video loop muted autoplay class="fixed h-full w-full object-cover" preload="auto">
          <source src="/flash.mp4" />
        </video>
        <figcaption>
          <h1>Really cool video parallax</h1>
        </figcaption>
      </figure>
    <PageSection class="bg-white h-screen z-50" container center>
      <div class="max-w-4xl mx-auto">
        <ContentRenderer v-if="home" :value="home" class="main-section" />
        <div v-else>Home not found</div>
      </div>
    </PageSection>
    <PageSection class="bg-red-500 z-50 " center>
      <div class="danny text-9xl font-bold text-purple-500 animate-slide-out absolute left-0">
        <img loading="lazy" src="/fullbody.png">
      </div>
      <div class="grid grid-cols-2">
        <div class=" col-start-2 max-w-2xl mx-auto ">
          <h2 class="text-7xl font-bold">Danny Howen</h2>
          <div class="mt-8">PIPPO Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ea earum harum commodi quod incidunt, sequi quaerat neque aliquid nesciunt expedita distinctio totam repellat ex atque. Modi iusto voluptas veniam.</div>
        </div>
      </div>
    </PageSection>
    <PageSection class="bg-white z-50 relative" container>
      Ciao a tutti
    </PageSection>
  </div>

</template>

<style lang="postcss">
body{
  background-image: url('/flash.mp4');
  background-size: 5%;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
 }

 .main-section{

padding: 4rem;
h1,h2,h3{
  font-size: 4rem;
}
}

.danny {
  animation-timeline: view();
  animation-name: slideOut;
  animation-range: entry 50% cover 100%;
  animation-fill-mode: both;
}

@keyframes slideOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50%) scale(.5);
    
  }
}
</style>