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
        </h1>
          <div class="mask-background text-3xl font-extrabold sm:text-5xl">
            <strong class="mc block font-extrabold">
              A Denver Developer
            </strong>
          </div>

        <v-container mt-10>
          <v-row justify="center">
            <v-col cols="auto">
              <v-btn
                color="black"
                href="/docs/MiaDugas2023.pdf"
                target="_blank"
                elevation="24"
                >Resume
                <v-icon end icon="mdi-file-outline"></v-icon>
              </v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn @click="showCalendlyWidget" elevation="24" color="black"
                >Schedule Call
                <v-icon end icon="mdi-calendar-clock"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const showCalendlyWidget = () => {
      const calendlyURL = "https://calendly.com/miadugas/30min";
      const windowFeatures =
        "width=800,height=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes";
      const newWindow = window.open("", "_blank", windowFeatures);

      if (newWindow) {
        newWindow.document.write(
          `<html><head><title>Calendly</title></head><body><iframe src="${calendlyURL}" frameborder="0" width="100%" height="100%"></iframe></body></html>`,
        );
        newWindow.document.close();
      }
      return false;
    };
    const backdropStyle = {
      background: "hsla(0, 0%, 100%, 0.55)",
      backdropFilter: "blur(5px)",
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
  content: "";
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
  margin: 20px auto;
  font-family: "Ubuntu", sans-serif;

  font-weight: bold;
  color: #000000;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
.mask-background {
  /* background-color: rgb(255, 255, 255); 
  display: inline-block;
  padding: 5px;
      backdrop-filter: "blur(5px)", */
  margin: 10px;
  background-color: #ffffff;
  opacity: 0.6;
  display: inline-block;
  background: rgba(244, 245, 244, 0.3)
}

.masked-text {
  color: black;
  margin: 0;
  font-weight: bold;
  background-color: #ffffff;
  opacity: 0.0;
}

</style>
