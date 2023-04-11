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
      <div
        class="items-center justify-center"
        v-for="category in categories"
        :key="category.id"
        v-show="activeTab === category.id"
      >
        <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
          <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8 justify-items-center"
          >
            <div v-for="app in category.applications" :key="app.id">
              <img :src="app.image" alt="app.title" />
              <button
                @click="setSelectedApp(app)"
                class="text-blue-600 hover:text-blue-800 focus:outline-none"
              >
                {{ app.title }}
              </button>
            </div>
          </div>
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
      <!-- ./Selected App Card -->
    </div>
  </div>
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
// import { ref, computed } from "vue";
// import portfolioData from "../data.json";

// interface Application {
//   id: number;
//   title: string;
//   slug: string;
//   image: string;
//   link?: string;
//   site?: string;
//   description: string;
// }

// interface Portfolio {
//   id: number;
//   title: string;
//   slug: string;
//   image: string;
//   applications: Application[];
// }

// export default {
// setup() {
// const activePanel = ref("panel-1");
// const categories = computed(() => portfolioData.portfolio);
// const selectedApp = ref<Application | null>(null);
// setup() {
//   const activeTab = ref(data.portfolio[0].id);
//   const categories = computed(() => data.portfolio.filter((item) => item.slug !== "showcase"));
//   const selectedApp = ref(null);

//       function setActiveTab(tabId) {
//     activeTab.value = tabId;
//   }

// function setActivePanel(panel: string) {
//   activePanel.value = panel;
// }

// function isActive(panel: string) {
//   return activePanel.value === panel;
// }

// function setSelectedApp(app) {
//   selectedApp.value = app;
// }

// const filteredPortfolioData = computed(() => {
//   return portfolioData.portfolio.filter(
//     (item) => item.title !== "Showcase",
//   );
// });

//     return {
//       activeTab,
//       categories,
//       selectedApp,
//       setActiveTab,
//       setSelectedApp,
//     };
//   },
// };
</script>

<style scoped>
.child {
  height: 50%;
  width: 50%;
}

.self-end {
  align-self: flex-end;
}

.border-2 {
  border-width: 2px;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.text-center {
  text-align: center;
}

.duration-200 {
  transition-duration: 200ms;
}

.item-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.item-container > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.item-container {
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

@media (min-width: 768px) {
  .item-container {
    flex-direction: row;
  }

  .item-container > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }
}

.item {
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .item {
    width: 25%;
  }
}

.item-gradient {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  --tw-gradient-from: transparent;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(0 0 0 / 0));
  --tw-gradient-to: #111827;
}

.group:hover .item-gradient {
  --tw-gradient-from: #f9fafb;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(249 250 251 / 0));
  --tw-gradient-to: #fff;
  opacity: 0.7;
}

#hero {
  background-image: url("/assets/images/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 576px) {
  #hero {
    background-image: url("/assets/images/hero.png");
    background-position: center;
  }
}
h5 {
  position: absolute;
  bottom: 1rem;
  width: 13rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  transition-duration: 200ms;
}

.group:hover h5 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

@media (min-width: 768px) {
  h5 {
    bottom: 2rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
.mc {
  font-family: "Ubuntu", sans-serif;

  font-weight: bold;
  color: #474747;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
</style>
