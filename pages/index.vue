<script setup lang="ts">
const { data: home } = await useAsyncData('[home]', () => queryCollection('content').first())
console.log("HOME ", home.value)
// const home=ref()
// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
</script>

<template>
<div class="w-full h-screen flex items-center justify-center">
  <div class="h-dvh w-full snap-y snap-mandatory overflow-y-auto relative" >
    <PageSection class="" >

      <ClientOnly>
        <video loop muted autoplay class="h-full w-full object-cover –z-10" preload="auto" src="/flash.mp4" />

      </ClientOnly>
      

    </PageSection>
    <PageSection class="bg-white h-screen z-50" container center>
      <div class="max-w-4xl mx-auto">
        <ContentRenderer v-if="home" :value="home" class="main-section" />
        <div v-else>Home not found</div>
      </div>
    </PageSection>
    <PageSection class="bg-red-500 z-50 " no-snap center>
      <div class=" overflow-clip border border-lime-500 h-full flex items-center relative">
        <div class="danny text-9xl font-bold text-purple-500 animate-slide-out absolute border border-blue-500 -right-48 md:right-auto  md:left-0">
          <img loading="lazy" src="/fullbody.png">
        </div>
        <div class="grid md:grid-cols-2">
          <div class=" col-start-2 max-w-2xl mx-auto px-8 md:px-0 ">
            <h2 class="text-7xl font-bold">Danny Howen</h2>
            <div class="mt-8">PIPPO Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ea earum harum commodi
              quod incidunt, sequi quaerat neque aliquid nesciunt expedita distinctio totam repellat ex atque. Modi iusto
              voluptas veniam.</div>
          </div>
        </div>
      </div>
    </PageSection>
    <PageSection class="bg-white z-50 " container no-snap>
      Ciao a tutti
    </PageSection>
    <PageSection half-page center>
      <div class="bg-lime-500 p-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
      </div>
    </PageSection>
    <PageSection half-page center>
      <div class="bg-lime-500 p-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae accusantium ducimus iusto laudantium ex esse quam fuga unde. Veritatis voluptatem omnis minima repellat eum excepturi officia eligendi praesentium nostrum?
        Minima facere mollitia quod quibusdam, qui optio placeat soluta pariatur cum maxime quisquam omnis totam beatae similique quia numquam aperiam quidem ipsam, consequatur asperiores assumenda voluptas autem ratione explicabo. Nostrum.
        Nostrum minus perspiciatis deserunt quibusdam non delectus, architecto eveniet dignissimos sit sequi a, excepturi sint rerum in magnam possimus vitae aperiam! Error minima repellat accusantium ratione possimus necessitatibus quidem iure.
        Dolorem enim, dicta nisi rem laboriosam ipsam nesciunt dolorum ad numquam temporibus dolore aliquam exercitationem perspiciatis assumenda quia doloribus. Optio ipsam qui officiis perspiciatis, nihil quas. Aut sint ea est.
        Quo est, blanditiis aliquid mollitia quia illum quis voluptate deserunt tempora pariatur itaque. Ad molestiae reiciendis dolores enim aliquam quam dolor saepe impedit optio. Laudantium repellat dolorum quaerat distinctio placeat?
      </div>
    </PageSection>
    <PageSection half-page center>
      <div class="bg-lime-500 p-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
      </div>
    </PageSection>
    <PageSection half-page center>
      <div class="bg-lime-500 p-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
      </div>
    </PageSection>
    
    <AppFooter />
  </div>

</div>
    <!-- https://spacetypegenerator.com/flash -->
    <!-- <figure class=" h-screen -z-50">
      <video loop muted autoplay class="fixed h-full w-full object-cover –z-10" preload="auto">
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
          <div class="mt-8">PIPPO Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ea earum harum commodi
            quod incidunt, sequi quaerat neque aliquid nesciunt expedita distinctio totam repellat ex atque. Modi iusto
            voluptas veniam.</div>
        </div>
      </div>
    </PageSection>
    <PageSection class="bg-white z-50 " container>
      Ciao a tutti
    </PageSection>
    <PageSection>
      <div class="bg-lime-500 p-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
      </div>
    </PageSection>
    <PageSection>
      <AppFooter class="z-50" />
    </PageSection> -->


</template>

<style lang="postcss">
body {
  /* background-image: url('/flash.mp4'); */
  background-size: 5%;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  scroll-snap-align: start;
}
.main-container > *{
  @apply snap-start
}

.main-section {
  padding: 4rem;
  h1,
  h2,
  h3 {
    font-size: 4rem;
  }
}

.danny {
  animation-timeline: view();
  animation-delay: 2000ms;
  animation-name: slideOut;
  animation-range: entry 20% cover 90%;
  animation-fill-mode: both;
}

@keyframes slideOut {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20%) translateX(25%) scale(.3);

  }
}
</style>