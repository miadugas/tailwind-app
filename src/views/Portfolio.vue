<template>
  <div>
    <div class="max-w-6xl mx-auto dark:bg-gray-800 antialiased">
      <h1 class="mc text-6xl font-bold py-20 text-center text-gray-500">
        Portfolio
      </h1>
    </div>
    <!-- <div> -->
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

    <div class="grid md:grid-cols-2 justify-center items-center">
      <div class="px-16 py-6 md:col-span-2 bg-gray-100">
        <div
          v-for="category in categories"
          :key="category.id"
          v-show="activeTab === category.id"
        >
          <div class="mt-8 grid lg:grid-cols-3 gap-10 mx-auto md:max-w-5xl">
            <div
              v-for="app in category.applications"
              :key="app.id"
              class="card hover:shadow-lg"
            >
              <img
                :src="app.image"
                alt="app.title"
                class="h-32 sm:h-48 w-full object-cover zoom-in"
              />
              <div class="m-4">
                <button
                  @click="setSelectedApp(app)"
                  class="text-blue-600 hover:text-blue-800 focus:outline-none font-bold"
                >
                  {{ app.title }}
                </button>
                <span class="block text-gray-500 text-sm">{{
                  app.description
                }}</span>
              </div>
              <div class="flex justify-center">
                <href type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#888888"
                      fill-rule="evenodd"
                      d="M12 1.545c-6.055 0-10.957 4.877-10.957 10.883c0 4.41 2.643 8.205 6.447 9.912c.398.179.787.108 1.091-.12a1.38 1.38 0 0 0 .532-1.107v-.57l-1.357-.184a.489.489 0 0 1-.03-.005c-.748-.146-1.253-.409-1.623-.788c-.311-.319-.501-.701-.662-1.025l-.056-.113a11.645 11.645 0 0 0-.487-.91c-.135-.214-.24-.324-.344-.393c-.264-.175-.518-.472-.518-.843a.72.72 0 0 1 .26-.56a.844.844 0 0 1 .546-.182c.222 0 .431.068.605.146c.178.08.355.186.52.296c.402.268.798.585 1.133.976c.349.406.596.664.968.717c.306.044.618.045.861.034a2.558 2.558 0 0 1 .166-.56a8.347 8.347 0 0 1-.877-.256c-.654-.232-1.383-.593-1.873-1.14c-.538-.602-.871-1.139-1.057-1.767c-.181-.612-.211-1.275-.211-2.091c0-1.25.541-2.303.947-2.862a8.655 8.655 0 0 1-.335-1.501a3.515 3.515 0 0 1 .001-.968c.05-.293.175-.653.504-.87c.317-.211.689-.202.979-.148c.301.057.614.182.902.325c.469.232.935.542 1.284.805c.602-.177 1.667-.405 2.63-.426h.022c.964.021 1.981.249 2.568.425c.35-.262.815-.573 1.283-.804c.288-.143.6-.268.902-.325c.29-.054.662-.063.98.147c.328.218.454.578.503.871c.051.305.039.646 0 .968a8.661 8.661 0 0 1-.334 1.501c.406.56.947 1.613.947 2.862c0 .816-.03 1.479-.21 2.09c-.187.63-.52 1.166-1.058 1.768c-.49.547-1.219.908-1.873 1.14a8.45 8.45 0 0 1-1.062.297c.123.372.167.673.167.846v3.09c0 .47.219.871.53 1.105c.302.229.69.3 1.088.126c3.84-1.692 6.514-5.497 6.514-9.93c0-6.005-4.9-10.882-10.956-10.882ZM9.476 18.71c-.26.037-.001 0-.001 0h-.003l-.008.002l-.029.004a6.523 6.523 0 0 1-.447.037a5.782 5.782 0 0 1-1.066-.043c-.791-.112-1.272-.672-1.583-1.036l-.03-.034a3.6 3.6 0 0 0-.327-.333c.103.19.21.402.325.63l.01.02l.051.104c.175.348.29.58.481.774c.186.19.476.374 1.062.49l1.794.243a.522.522 0 0 1 .452.518v1.027c0 .8-.375 1.513-.95 1.945a2.087 2.087 0 0 1-2.143.236C2.902 21.427 0 17.27 0 12.428C0 5.836 5.377.5 12 .5s12 5.336 12 11.928c0 4.867-2.939 9.035-7.137 10.886a2.09 2.09 0 0 1-2.137-.247a2.426 2.426 0 0 1-.946-1.942v-3.09c0-.07-.049-.474-.322-1.017a.524.524 0 0 1 .408-.755a7.187 7.187 0 0 0 1.504-.356c.594-.21 1.127-.498 1.444-.852c.471-.526.706-.93.835-1.367c.134-.453.168-.98.168-1.793c0-1.141-.6-2.1-.876-2.409a.523.523 0 0 1-.104-.523a7.82 7.82 0 0 0 .375-1.554c.032-.275.034-.505.006-.671a.457.457 0 0 0-.054-.173a.486.486 0 0 0-.207.009c-.17.032-.387.112-.633.234c-.49.242-1 .6-1.316.856a.52.52 0 0 1-.505.085A9.306 9.306 0 0 0 12 7.296c-1.007.024-2.169.31-2.566.453a.52.52 0 0 1-.505-.085a7.775 7.775 0 0 0-1.316-.856a2.607 2.607 0 0 0-.634-.234a.486.486 0 0 0-.206-.009a.456.456 0 0 0-.054.173c-.028.166-.026.396.006.671A7.89 7.89 0 0 0 7.1 8.963c.063.18.024.38-.104.523c-.276.309-.876 1.268-.876 2.409c0 .812.034 1.34.168 1.793c.13.437.364.84.834 1.367c.318.354.85.642 1.445.852a7.194 7.194 0 0 0 1.503.356a.522.522 0 0 1 .246.945c-.165.118-.274.33-.335.575a1.944 1.944 0 0 0-.056.385v.019a.523.523 0 0 1-.449.523Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </href>
                <v-btn type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#888888"
                      d="M18 20.75H6A2.75 2.75 0 0 1 3.25 18V6A2.75 2.75 0 0 1 6 3.25h6a.75.75 0 0 1 0 1.5H6A1.25 1.25 0 0 0 4.75 6v12A1.25 1.25 0 0 0 6 19.25h12A1.25 1.25 0 0 0 19.25 18v-6a.75.75 0 0 1 1.5 0v6A2.75 2.75 0 0 1 18 20.75Zm2-12a.76.76 0 0 1-.75-.75V4.75H16a.75.75 0 0 1 0-1.5h4a.76.76 0 0 1 .75.75v4a.76.76 0 0 1-.75.75Z"
                    />
                    <path
                      fill="currentColor"
                      d="M13.5 11.25A.74.74 0 0 1 13 11a.75.75 0 0 1 0-1l6.5-6.5a.75.75 0 1 1 1.06 1.06L14 11a.74.74 0 0 1-.5.25Z"
                    />
                  </svg>
                </v-btn>
                <v-btn icon="mdi-vuetify">
  Button
</v-btn>
              </div>
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
</style>
