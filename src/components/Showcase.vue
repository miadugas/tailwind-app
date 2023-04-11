<template>
  <section class="bg-gray-200 mt-20 dark:bg-gray-900 pb-20 md:pt-10">
    <div class="mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center mx-10">
        <h1 class="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-5 md:my-0 md:text-white lg:text-left">Latest Work</h1>
        <div class="showcase-items">
          <div v-for="item in showcaseItems" :key="item.id" class="showcase-item">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <img :src="'img/' + item.image" :alt="item.title" />
            <a :href="item.link">GitHub</a>
            <a :href="item.site">Website</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import data from '../data.json';

interface PortfolioSection {
  id: number;
  title: string;
  slug: string;
  image: string;
  applications: PortfolioItem[];
}

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  link: string;
  site?: string;
  description: string;
}


export default defineComponent({
  name: 'Showcase',
  props: {
    portfolio: {
      type: Array as () => PortfolioSection[],
      required: true,
    },
  },
  computed: {
    showcaseItems(): PortfolioItem[] {
      const showcaseSection = this.portfolio.find((section: PortfolioSection) => section.slug === 'showcase');
      return showcaseSection?.applications ?? [];
    },
  },
});
</script>

<style scoped>
.showcase-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.showcase-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.showcase-item:hover {
  transform: scale(1.05);
}

.showcase-item img {
  width: 100%;
  max-width: 350px;
  margin-bottom: 0.5rem;
}

.showcase-item h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.showcase-item p {
  text-align: center;
  margin-bottom: 0.5rem;
}

.showcase-item a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #0d47a1;
  color: #fff;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s ease-in-out;
}

.showcase-item a:hover {
  background-color: #0b3e87;
}

@media (max-width: 767px) {
  .showcase-items {
    justify-content: center;
  }

  .showcase-item {
    margin-right: 0;
  }
}
</style>