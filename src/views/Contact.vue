<template>
  <div>
    <div class="container px-6 mx-auto">
      <section class="text-gray-800">
        <div class="max-w-6xl mx-auto h-48 dark:bg-gray-800 antialiased">
          <h1 class="mc text-6xl font-bold py-20 text-center text-gray-500">
            Contact
          </h1>
        </div>
      </section>
    </div>
  </div>
  <div class="p-0">
    <section
      class="relative bg-cover bg-center bg-no-repeat"
      style="background-image: url(/img/miamagic.png)"
    >
      <div
        class="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center lg:ml-auto sm:text-left">
          <div
            class="block rounded-lg shadow-lg px-6 py-12 md:px-12"
            :style="backdropStyle"
          >
            <h2
              class="mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
            >
              I have a...
            </h2>
            <p
              class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
            >
              keen interest in taking on ambitious or large-scale projects and
              welcome the opportunity to discuss your specific requests or
              inquiries. As an experienced software designer and developer, I
              have the expertise to assist you in navigating the custom software
              design and development process. If you have any questions or ideas
              you'd like to share, please feel free to send me a message, and I
              will make every effort to respond promptly. My calendar is always
              accessible, so don't hesitate to schedule a call to discuss your
              needs. I look forward to hearing from you.
            </p>
          </div>
  <div class="flex justify-center mt-4">
    <div class="mr-4">
        <form action="mailto:miadugas@outlook.com">
      <v-btn color="black" dark>
        <v-icon left>mdi-email</v-icon>
        Email Me
      </v-btn>
      </form>
    </div>
    <div>
      <v-btn color="black" dark @click="showCalendlyWidget">
        <v-icon left>mdi-calendar</v-icon>
        Schedule a Call
      </v-btn>
    </div>
  </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
  .mc {
  margin: 40px auto;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
} */
</style>

<script lang="ts">
import { defineComponent } from 'vue';

import { ref } from 'vue';

const agreed = ref(false);

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
      backdropFilter: 'blur(30px)',
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
  font-family: 'Ubuntu', sans-serif;

  font-weight: bold;
  color: #474747;
  text-align: center;
  text-shadow: 20px 10px 0px #e7e1ff, -15px -6px 0px #d7f6ff;
}
</style>