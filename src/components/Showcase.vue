<template>
  <section class="bg-gray-200 mt-20 dark:bg-gray-900 pb-20 md:pt-10">
    <div class="mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center mx-10">
        <h1
          class="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-5 md:my-0 md:text-white lg:text-left"
        >
          Latest Work
        </h1>

        <!-- <div class="showcase-items">
          <div
            v-for="item in showcaseItems"
            :key="item.id"
            class="showcase-item"
          >
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <img :src="'img/' + item.image" :alt="item.title" />
            <div>
              <v-container mt-10>
              <v-row align="center" justify="center" >
                <v-col cols="auto">
                  <v-btn color="black" dark :href="item.link" density="default" icon="mdi-github"></v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="black" dark :href="item.site" density="default" icon="mdi-open-in-new"></v-btn>
                </v-col>
              </v-row>
              </v-container>
            </div>
          </div>
        </div> -->

        <div v-for="item in showcaseItems" :key="item.id" class="showcase-item">
          <div class="mt-2 grid">
            <v-card class="mx-auto my-6" max-width="674">
              <v-img
                fit
                height="250"
                :src="'img/' + item.image"
                :alt="item.title"
              ></v-img>

              <v-card-item>
                <v-card-title>{{ item.title }}</v-card-title>

                <v-card-subtitle>
                  <span class="me-1">Latest Work</span>

                  <v-icon
                    color="error"
                    icon="mdi-fire-circle"
                    size="small"
                  ></v-icon>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text>
                <div>
                  {{ item.description }}
                </div>
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>

              <!-- <v-card-title>Stack</v-card-title> -->

              <!-- <div class="px-4">
                <v-chip-group>
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </div> -->

              <v-container mt-10>
                <v-row justify="center">
                  <v-col cols="auto">
                    <v-btn
                    :href="item.link" 
                    target="_blank"
                      color="black"
                      elevation="24"
                      >Github
                      <v-icon end icon="mdi-github"></v-icon>
                    </v-btn>
                  </v-col>

                  <v-col cols="auto">
                    <v-btn
                    :href="item.site" 
                    target="_blank"
                      color="black"
                      elevation="24"
                      >Live Demo
                      <v-icon end icon="mdi-open-in-new"></v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  name: "Showcase",
  props: {
    portfolio: {
      type: Array as () => PortfolioSection[],
      required: true,
    },
  },
  computed: {
    showcaseItems(): PortfolioItem[] {
      const showcaseSection = this.portfolio.find(
        (section: PortfolioSection) => section.slug === "showcase",
      );
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
