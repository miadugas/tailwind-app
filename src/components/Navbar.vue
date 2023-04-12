<template>
  <nav
    id="navbar"
    class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl"
  >
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <router-link to="/">
          <img alt="miacodes logo" src="/images/logo.png" />
        </router-link>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li><RouterLink to="/experience">Experience</RouterLink></li>
          <!-- <li><RouterLink to="/about">About</RouterLink></li> -->
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li>
            <RouterLink to="/portfolio"> Portfolio</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
        </span>

        <ul class="divide-y font-sans">
          <li>
            <RouterLink to="/" @click="isOpen = false" class="my-4 inline-block"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/experience"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Experience</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              @click="isOpen = false"
              class="my-4 inline-block"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/portfolio"
              @click="isOpen = false"
              class="my-4 inline-block"
              >Portfolio</RouterLink
            >
          </li>
        </ul>

        <div class="follow text-center">
          <p class="italic font-sans text-sm">My Socials:</p>
          <div class="social flex space-x-5 mt-4 justify-center">
            <RouterLink to="https://github.com/miadugas">
              <svg
              class="link-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#888888"
                  d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801c.719 0 1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799z"
                />
              </svg>
            </RouterLink>
            <RouterLink to="https://www.linkedin.com/in/miadugas/">
              <svg
              class="link-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#888888"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                />
              </svg>
            </RouterLink>
            <RouterLink to="https://dribbble.com/MiaInBatcountry">
              <svg
              class="link-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#888888"
                  d="M9.565 7.421C8.207 5.007 6.754 3.038 6.648 2.893A7.876 7.876 0 0 0 2.311 8.38c.206.004 3.482.043 7.254-.959zm.978 2.64a11 11 0 0 1 .309-.094a26.219 26.219 0 0 0-.637-1.336C6.169 9.843 2.287 9.755 2.15 9.751c-.003.084-.007.166-.007.25c0 2.019.763 3.861 2.016 5.252l-.005-.006s2.15-3.814 6.389-5.186zm-5.372 6.133v-.004c-.058-.045-.12-.086-.178-.135c.106.085.178.139.178.139zM8.118 2.372a.546.546 0 0 1-.015.004c.006-.002.014-.002.014-.002l.001-.002zm7.071 1.732A7.83 7.83 0 0 0 10 2.143c-.639 0-1.258.078-1.852.221c.12.16 1.595 2.119 2.938 4.584c2.962-1.109 4.081-2.812 4.103-2.844zM10 19.2a9.2 9.2 0 0 1-9.199-9.199A9.199 9.199 0 0 1 10 .8a9.2 9.2 0 0 1 9.2 9.201A9.2 9.2 0 0 1 10 19.2zm1.336-7.914c-4.611 1.607-6.134 4.838-6.165 4.904a7.818 7.818 0 0 0 4.828 1.666a7.83 7.83 0 0 0 3.067-.621c-.116-.689-.573-3.096-1.679-5.967a1.464 1.464 0 0 1-.051.018zm.354-3.166c.184.373.358.754.523 1.139c.059.135.114.272.17.406c2.713-.342 5.385.238 5.473.256a7.84 7.84 0 0 0-1.787-4.912c-.018.023-1.279 1.843-4.379 3.111zm1.171 2.785c1.031 2.836 1.449 5.142 1.529 5.611a7.858 7.858 0 0 0 3.367-5.27c-.156-.05-2.356-.747-4.896-.341z"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, watch, onMounted } from "vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  setup() {
    const isOpen = ref(false);

    const drawer = () => {
      isOpen.value = !isOpen.value;
    };

    watch(
      isOpen,
      (isOpen) => {
        if (isOpen) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      },
      { immediate: true },
    );

    onMounted(() => {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen.value) isOpen.value = false;
      });
    });

    return {
      isOpen,
      drawer,
    };
  },
};
</script>
<style scoped>
  .link-svg:hover path {
    fill: #4005b4;
  }
.router-link-exact-active {
  color: #4005b4;
  font-weight: bolder;
}
</style>
