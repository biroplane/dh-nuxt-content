<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-primary-500 text-gray-300 snap-end ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white">
            About Us
          </h4>
          <p class="text-sm leading-6">
            Your app description here. Add your company or application's brief overview.
          </p>
        </div>

        <!-- Quick Links Section -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white">
            Quick Links
          </h4>
          <nav>
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/"
                  class="hover:text-white transition-colors duration-200"
                >
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:text-white transition-colors duration-200"
                >
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="hover:text-white transition-colors duration-200"
                >
                  Contact
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact Section -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white">
            Contact
          </h4>
          <div class="space-y-2 text-sm">
            <p class="flex items-center">
              <span class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              info@example.com
            </p>
            <p class="flex items-center">
              <span class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              (123) 456-7890
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <p class="text-center text-sm">
          &copy; {{ currentYear }} Your App Name. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
