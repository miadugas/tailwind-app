<template>
    <section class="item-container">
    <div class="bg-center bg-no-repeat hero-min bg-gray-500">
      <div class="mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <div
          class="block rounded-lg shadow-lg px-6 py-4"
          :style="backdropStyle"
        >
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl"
          >
            Hi, I'm Mia.
          </h1>
          <p
            class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48 backdrop-filter bg-opacity-50 rounded-lg"
          >
            A Denver Colorado developer, practicing minimalist & I build things
            for the web.
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          >
            <div
              class="inline-flex justify-center rounded-md shadow-sm"
              role="group"
            >
              <button
                type="button"
                class="btn inline-flex items-center px-4 py-2 text-sm font-medium"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                About
              </button>

              <button
                type="button"
                class="btn inline-flex items-center px-4 py-2 text-sm font-medium "
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div>
    <div class="head bg-cover bg-center relative">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-12 gap-4 items-center">
          <div class="col-span-12 lg:order-1 lg:col-span-5">
            <div class="mt-16 relative">
              <img
                src="/images/MDhero.png"
                class="max-h-[300px] mx-auto"
                alt="Hero image"
              />
            </div>
          </div>
          <div class="col-span-12 lg:order-3 lg:col-span-2">
            <div
              class="mt-16 text-center absolute bottom-0 left-0 right-0 mx-auto"
            >
              <i class="fas fa-angle-double-down"></i>
            </div>
          </div>
          <div class="col-span-12 lg:order-2 lg:col-span-5">
            <div class="mt-16">
              <h1 class="text-gray-500">Hello,</h1>
              <h1 class="text-white">I'M Mia</h1>
              <span class="text-gray-500">Web Designer & Developer</span>
              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <div class="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    class="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700"
                  >
                    Resume
                  </a>

                  <a
                    @click="showCalendlyWidget"
                    class="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const showCalendlyWidget = () => {
      const calendlyURL = 'https://calendly.com/miadugas/30min';
      const windowFeatures =
        'width=800,height=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes';
      const newWindow = window.open('', '_blank', windowFeatures);

      if (newWindow) {
        newWindow.document.write(
          `<html><head><title>Calendly</title></head><body><iframe src="${calendlyURL}" frameborder="0" width="100%" height="100%"></iframe></body></html>`
        );
        newWindow.document.close();
      }
      return false;
    };
    const backdropStyle = {
      background: 'hsla(0, 0%, 100%, 0.55)',
      backdropFilter: 'blur(5px)',
    };

    return {
      showCalendlyWidget,
      backdropStyle,
    };
  },
});
</script>

<style scoped>
.mc {
  margin: 40px auto;
  font-family: 'Ubuntu', sans-serif;

  font-weight: bold;
  color: #000000;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
.item-container .bg-gray-500::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(../../public/images/MDhero.png);
  background-size: cover;
  filter: blur(1px);
  opacity: 0.8;
}

.item-container {
  position: relative;
}

.item-container .mx-auto {
  position: relative;
  z-index: 1;
}

.hero-min {
  background-color: #ffffff; /* Change this to the desired background color */
  background-image: none;
}

.hero-min h1 {
  color: black; /* Change this to the desired text color */
  font-size: 4rem; /* Change this to the desired font size */
  font-weight: bold; /* Change this to the desired font weight */
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff; /* Change this to the desired glow effect */
  line-height: 1.2; /* Change this to the desired line height */
  margin-bottom: 1rem;
}

.hero-min p {
  color: black; /* Change this to the desired text color */
  font-size: 1.5rem; /* Change this to the desired font size */
  font-weight: normal; /* Change this to the desired font weight */
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff; /* Change this to the desired glow effect */
  line-height: 1.5; /* Change this to the desired line height */
  margin-bottom: 2rem;
}

.hero-min a {
  color: black; /* Change this to the desired text color */
  font-size: 1.5rem; /* Change this to the desired font size */
  font-weight: bold; /* Change this to the desired font weight */
  text-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 30px #000000; /* Change this to the desired glow effect */
  line-height: 1.5; /* Change this to the desired line height */
  margin: 0 10px;
}
</style>
