<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="bg-gray-100">
    <Navbar />
    <main class="container mx-auto py-4">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Define default layout styles here using Tailwind CSS */
</style>