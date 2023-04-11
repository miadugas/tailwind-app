<template>
  <section
    class="relative bg-[url('../images/HeroMia.png')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center sm:text-left">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          I'm Mia

          <strong class="mc block font-extrabold"> A Denver Developer </strong>
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
          practicing minimalist & I build cool things for the web.
        </p>

        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            href="/docs/MiaDugas2023.pdf"
            target="_blank"
            class="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Resume</button
          >
          <button
            @click="showCalendlyWidget"
            class="btn bg-white text-sm font-semibold leading-6 text-indigo-700"
            >Schedule a Call<span aria-hidden="true">→</span></button
          >
        </div>
      </div>
    </div>
  </section>
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
.item-container .bg-gray-500::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(./assets/images/Hero.png);
  background-size: cover;
  /* filter: blur(1px); */
  /* opacity: 0.8; */
}

.item-container {
  position: relative;
  background-image: url(./assets/images/miaHero.png);
  background-size: cover;
}

.item-container .mx-auto {
  position: relative;
  z-index: 1;
}

.hero-min {
  background-color: #ffffff; /* Change this to the desired background color */
  background-image: none;
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

.mc {
  margin: 40px auto;
  font-family: 'Ubuntu', sans-serif;

  font-weight: bold;
  color: #000000;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
/*  */
</style>
