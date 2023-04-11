<template>
  <div class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <!-- logo -->
      <div class="image-container">
        <router-link to="/">
          <img
            alt="Miacodes logo"
            src="/images/logo.png"
            aria-label="Homepage"
          />
        </router-link>
      </div>
      <p class="my-6 text-gray-400 dark:text-gray-400">
        Just a Denver Colorado developer, creating awesome one application at a
        time.
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <router-link to="/" class="mr-4 md:mr-6">Home</router-link>
        </li>
        <li>
          <router-link to="/experience" class="mr-4 md:mr-6">Experience</router-link>
        </li>
        <li>
          <router-link to="/about" class="mr-4 md:mr-6">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="mr-4 md:mr-6">Contact</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="mr-4 md:mr-6">Portfolio</router-link>
        </li>
      </ul>
      <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400"
        >© 2019-2023 <a href="/" class="hover:underline">MiaCodes™</a>. All
        Rights Reserved.</span
      >
      <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400"
        >Designed & Built by Mia Dugas</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>
<style scoped>
.image-container {
  display: flex;
  justify-content: center;
}

.router-link-exact-active {
  color: #4f46e5;
  font-weight: bolder;
}
</style>
