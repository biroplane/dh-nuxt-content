<script setup lang="ts">
const { data: blog } = await useAsyncData('[blog]', () => queryCollection('blog').limit(2).all())
const blogList = await useAsyncData('[blog_list]', () => queryCollection('blog').skip(2).limit(100).all())
const locations = [
  '/locations/masseria-palesi.png',
  '/locations/lamasangiorgio.png',
  '/locations/masseria-sanlorenzo.png',
  '/locations/villa-carafa.png',
  '/locations/castello-monaci.png',
]
const { data: dannyhowen } = await useAsyncData('[danny]', () => queryCollection('pages').where('uid', '=', 'danny-howen').first())
const { data: weddings } = await useAsyncData('[wedding]', () => queryCollection('wedding').all())

console.log('Danny ', blogList)
// const home=ref()
// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
const breakpoints = {
  320: {
    itemsToShow: 1.2,
  },
  700: {
    itemsToShow: 1.5,
  },
  1024: {
    itemsToShow: 3,
  },
}
const config = {
  height: '650px',
  itemsToShow: 3,
  gap: 50,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  breakpoints,
  transition: 750,
  dir: 'ltr',
}
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="h-dvh w-full snap-y snap-mandatory overflow-y-auto relative">
      <PageSection size="full">
        <ClientOnly>
          <video loop muted autoplay class="h-full w-full object-cover –z-10" preload="auto" src="/flash.mp4" />
        </ClientOnly>
      </PageSection>
      <PageSection size="auto">
        <h2 class="text-center font-bold text-4xl py-12">
          Trustes by top tiers
        </h2>
        <ClientOnly>
          <Carousel :items-to-show="4" wrap-around :gap="50">
            <Slide v-for="location in locations" :key="location">
              <img :src="location" loading="lazy" class=" max-h-64 p-6">
            </Slide>
            <template #addons>
              <Navigation>
                <template #prev>
                  <div class="p-4 rounded-full w-12 h-12 bg-primary-500 ml-24 flex items-center justify-center">
                    <Icon name="fa6-solid:chevron-left" />
                  </div>
                </template>
                <template #next>
                  <div class="p-4 rounded-full w-12 h-12 bg-primary-500 mr-24 flex items-center justify-center">
                    <Icon name="fa6-solid:chevron-right" />
                  </div>
                </template>
              </Navigation>
            </template>
          </Carousel>
        </ClientOnly>
      </PageSection>
      <PageSection v-if="blog" size="full" class="bg-white h-screen z-50 " center>
        <div
          v-if="blog?.length > 0"
          class="flex flex-nowrap overflow-x-auto no-scrollbar w-dvw scroll-smooth snap-x snap-mandatory relative"
        >
          <div
            v-for="(post) in blog" :key="post.path"
            class="bg-black overflow-y-auto h-dvh w-dvw flex-[0_0_auto] snap-start p-8 md:p-24"
          >
            <ContentRenderer
              :value="post"
              class="main-section max-w-3xl prose-invert prose prose-sm prose-a:no-underline py-8"
            />
          </div>

          <div class=" overflow-y-auto h-dvh w-dvw flex-[0_0_auto] snap-start p-24 bg-cyan-300">
            <ul>
              <li v-for="(blogListItem, b) in blogList.data.value" :key="b">
                <NuxtLink :to="blogListItem.path">
                  {{ blogListItem.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          Not found
        </div>
      </PageSection>
      <PageSection size="full" class="bg-primary-500 z-50 " no-snap center>
        <div class=" overflow-clip  h-full grid grid-cols-3 md:grid-cols-2 relative  place-items-center">
          <div
            class="danny text-9xl font-bold text-purple-500 animate-slide-out h-24 md:absolute md:right-auto  md:left-0"
          >
            <img loading="lazy" src="/fullbody.png">
          </div>
          <div class="grid md:grid-cols-2 col-span-3 md:col-span-2">
            <div class=" col-start-2 max-w-2xl mx-auto px-8 md:px-0 ">
              <!-- <h2 class="text-7xl font-bold">
                {{ dannyhowen?.title }}
              </h2> -->
              <div v-motion-slide-visible-right class="mt-8 max-w-lg prose-h1:text-7xl">
                <ContentRenderer :value="dannyhowen ?? {}" class="prose prose-invert" :style="{ '--tv-prose-body': 'blue' }" />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection class="bg-black" size="auto">
        <ClientOnly>
          <Carousel v-bind="{ ...config }" class="py-12" :breakpoints="breakpoints">
            <Slide v-for="(item, i) in weddings" :key="item.stem" class="h-96 perspective-item " :style="{ '--rx': `${Math.random() * 16 - 8}deg`, '--ry': `${Math.random() * 16 - 8}deg`, '--rz': `${Math.random() * 16 - 8}deg` }">
              <article class="card flex flex-col text-white  max-w-full">
                <div class="image w-full min-h-64 aspect-video overflow-hidden">
                  <img loading="lazy" :src="item.logo" alt="" class="h-full w-full object-cover rounded-lg">
                </div>

                <div class="info relative font-extrabold my-6 px-12" :class="{ 'order-first': i % 2 === 0 }">
                  <strong class="absolute left-0 text-6xl md:text-9xl opacity-20">{{ (i + 1).toString().padStart(2, '0')
                  }}</strong>
                  <h4 class="ml-4 title text-xl md:text-4xl font-extrabold italic">
                    {{ item.title }}
                  </h4>
                  <ContentRenderer :value="item" class="font-normal" />
                </div>
              </article>
            </Slide>
            <template #addons>
              <CustomNavigation />
              <CustomPagination :items="weddings ?? []" />
            </template>
          </Carousel>
        </ClientOnly>
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
    transform: translateY(20%) translateX(0%) scale(.3);

  }
}

.perspective-item{

  perspective: 250px;
  transform: rotatex(var(--rx)) rotatey(var(--ry)) rotatez(var(--rz));
  transition:all .325s ease-in-out;
}

.faded {

  .carousel__slide {
    opacity: 0;
    transition: opacity 3s step-end;
  }
  .carousel__slide--active {
    opacity: 1;
    transition-timing-function: ease;
  }
  .carousel__track {
    transition: none !important;
  }
}
</style>
