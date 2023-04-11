<template>
  <div>
    <div class="bg-white py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          class="text-4xl text-center font-semibold leading-8 pb-6 text-gray-500"
        >
          I've collaborated with some amazing companies
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-8 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
            src="/svg/MS.svg"
            alt="ms"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
            src="/svg/IMH.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
            src="/svg/CH.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 grayscale"
            src="/svg/EC.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 grayscale"
            src="/svg/QL.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
            src="/svg/MrC.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'Clients',
  setup() {
    const screen = ref({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    const handleResize = () => {
      screen.value.width = window.innerWidth;
      screen.value.height = window.innerHeight;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      screen,
      handleResize,
    };
  },
});
</script>

<style scoped>
.grayscale {
  filter: grayscale(100%) brightness(60%);
}
</style>
