<template>
  <div>
    <Hero />
    <Clients />
    <Tabs />
    <Showcase :portfolio="portfolio" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "../components/Hero.vue";
import Clients from "../components/Clients.vue";
import Tabs from "../components/Tabs.vue";
import Showcase from "../components/Showcase.vue";
import data from "../data.json";

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
  components: {
    Hero,
    Clients,
    Tabs,
    Showcase,
  },
  computed: {
    portfolio(): PortfolioSection[] {
      return data.portfolio;
    },
  },
});
</script>

<style scoped>
.mc {
  font-family: 'Ubuntu', sans-serif;

  font-weight: bold;
  color: #474747;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
</style>

