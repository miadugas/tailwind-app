<template>
  <div>
    <div class="max-w-6xl mx-auto dark:bg-gray-800 antialiased">
      <h1 class="mc text-6xl font-bold py-20 text-center text-gray-500">
        Portfolio
      </h1>
    </div>
    <!-- <div> -->
    <v-container fluid>
      <v-card class="bg-tabs">
        <v-card-subtitle
          class="d-flex justify-center items-center max-w-xl mx-auto mb-6 border-b"
        >
          <v-btn
            v-for="category in categories"
            :key="category.id"
            class="text-center cursor-pointer text-gray-600 font-weight-bold"
            :class="{
              active: activeTab === category.id,
              'border-indigo-700 border-b-1': activeTab === category.id,
            }"
            @click="setActiveTab(category.id)"
          >
            {{ category.title }}
          </v-btn>
        </v-card-subtitle>
      </v-card>
    </v-container>

    <div class="grid md:grid-cols-2 justify-center items-center">
      <div class="px-16 py-6 md:col-span-2 bg-gray-100">
        <div
          v-for="category in categories"
          :key="category.id"
          v-show="activeTab === category.id"
        >
          <div class="max-w-6xl mx-auto dark:bg-gray-800 antialiased">
            <h1 class="mc text-3xl text-center text-gray-500">
              {{ category.title }}
            </h1>
          </div>
          <div class="mt-8 grid lg:grid-cols-3 gap-10 mx-auto md:max-w-5xl">
            <div
              v-for="app in category.applications"
              :key="app.id"
              class="card hover:shadow-lg"
            >
              <v-card class="mx-auto my-12" max-width="374">
                <v-img
                  cover
                  height="250"
                  :src="app.image"
                  alt="app.title"
                ></v-img>

                <v-card-item>
                  <v-card-title>{{ app.title }}</v-card-title>


                </v-card-item>

                <v-card-text>
                  <div>
                    {{ app.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <!-- <v-card-title>Stack</v-card-title> -->

                <div class="px-4">

                </div>
                <div class="button-container">
    <v-card>
      <v-card-actions>
        <v-col cols="auto">
          <v-btn
            color="black"
            dark
            :href="app.link"
            density="default"
            icon="mdi-github"
          ></v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="black"
            dark
            :href="app.site"
            density="default"
            icon="mdi-open-in-new"
          ></v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </div>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->

    <!-- Selected App Card -->
    <div v-if="selectedApp" class="container mt-32 mx-auto p-4 md:p-0">
      <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
        <div
          class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
          :style="'background-image:url(' + selectedApp.image + ')'"
        >
          <div class="absolute text-xl">
            <i
              class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="bg-white w-full md:w-2/3">
          <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div
              class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
            >
              <div
                class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left"
              >
                <h3>{{ selectedApp.title }}</h3>
                <p class="mb-0 mt-3 text-grey-dark text-sm italic">
                  {{ selectedApp.slug }}
                </p>
                <hr class="w-1/4 md:ml-0 mt-4 border lg:hidden" />
              </div>
              <div class="w-full lg:w-3/5 lg:px-3">
                <p
                  class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm"
                >
                  {{ selectedApp.description }}
                </p>
              </div>
              <div
                class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left"
              >
                <button
                  class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2"
                >
                  Visit now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="text-gray-600 font-body">
    <main class="px-16 py-6 md:col-span-2 bg-gray-100">
      <div
        v-for="category in categories"
        :key="category.id"
        v-show="activeTab === category.id"
      >
        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">
          Latest Recipes
        </h4>

        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          cards go here -->
  <!-- <div class="card hover:shadow-lg">
            <img
              v-for="app in category.applications"
              :src="app.image"
              :key="app.id"
              alt="app image"
              class="h-32 sm:h-48 w-full object-cover card hover:shadow-lg"
            />
            <div class="m-4">
              <span class="font-bold">{{ app.title }}</span>
              <span class="block text-gray-500 text-sm">{{
                app.description
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div> -->
</template>

<script lang="ts">
import { ref, computed } from "vue";
import portfolioData from "../data.json";

interface Application {
  id: number;
  title: string;
  slug: string;
  image: string;
  link?: string;
  site?: string;
  description: string;
}

interface Portfolio {
  id: number;
  title: string;
  slug: string;
  image: string;
  applications: Application[];
}

export default {
  setup() {
    const activeTab = ref(portfolioData.portfolio[0].id);
    const categories = computed(() =>
      portfolioData.portfolio.filter((item) => item.slug !== "showcase"),
    );
    const selectedApp = ref<Application | null>(null);

    function setActiveTab(tabId: number) {
      activeTab.value = tabId;
    }

    function setSelectedApp(app: Application) {
      selectedApp.value = app;
    }

    return {
      activeTab,
      categories,
      selectedApp,
      setActiveTab,
      setSelectedApp,
    };
  },
};
</script>

<style scoped>
.mc {
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  color: #474747;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
.zoom-in:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>
