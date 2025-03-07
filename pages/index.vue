<script setup lang="ts">
const { data: blog } = await useAsyncData('[home]', () => queryCollection('blog').all())
const locations = await callOnce('[locations]', () => queryCollection('pages').where("uid", "=", "location").all())
const { data: weddings } = await useAsyncData('[wedding]', () => queryCollection('wedding').all())

console.log("HOME ", weddings)
// const home=ref()
// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })

const config = {
  height: "100%",
  itemsToShow: 4,
  gap: 50,
  wrapAround:true,
  pauseAutoplayOnHover:true,
  autoplay:5000,
  transition:1750,
  dir:'rtl'
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="h-dvh w-full snap-y snap-mandatory overflow-y-auto relative">
      <PageSection>

        <ClientOnly>
          <video loop muted autoplay class="h-full w-full object-cover –z-10" preload="auto" src="/flash.mp4" />

        </ClientOnly>


      </PageSection>
      <div class="gallery snap-end py-12">
        <h2 class="text-center text-6xl font-extrabold  py-12">Gallery</h2>
        <ClientOnly>
          <Carousel :items-to-show="1.2" wrap-around pause-autoplay-on-hover :autoplay="5000" :transition="1750" :gap="50" snap-align="center">
            <Slide v-for="(item, i) in weddings" :key="i" >
              <article class="bg-red-500">{{ item }}</article>
              <!-- <article class="card flex flex-col">
            <div class="image w-full min-h-64 aspect-video overflow-hidden">
              <img loading="lazy" :src="item.logo" alt="" class="h-full w-full object-cover rounded-lg" />
            </div>

            <div class="info relative font-extrabold my-6 px-12" :class="{ 'order-first': i % 2 === 0 }">
              <strong class="absolute left-0 text-6xl md:text-9xl opacity-20">{{ (i + 1).toString().padStart(2, '0') }}</strong>
              <h4 class="ml-4 title text-3xl md:text-6xl font-extrabold italic">
                {{ item.title }}
              </h4>
              <ContentRenderer :value="item" class="font-normal" />
            </div>
          </article> -->
            </Slide>
            <template #addon>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </ClientOnly>

      </div>
      <PageSection half-page>
        <ClientOnly>
          <Carousel v-bind="config">
            <Slide v-for="item in weddings" :key="item.stem" class="h-96">
              <img :src="item.logo" alt="image" class="w-full h-full object-cover" />
            </Slide>
            <template #addons>
              <Navigation />
              <!-- <Pagination /> -->
            </template>
          </Carousel>
        </ClientOnly>
      </PageSection>
      <PageSection class="bg-white h-screen z-50 " center v-if="blog">

        <div class="flex flex-nowrap overflow-x-auto no-scrollbar w-dvw scroll-smooth snap-x snap-mandatory relative"
          v-if="blog?.length > 0" >
          <div class="bg-black overflow-y-auto h-dvh w-dvw flex-[0_0_auto] snap-start" v-for="(post, p) in blog"
            :key="post.path">
            <ContentRenderer :value="post" class="main-section max-w-3xl prose-invert prose prose-sm prose-a:no-underline" />
          </div>
          <div class="relative right-0 w-64 h-64 bg-pink-500"></div>
        </div>
        <div v-else>Not found</div>

      </PageSection>
      <PageSection class="bg-red-500 z-50 " no-snap center>
        <div class=" overflow-clip  h-full flex items-center relative">
          <div
            class="danny text-9xl font-bold text-purple-500 animate-slide-out absolute  -right-48 md:right-auto  md:left-0">
            <img loading="lazy" src="/fullbody.png">
          </div>
          <div class="grid md:grid-cols-2">
            <div class=" col-start-2 max-w-2xl mx-auto px-8 md:px-0 ">
              <h2 class="text-7xl font-bold">Danny Howen</h2>
              <div class="mt-8">PIPPO Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ea earum harum
                commodi
                quod incidunt, sequi quaerat neque aliquid nesciunt expedita distinctio totam repellat ex atque. Modi
                iusto
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta
          repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
        </div>
      </PageSection>
      <PageSection half-page center>
        <div class="bg-lime-500 p-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae accusantium ducimus iusto
          laudantium ex esse quam fuga unde. Veritatis voluptatem omnis minima repellat eum excepturi officia eligendi
          praesentium nostrum?
          Minima facere mollitia quod quibusdam, qui optio placeat soluta pariatur cum maxime quisquam omnis totam
          beatae
          similique quia numquam aperiam quidem ipsam, consequatur asperiores assumenda voluptas autem ratione
          explicabo.
          Nostrum.
          Nostrum minus perspiciatis deserunt quibusdam non delectus, architecto eveniet dignissimos sit sequi a,
          excepturi
          sint rerum in magnam possimus vitae aperiam! Error minima repellat accusantium ratione possimus necessitatibus
          quidem iure.
          Dolorem enim, dicta nisi rem laboriosam ipsam nesciunt dolorum ad numquam temporibus dolore aliquam
          exercitationem
          perspiciatis assumenda quia doloribus. Optio ipsam qui officiis perspiciatis, nihil quas. Aut sint ea est.
          Quo est, blanditiis aliquid mollitia quia illum quis voluptate deserunt tempora pariatur itaque. Ad molestiae
          reiciendis dolores enim aliquam quam dolor saepe impedit optio. Laudantium repellat dolorum quaerat distinctio
          placeat?
        </div>
      </PageSection>
      <PageSection half-page center>
        <div class="bg-lime-500 p-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta
          repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
        </div>
      </PageSection>
      <PageSection half-page center>
        <div class="bg-lime-500 p-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad pariatur rerum quibusdam nobis quidem dicta
          repellat ea, officiis cumque maxime sapiente a exercitationem error labore impedit eos deleniti accusamus?
        </div>
      </PageSection>

      <AppFooter />
    </div>

  </div>



</template>

<style lang="postcss">
body {
  /* background-image: url('/flash.mp4'); */
  background-size: 5%;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  scroll-snap-align: start;
}

.main-container>* {
  @apply snap-start
}

.main-section {
@apply p-8 md:px-16;
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