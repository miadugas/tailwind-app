<template>
  <div>
    <div class="max-w-6xl mx-auto dark:bg-gray-800 antialiased">
      <h1 class="mc text-6xl font-bold py-20 text-center text-gray-500">
        Portfolio
      </h1>
    </div>
    <div>
      <div class="bg-tabs">
        <div
          class="flex justify-center items-center max-w-xl mx-auto mb-6 border-b"
        >
          <div
            v-for="category in categories"
            :key="category.id"
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-1 flex-grow tab"
            :class="{
              'border-indigo-700 border-b-1 active': activeTab === category.id,
            }"
            @click="setActiveTab(category.id)"
          >
            <div class="py-5">{{ category.title }}</div>
          </div>
        </div>
      </div>

<div class="grid md:grid-cols-3">
  <main class="px-16 py-6 md:col-span-2 bg-gray-100">
    <div v-for="category in categories" :key="category.id" v-show="activeTab === category.id">
      <div class="mt-8 grid lg:grid-cols-3 gap-10 mx-auto md:max-w-5xl">
        <div v-for="app in category.applications" :key="app.id" class="card hover:shadow-lg">
          <img :src="app.image" alt="app.title" class="h-32 sm:h-48 w-full object-cover zoom-in" />
          <div class="m-4">
            <button @click="setSelectedApp(app)" class="text-blue-600 hover:text-blue-800 focus:outline-none font-bold">
              {{ app.title }}
            </button>
            <span class="block text-gray-500 text-sm">{{ app.description }}</span>
          </div>
          <div class="flex justify-center">
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    Buy now
  </button>
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Choose plan
      <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>

          </div>
        </div>
      </div>
    </div>
  </main>
</div>

    </div>
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
</style>

